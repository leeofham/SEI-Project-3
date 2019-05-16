const mongoose = require('mongoose')
const User = require('./models/User')
const Product = require('./models/Product')
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
      },{
        brandName: 'Lord Of The Rings',
        category: 'Film',
        productType: 'T-shirt',
        image: 'https://s1.thcdn.com/productimg/1600/1600/11638190-1824536173201541.png',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Lord Of The Rings',
        category: 'Film',
        productType: 'Pillow',
        image: 'https://cdn.shopify.com/s/files/1/2597/4248/products/lotrnwpil02_250x250@2x.jpg?v=1527089994',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Lord Of The Rings',
        category: 'Film',
        productType: 'jewellry',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3qWENfqq0PcJEFVCuwbbXyiZlTkNvipFJYsbM5KaEVgbOXLg',
        rarity: 'Rare',
        createdBy: user
      },{
        brandName: 'Lord Of The Rings',
        category: 'Film',
        productType: 'Poster',
        image: 'https://cdn.basememorabilia.co.uk/wp-content/uploads/2017/10/The-Lord-of-the-Rings-Two-Towers-New-Line-2002.-British-Quad-3022-X-4022.jpg',
        rarity: 'Legendary',
        createdBy: user
      },{
        brandName: 'Lord Of The Rings',
        category: 'Film',
        productType: 'model',
        image: 'https://s1.thcdn.com/productimg/1600/1600/12054228-1104653302436255.jpg',
        rarity: 'Rare',
        createdBy: user
      },{
        brandName: 'Lord Of The Rings',
        category: 'Film',
        productType: 'chess',
        image: 'https://www.worldchesspieces.com/wp-content/uploads/2018/12/Artschess-Lord-of-the-Rings-with-Resin-Pieces.jpg',
        rarity: 'Legendary',
        createdBy: user
      },{
        brandName: 'Lord Of The Rings',
        category: 'Film',
        productType: 'cards',
        image: 'https://thumbs.worthpoint.com/zoom/images2/1/1116/14/lot-lord-rings-towers-fellowship-ring_1_8f184d55ef6d9a098a02fffaf9f50e0a.jpg',
        rarity: 'Rare',
        createdBy: user
      },{
        brandName: 'Lord Of The Rings',
        category: 'Film',
        productType: 'keyring',
        image: 'https://cdn.shopify.com/s/files/1/0552/1401/products/31814_Aragorn_LOTR_KC_GLAM.png?v=1529077445',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Lord Of The Rings',
        category: 'Film',
        productType: 'mugs',
        image: 'https://www.theonering.net/torwp/wp-content/uploads/2014/02/prancing-pony.jpg',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Harry Potter',
        category: 'Film',
        productType: 'Ward',
        image: 'https://shop.wbstudiotour.co.uk/images/dynamic/330x330/6242b981.jpg',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Harry Potter',
        category: 'Film',
        productType: 'Necklace',
        image: 'https://shop.wbstudiotour.co.uk/images/dynamic/330x330/02976f5d.jpg',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Harry Potter',
        category: 'Film',
        productType: 'Scarf',
        image: 'https://shop.wbstudiotour.co.uk/images/dynamic/330x330/48162f25.jpg',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Harry Potter',
        category: 'Film',
        productType: 'Backpack',
        image: 'https://shop.wbstudiotour.co.uk/images/dynamic/330x330/9aed03c3.jpg',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Harry Potter',
        category: 'Film',
        productType: 'Book',
        image: 'https://shop.wbstudiotour.co.uk/images/dynamic/330x330/12d14c37.jpg',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Harry Potter',
        category: 'Film',
        productType: 'Mug',
        image: 'https://shop.wbstudiotour.co.uk/images/dynamic/330x330/c78a3234.jpg',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Harry Potter',
        category: 'Film',
        productType: 'Flag',
        image: 'https://shop.wbstudiotour.co.uk/images/dynamic/330x330/2a8ce8b1.jpg',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Harry Potter',
        category: 'Film',
        productType: 'Umbrella',
        image: 'https://shop.wbstudiotour.co.uk/images/dynamic/330x330/4cbf5a36.jpg',
        rarity: 'Common',
        createdBy: user
      },{
        brandName: 'Harry Potter',
        category: 'Film',
        productType: 'Notebook',
        image: 'https://shop.wbstudiotour.co.uk/images/dynamic/330x330/eb3e269f.jpg',
        rarity: 'Common',
        createdBy: user
      }])
        .then(product => {
          return Box.create([{
            name: 'Premade',
            image: 'https://pbs.twimg.com/profile_images/706705820554113024/nMv9bKOo_400x400.jpg',
            numberOfLegendary: 0,
            numberOfRare: 1,
            numberOfCommon: 2,
            total: 3,
            contents: [product[0], product[1], product[2]],
            createdBy: user,
            category: 'Star Wars',
            description: 'This box promises BE A REBEL Wear officially licensed items inspired by Star Wars the Original Trilogy. SAVE THE GALAXY Channel your inner Rebel with premium items from the Star Wars Universe Villains. THE FORCE IS WITH YOU Bring the Star Wars galaxy to life with authentic apparel  accessories. Order below and Add to your basket!'
          }, {
            name: 'Premade',
            image: 'https://pbs.twimg.com/profile_images/706705820554113024/nMv9bKOo_400x400.jpg',
            numberOfLegendary: 1,
            numberOfRare: 2,
            numberOfCommon: 3,
            total: 6,
            contents: [product[0], product[1], product[2], product[3], product[4], product[5]],
            createdBy: user,
            category: 'Star Wars',
            description: 'This box promises BE A REBEL Wear officially licensed items inspired by Star Wars the Original Trilogy. SAVE THE GALAXY Channel your inner Rebel with premium items from the Star Wars Universe Villains. THE FORCE IS WITH YOU Bring the Star Wars galaxy to life with authentic apparel  accessories. Order below and Add to your basket!'
          },{
            name: 'Premade',
            image: 'https://pbs.twimg.com/profile_images/706705820554113024/nMv9bKOo_400x400.jpg',
            numberOfLegendary: 2,
            numberOfRare: 3,
            numberOfCommon: 4,
            total: 9,
            contents: [product[0], product[1], product[2], product[3], product[4], product[5], product[6], product[7], product[8]],
            createdBy: user,
            category: 'Star Wars',
            description: 'This box promises BE A REBEL Wear officially licensed items inspired by Star Wars the Original Trilogy. SAVE THE GALAXY Channel your inner Rebel with premium items from the Star Wars Universe Villains. THE FORCE IS WITH YOU Bring the Star Wars galaxy to life with authentic apparel accessories. Order below and Add to your basket!'
          },{
            name: 'Premade',
            image: 'https://sta.uwi.edu/fss/dms/sites/default/files/dms/images/lord-of-the-rings_1.jpg',
            numberOfLegendary: 0,
            numberOfRare: 1,
            numberOfCommon: 2,
            total: 3,
            contents: [product[9], product[10], product[11]],
            createdBy: user,
            category: 'Lord of The Rings',
            description: 'This box has the apparel to win the One Ring! Get authentic lord of the rings gear including items from the films and the books. Join the battle against the dark forces of Sauron. Order below and Add to your basket!'
          },{
            name: 'Premade',
            image: 'https://sta.uwi.edu/fss/dms/sites/default/files/dms/images/lord-of-the-rings_1.jpg',
            numberOfLegendary: 1,
            numberOfRare: 2,
            numberOfCommon: 3,
            total: 6,
            contents: [product[12], product[13], product[14], product[15], product[16], product[17]],
            createdBy: user,
            category: 'Lord of The Rings',
            description: 'This box has the apparel to win the One Ring! Get authentic lord of the rings gear including items from the films and the books. Join the battle against the dark forces of Sauron. Order below and Add to your basket!'
          },{
            name: 'Premade',
            image: 'https://sta.uwi.edu/fss/dms/sites/default/files/dms/images/lord-of-the-rings_1.jpg',
            numberOfLegendary: 2,
            numberOfRare: 3,
            numberOfCommon: 4,
            total: 9,
            contents: [product[9], product[10], product[11], product[12], product[13], product[14], product[15], product[16], product[17]],
            createdBy: user,
            category: 'Lord of The Rings',
            description: 'This box has the apparel to win the One Ring! Get authentic lord of the rings gear including items from the films and the books. Join the battle against the dark forces of Sauron. Order below and Add to your basket!'
          },{
            name: 'Premade',
            image: 'https://pbs.twimg.com/profile_images/418416924138024961/ArB9VMfa.png',
            numberOfLegendary: 0,
            numberOfRare: 1,
            numberOfCommon: 2,
            total: 3,
            contents: [product[18], product[19], product[20]],
            createdBy: user,
            category: 'Harry Potter',
            description: 'Exclusive and officially licensed Harry Potter & Fantastic Beasts gear!. Magical items in every crate. Get cool Wizarding gear and join your Hogwarts House! Join the wizarding world with this fantastic crate. Order below and Add to your basket!'
          },{
            name: 'Premade',
            image: 'https://pbs.twimg.com/profile_images/418416924138024961/ArB9VMfa.png',
            numberOfLegendary: 1,
            numberOfRare: 2,
            numberOfCommon: 3,
            total: 6,
            contents: [product[21], product[22], product[23], product[24], product[25], product[26]],
            createdBy: user,
            category: 'Harry Potter',
            description: 'Exclusive and officially licensed Harry Potter & Fantastic Beasts gear!. Magical items in every crate. Get cool Wizarding gear and join your Hogwarts House! Join the wizarding world with this fantastic crate. Order below and Add to your basket!'
          },{
            name: 'Premade',
            image: 'https://pbs.twimg.com/profile_images/418416924138024961/ArB9VMfa.png',
            numberOfLegendary: 2,
            numberOfRare: 3,
            numberOfCommon: 4,
            total: 9,
            contents: [product[18], product[19], product[20], product[21], product[22], product[23], product[24], product[25], product[26]],
            createdBy: user,
            category: 'Harry Potter',
            description: 'Exclusive and officially licensed Harry Potter & Fantastic Beasts gear!. Magical items in every crate. Get cool Wizarding gear and join your Hogwarts House! Join the wizarding world with this fantastic crate. Order below and Add to your basket!'
          }
          ])
        })
    })
    .then(() => mongoose.connection.close()) // disconnect from the database
    .catch(err => {
      console.log(err) // log any errors
      mongoose.connection.close() // disconnect from the database
    })
})
