
// CLOUDINARY
//http://cloudinary.com/documentation/node_integration#getting_started_guide
var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'dcckvxku0',
  api_key: '272875386248878',
  api_secret: 'vGNX2E6T64IC2Kj6bh9fPLL2Zms'
})

cloudinary.uploader.upload(
  req.files.myImage.path,
  function(result) { console.log(result); },
  {
    public_id: 'sample_id',
    crop: 'limit',
    width: 2000,
    height: 2000,
    eager: [
      { width: 200, height: 200, crop: 'thumb', gravity: 'face',
        radius: 20, effect: 'sepia' },
      { width: 100, height: 150, crop: 'fit', format: 'png' }
    ],
    tags: ['special', 'for_homepage']
  }
)

cloudinary.image("sample.jpg", { width: 100, height: 150, crop: "fill" })


// FACEBOOK
// https://github.com/jaredhanson/passport-facebook
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


  // JWT

  // npm install jsonwebtoken
