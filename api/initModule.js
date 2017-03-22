let Sequelize = require('sequelize')
//connect to DB
var sequelize = new Sequelize('blog', 'piepongwong', 'Wongpong', {
  host: 'localhost',
  dialect: 'postgres'
})

sequelize
.authenticate()
.then(function(err) {
  console.log('Connection has been established successfully.');
  sequelize.sync({force: true})
  .catch( (error) => { console.log(error                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   )})
})
.catch(function (err) {
  console.log('Unable to connect to the database:', err);
})

//define Users
  const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    activated: {
      type: Sequelize.BOOLEAN
    }
  })

//define Posts
const Post = sequelize.define('post', {
    dueDate: {
      type: Sequelize.DATE
    },
    minStake: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    body: {
      type: Sequelize.STRING
    }
})

//define media
const Media = sequelize.define('media', {
  videoUrl: {
    type: Sequelize.STRING
  },
  pictureUrl: {
    type: Sequelize.STRING
  },
  mimetype: {
    type: Sequelize.STRING
  }
})


const Contribution = sequelize.define("contribution", {
  stake: {
    type: Sequelize.INTEGER
  }
})

//define Comments
const Comment = sequelize.define('comment', {
    body: {
      type: Sequelize.STRING
    }
})

Post.hasMany(Media)
Media.belongsTo(Post)

Contribution.belongsTo(User)
User.hasMany(Contribution)

Contribution.belongsTo(Post)
Post.hasMany(Contribution)

User.hasMany(Post)
Post.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

Post.hasMany(Comment)
Comment.belongsTo(Post)

User.belongsToMany(User, {as: {singular: "Follower", plural: "Followers"}, foreignKey: "FollowedId", through: "Followers_Followeds"})
User.belongsToMany(User, {as: {singular: "Followed", plural: "Followeds"}, foreignKey: "FollowerId", through: "Followers_Followeds"})

module.exports = {
  //Define Users
  User: User,
  //Define Posts
  Post: Post,
  //Define Comments
  Comment: Comment,
  //define Contribution
  Contribution: Contribution,
  //define media
  Media: Media,
  //for sync operations
  sequelize: sequelize
}

