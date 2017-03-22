let express = require('express')
let bodyParser = require('body-parser')
let session = require('express-session');
let db = require('./initModule.js')
let app = express()
let bcrypt = require('bcrypt-as-promised')
let nodemailer = require('nodemailer'); //sandgrid?
let multer  = require('multer');
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
let upload = multer({ storage: storage })
let fs = require('fs');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let User = db.User
let Post = db.Post
let Comment = db.Comment
let Contribution = db.Contribution
let Media = db.Media
let Picture = db.Picture
let Video = db.Video
let sequelize = db.sequelize
//necessary?
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'))
app.use(session({
	secret: "wow much secret very security",
    resave: true,
    saveUninitialized: false
}));

app.get("/search", function(req, res) {
	let userId = req.session.userId
	res.render("search", {userId})
})

app.get("/searchpost", function (req, res) {
	let userId = req.session.userId
	res.render("searchpost", {userId})
})

app.get("/signup", function(req, res) {
	res.render('signup')
})

app.get("/login", function(req, res) {
	res.render('login')
})

app.get("/logout", function(req, res) {
	req.session.destroy(function(err) {
		res.redirect("home")
	})
})

app.get(["/", "/home"], function(req, res) {
	let userId = req.session.userId

	res.render("home", {userId})
})

app.get("/postmessage", function(req, res) {
	if(req.session.userId === undefined) {
		res.end("Your are not logged in")
	}
	let userId = req.session.userId
	res.render('postmessage', {userId})
})

app.get("/profile", function(req, res) {
	res.render("profile")
})

//for testing multiformhandling
app.post('/uploadhandler', upload.single("file1"), function (req,res) {
	let target_path = 'uploads/' + req.file.originalname;
	let message = req.body.message
	console.log("test: " + message)

	Post.findById(1)
	.then( post => {
		console.log("This is the media target path!!:" + target_path)
		console.log("This is the pooooooooost!!: " + post)
		post.update( {
			media: target_path
		}) 
	})
  /** When using the "single"
      data come in "req.file" regardless of the attribute "name". **/
  var tmp_path = req.file.path;
  /** The original name of the uploaded file
      stored in the variable "originalname". **/
	res.end()
})

app.get("/upload", (req, res) => {
	res.render("upload")
})

app.get('/test', function (req, res) {
	console.log(req)
	res.send('hoi')
})
//Signup Handler
app.post('/signuphandler', function(req, res){
	console.log('request received')
	let firstName = req.body.firstName
	let lastName = req.body.lastName
	let email = req.body.email
	let password = req.body.password
	let passwordCheck = req.body.passwordCheck

	if(password != passwordCheck) {
		return res.send( { error: 'Your passwords don\'t match' } )
	}

	bcrypt.hash(password, null, null, function(err, hash){
		password = hash
		return password
	})
	.then( password => {
		User.create( {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password
		})
		.then(newUser => {
			console.log("New User created: " + newUser.get({
					plain: true
				})
			)
			/*let transporter = nodemailer.createTransport({
			    service: 'gmail',
			    auth: {
			        user: process.env.GMAIL_USERNAME,
			        pass: process.env.GMAIL_PASSWORD
			    }
			});

			//this validation hash is the same for every user.
			let activate = bcrypt.hash("activate", null, null, function(err, hash){
				return hash
			})

			// setup email data with unicode symbols
			let mailOptions = {
			    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
			    to: newUser.email, // list of receivers
			    subject: 'Activate your account', // Subject line
			    text: 'Please activate your account', // plain text body
			    html: '<b>Please activate your account</b>' // html body
			};

			transporter.sendMail(mailOptions, (error, info) => {
			    if (error) {
			        return console.log(error);
			    }
			    console.log('Message %s sent: %s', info.messageId, info.response);
			});*/
		})
		.then( function(){
			res.send({ success: true })
		})
	})
	.catch(function(e) {
		console.log(e)
	})
})
//test
app.get("/validationhandler", function(req, res) {
	let validationhash = req.params.val
	let userId = req.params.userId

	bcrypt.compare("activate", validationhash, function(err, res) {
	})
	.then( userId => {
		return User.findById(userId)
	})
	.then(user => {
		user.update({
			activated: true
		})
	})
	.then( function() {
		//do something
	})

})

