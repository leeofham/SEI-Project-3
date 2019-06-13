# SEI-Project-3

# ReadMe Project 3

## Timeframe - 8 days in a group of 4 developers

## Technologies/ Frameworks used:
* HTML5
* SCSS
* Bulma
* React.js
* Webpack
* Axios
* Promise
* Bulma
* Node.js
* Express
* JWT
* Request-Promise
* MongoDB
* Mongoose
* Models with Reference and Embedded
* Git
* GitHub
* Heroku
* Insominia

## Overview
Nerd Crate, An e-commerce site to buy merchandise

![HOME PAGE](https://user-images.githubusercontent.com/43292507/59439160-a7e34b00-8dec-11e9-9849-9ca75308e8a0.jpg)

You can find a hosted version here ----> https://nerdcrate.herokuapp.com/#/

## Functionality
This application is a website for users to pick various items of merchanise and have it delivered to them in a box.
The idea is for the user to pick if they want to create a box or have a pre-made box.
If the user is interested, they can sign-in with us and access more information including:

* A personalised dashboard where the user can view their crates, change their details and check out.
* View and make as many boxes as they want.

![PREMADE CRATE](https://user-images.githubusercontent.com/43292507/59439410-2a6c0a80-8ded-11e9-96d8-42a3fcbb7cc1.jpg)

## Development process

We started developing ideas for the project by coming up with themes and common interests between us. We narrowed down our ideas to create an e-commerce site for merchandise boxes. From here we designed wireframes and basic layout for the each page. We white-boarded the user journey to ensure a smooth experience.

![initial concept](https://user-images.githubusercontent.com/43292507/59439580-6e5f0f80-8ded-11e9-9b75-c498b4a0469e.jpg)

We planned all our ideas and task on trello, this enabled us to keep track with the workflow and also allowed as to delegate the work between everyone.

![trello](https://user-images.githubusercontent.com/43292507/59440231-82efd780-8dee-11e9-919a-1648f0c62636.png)

We also used version control on Github so that we could handle conflicts effectively whilst everyone worked on their own branches.


## Design

* We designed the website to look like a comic book with bold borders.
* We also used React carousel to display images.

![personal crates](https://user-images.githubusercontent.com/43292507/59439794-cbf35c00-8ded-11e9-87b5-df7d76c2f3bf.jpg)

* We planned all the routes and overall feel of the website from Registering to making a purchase based on the user journey.
* We also implemented Bulma to help with the responsiveness of the site.


## Wins

* Our team worked really well together and we were able to use Git and GitHub as a team effectively
* We used virtual Schemas to populate the boxes with random products, this was something we never touched on in class before.

```javascript
boxSchema.virtual('price')
  .get(function() {
    switch(this.contents.length) {
      case 3: return 10
      case 6: return 15
      default: return 25
    }
  })
boxSchema.virtual('numberOfLegendary')
  .get(function() {
    switch(this.contents.length) {
      case 3: return 0
      case 6: return 1
      default: return 2
    }
  })
boxSchema.virtual('numberOfRare')
  .get(function() {
    switch(this.contents.length) {
      case 3: return 1
      case 6: return 2
      default: return 3
    }
  })
boxSchema.virtual('numberOfCommon')
  .get(function() {
    switch(this.contents.length) {
      case 3: return 2
      case 6: return 3
      default: return 4
    }
  })


boxSchema.pre('save', function productToBox(next){

  this.model('Product').find()
    .then(products => {
      let randomProduct = products[Math.floor(Math.random() * products.length)]
      while(this.contents.length < this.total && !this.contents.includes(randomProduct)) {
        this.contents.push(randomProduct)
        randomProduct = products[Math.floor(Math.random() * products.length)]
      }
      next()

    })

    .catch(next) // handle our errors
})
```
* On our profile page we filtered an array so we could map over it and show the crates in a carousel, this caused a lot more issued that originally intended, however, we figured out how to get the crates showing correctly through correctly mapping over the crates.

```javascript
filterArray(){
  return this.state.mycrates.filter(mycrate => mycrate.createdBy === Auth.getPayload().sub)
}
{this.filterArray().map(mycrate =>
  <div id="carousel" key={mycrate._id}>
    <Link to={`/mycrates/${mycrate._id}`}>
      <Card {...mycrate} />
    </Link>
  </div>
)}
```


## Challenges
* Stripe / PayPal - having spent a large part of our time on setting up a payments system via Stripe we discovered it was too complicated and time-consuming to complete this aspect within our timeframe. In addition, PayPal had some technical issues and we were unable to include this in our project.

* Shopping basket - To create the shopping basket we ended up using local storage to add and clear the basket effectively.

![shopping basket](https://user-images.githubusercontent.com/43292507/59440416-d82be900-8dee-11e9-8032-9cd75ab1e1e4.jpg)


## Future features / Enhancement
* Refactoring - We would really like to go back to refactor the code so it is easy to read.

* Categories - Also we would like to add more categories, our main goal at the start was to have various categorise eg. Music with various artists like Whitney Huston, Beyonce and  Elvis Presley
Message Input

* User wish-list - We also wanted to add a user wish-list so that you could save things that you wanted to purchase for a later time.
