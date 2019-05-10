const mongoose = require('mongoose')
const User = require('./models/User')
const Product = require('./models/product')
const Box = require('./models/box')
const { dbUri } = require('./config/environments')

mongoose.connect(dbUri, (err, db) => {
  db.dropDatabase()
    .then(() => {
    // add some new data
      return User.create({
        username: 'nerdadmin',
        firstName: 'nerd',
        lastName: 'admin',
        address: '1 Nerd Street, London',
        email: 'nerd.admin@nerd.co',
        password: 'pass',
        passwordConfirmation: 'pass'
      })
    })
    .then(user => {
      return Product.create([{
        brandName: 'Star Wars',
        category: 'Film',
        productType: 'T-shirt',
        image: 'https://target.scene7.com/is/image/Target/GUEST_104fe73a-8ee4-45ed-9834-fd903e188b76?wid=488&hei=488&fmt=pjpeg',
        rarity: 'Common',
        createdBy: user
      }, {
        brandName: 'Star Wars',
        category: 'Film',
        productType: 'Figurine',
        image: 'https://images-na.ssl-images-amazon.com/images/I/815o84KL09L._SX466_.jpg',
        rarity: 'Rare',
        createdBy: user
      }, {
        brandName: 'Star Wars',
        category: 'Film',
        productType: 'Comic',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Star_Wars_001_1977.jpeg/220px-Star_Wars_001_1977.jpeg',
        rarity: 'Legendary',
        createdBy: user
      },{
        brandName: 'Star Wars',
        category: 'Film',
        productType: 'Toy',
        image: 'https://target.scene7.com/is/image/Target/GUEST_363239ec-4fba-4aba-9bb1-c871a38a6906?wid=488&hei=488&fmt=pjpeg',
        rarity: 'Common',
        createdBy: user
      }, {
        brandName: 'Star Wars',
        category: 'Film',
        productType: 'Poster',
        image: 'https://i.ebayimg.com/images/i/183211449618-0-1/s-l1000.jpg',
        rarity: 'Common',
        createdBy: user
      }, {
        brandName: 'Star Wars',
        category: 'Film',
        productType: 'Costume',
        image: 'https://images.halloweencostumes.com/products/10009/1-1/chewbacca-costume-authentic-replica.jpg',
        rarity: 'Rare',
        createdBy: user
      },{
        brandName: 'Star Wars',
        category: 'Film',
        productType: 'Book',
        image: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/2945893/238782236_X02aQyfn6p/P8.jpg',
        rarity: 'Legendary',
        createdBy: user
      },{
        brandName: 'Star Wars',
        category: 'Film',
        productType: 'Cinema Ticket',
        image: 'https://marciokenobi.files.wordpress.com/2014/05/star-wars-6.jpg',
        rarity: 'Legendary',
        createdBy: user
      },{
        brandName: 'Star Wars',
        category: 'Film',
        productType: 'Keyring',
        image: 'https://images-na.ssl-images-amazon.com/images/I/513XXUBn3RL._SY355_.jpg',
        rarity: 'Common',
        createdBy: user
      }])
        .then(product => {

          return Box.create([{
            name: 'Premade',
            image: 'https://pbs.twimg.com/profile_images/676197614040145920/Hr44AVk6.jpg',
            numberOfLegendary: 0,
            numberOfRare: 1,
            numberOfCommon: 2,
            total: 3,
            contents: [product[0], product[1], product[2]]
          }, {
            name: 'Premade',
            image: 'https://pbs.twimg.com/profile_images/676197614040145920/Hr44AVk6.jpg',
            numberOfLegendary: 1,
            numberOfRare: 2,
            numberOfCommon: 3,
            total: 6,
            contents: [product[0], product[1], product[2], product[3], product[4], product[5]]
          },{
            name: 'Premade',
            image: 'https://pbs.twimg.com/profile_images/676197614040145920/Hr44AVk6.jpg',
            numberOfLegendary: 2,
            numberOfRare: 3,
            numberOfCommon: 4,
            total: 9,
            contents: [product[0], product[1], product[2], product[3], product[4], product[5], product[6], product[7], product[8]]
          }])
        })
    })
    .then(() => mongoose.connection.close()) // disconnect from the database
    .catch(err => {
      console.log(err) // log any errors
      mongoose.connection.close() // disconnect from the database
    })
})