app.post("/checkmailavailability", function(req, res) {
	let email = req.body.email

	User.findAll({where: {email: email}})
	.then( result => {
		//result.length is to check if user with email adress is found
		if(result.length === 0) {
			res.send("not found")
		}
		else {
			console.log("found")
			res.send("found")
		}
	})
})

//Login Handler
app.post('/loginhandler', function(req, res){
	let email = req.body.email
	let password = req.body.password

	User.findOne({where: {email: email}})
	.then(function(userRow){
		bcrypt.compare(password, userRow.password, function(err, res) {
		})
		.then( function() {
			//start session
			req.session.userId = userRow.id
			req.session.loggedIn = true
			req.session.firstName = userRow.firstName
			console.log("User Logged In. SessionUserId: " + req.session.userId )
			res.send({ success: true })
		})
		.catch(function(e){
			console.log(e)
			res.end( { succes: false, error: 'Username or password is incorrect'} )
		})
	})
	.catch(function(e) {
		console.log(e)
		res.send( { succes: false, error: 'Username or password is incorrect' })
	})
})

//Post Message Handler
app.post('/createchallengehandler', upload.array('photos', 2), function(req, res) {
	//let userId = req.session.userId //session
	console.log(req.files)

	console.log("Reached post handler")
/*	if(req.session.loggedIn === undefined){
		res.redirect("login")
	}*/

	//let charityId = req.body.charityId // niet mvp 2017-04-04 13:23:44
	//let tags = req.body.tags //is an array
	let mediaAr =  req.files

	let userId =  req.body.userId
	let dueDate =  req.body.dueDate //Datime, format: 'YYYY-MM-DD HH:MM:SS'
	let body = req.body.body
	let title = req.body.title
	let minStake = req.body.minStake

	console.log("Body:" + body)
	console.log(minStake)

	User.findById(userId)
	.then( user => {
		return user.createPost({
			dueDate: dueDate,
			body: body,
			title: title,
			minStake: minStake
		})
	})
	.then( post => {
		for(let i = 0; i < mediaAr.length; i++) {
			Media.create({
				postId: post.id,
				pictureUrl: mediaAr[i].path,
				mimetype: mediaAr[i].mimetype
			})
			.then( media => {
				post.mediaId = Media.id
			})
		}
	})
	.then(() => {
		res.send({success: true})
	})
	.catch( e => {
		console.log('An error has occured.' + e)
		res.send({ success: false, error: e })
	})
})

app.get("/setcontribution", function(req, res) {
	let amount = req.query.amount
	let challengeId = req.query.challengeId
	let userId = req.query.userId

	console.log("Amount: " + amount + "Userid: " + userId +"params: " + req.params)
	console.log("Query: " + req.query.amount)

	User.findById(userId)
	.then(user => {
		user.createContribution( {
			stake: amount
		})
		.then( contribution => {
			Post.findById(challengeId)
			.then(challenge => {
				challenge.setContributions([contribution])
			})
			.then( () => {
				res.send({success: true})
			})
		})
	})
	.catch( e => {
		console.log(e)
		res.send({success: false, error: e})
	})
})

//View all messages
app.get('/loadposts', function(req, res) {
	Post.findAll({include: [ 
		{model: User, attributes: ["id", "firstName", "lastName"] },
		{model: Comment},
		{model: Media},
		{model: Contribution,
			include: [{model: User, 
			attributes: ["id", "firstName", "lastName"]
		}]
		}				
	]})
	.then(function(posts){
		res.send({success: true, challenges: posts})
	})
})

//Post Comment Handler
app.post('/postcommenthandler', function(req, res) {
	let userId =  req.session.userId
	let body = req.body.body
	let postId = req.body.postId

	sequelize.sync()
	.then( function(){
		return Post.findById(postId)
	})
	.then(post => {
		return post.createComment( {
			body: body
		})
	})
	.then( comment => {
		User.findById(userId)
		.then( user => {
			comment.setUser(user)
		})
	})
	.then(function(createdComment){
		console.log(createdComment)
		res.redirect('back')
	})
	.catch(function(e) {
		console.log(e)
	})
})

//View all messages of User
app.get('/viewmessagesofuser', function(req, res) {
	if(req.session.userId === undefined){
		res.redirect("login")
	}
	let userId = req.session.userId //session variable

	console.log("THIS IS THE FOLLOWED ID: " + req.query.followedId)
	//Same route is used to view posts of followed
	if(req.query.followedId != undefined) {
		userId = req.query.followedId
	}
	let allPosts;

	Post.findAll(
		{
			where: {userId: userId},
			include: [User,
				{
					model: Comment,
					include: [
						User
					]
				}
			]}
	)
	.then(function(posts){
		res.render("showallmessages2", {posts, userId})
	})
})

app.post("/followhandler", function(req, res) {
	let userId = req.session.userId
	let followId = req.body.followId

	User.findById(userId).then( currentUser => {
	    User.findById(followId).then( follows => {
	        currentUser.addFollowed(follows);
	    });
	});
})

app.post("/unfollowhandler", function(req, res) {
	let userId = req.session.userId
	let followedId = req.body.followedId

	User.findById(userId)
	.then( currentUser => {
		User.findById(followedId)
		.then( follows => {
			currentUser.removeFollowed(follows)
		})
	})
	.catch(e => console.log(e))
})

app.get("/viewfollowed", function(req, res) {
	let userId = req.session.userId

	User.findById(userId)
	.then( user => {
		user.getFolloweds()
		.then( followeds => {
			res.render("showfollowed", {followeds, userId})
		})
	})
})

app.get("/viewfollowers", function(req, res) {
	let userId = req.session.userId

	User.findById(userId)
	.then( user => {
		user.getFollowers()
		.then( followers => {
			res.render("showfollowers", {followers, userId})
		})
	})
})

app.post('/livesearch', function(req, res) {
    let typed = req.body.typed

    User.findAll()
    .then( users => {
    	//custom function at bottom of this file
    	return searchUser(users, typed)
    })
    .then( searchResult => {
    	res.send(searchResult)
    })
})

app.post("/livesearchpost", function(req, res) {
	let typed = req.body.typed

	Post.findAll()
	.then( posts => {
		//custom function at bottom of this file
		return searchPost(posts, typed)
	})
	.then( searchResult => {
		console.log("Result: " + searchResult)
		res.send(searchResult)
	})
})

app.post("/searchposthandler", function(req, res) {
	let title = req.body.typed
	let userId = req.session.userId

	Post.findAll({where: {title: title},
		include: [User,
			{
				model: Comment,
				include: [
					User
				]
			}
		]
	})
	.then(posts => {
		res.render("showallmessages2", {posts, userId})
	})
})

app.post("/searchuserhandler", function(req, res) {
	let userName = req.body.typed
	let userId = req.session.userId
	userName = userName.split(" ")

	//when searched for combination of first- and lastname
	if(userName.length === 2) {
	User.findAll({ where: {firstName: userName[0], lastName: userName[1]}})
	.then(followers => {
		res.render("showfollowers", {followers, userId}) //followers as a name is not optimal, but the principle is very similar
	})}
	//when just searched for firstName (just lastName not implemented)
	else if (userName.length === 1) {
		UserName.findAll({ where: {firstName: userName[0], lastName: userName[1]}})
		.then(followers => {
		res.render("showfollowers", {followers, userId}) //name of pug file and variable are not optimal, but the principle is very similar
		})
	}
})

let server = app.listen(3001, function () {
	console.log('Server running on port: ' + server.address().port)
})

//custom functions
function searchUser(users, typed) {
	let fullName = ""
	//returns search result if found else default(undefined)
	for(let i = 0; i <= (users.length - 1); i++) {
		let fullName =  users[i].firstName + users[i].lastName
		let partialName = fullName.slice(0, typed.length)

		if(partialName === typed){
			return (users[i].firstName + " " + users[i].lastName)
		}
	}
}

function searchPost(posts, typed) {
	let title = ""
	//returns search result if found else default(undefined)
	for(let i = 0; i <= (posts.length - 1); i++) {
		let title =  posts[i].title
		let partialName = title.slice(0, typed.length)

		if(partialName === typed){
			return (posts[i].title)
		}
	}
}
