import Card from '../components/card'
//import Marvel from '../components/marvelClass'
//import Marvel from '../components/marvel'

//let MongoClient = require('mongodb').MongoClient
//MongoClient mongoClient = new MongoClient()


export default class Dashboard {
  constructor(){
  }

  getData(){
    //pull data from MarvelData on local Mongo server
    let promise = new Promise((resolve, reject) => {
      let data = [
        {
          name: 'Nick',
          description: 'Servant of The King Most High',
          thumbnail: 'https://cdn.shopify.com/s/files/1/0387/7073/files/Tree-of-life-spring_large.jpg?18148057159891282181',
          link: 'https://www.google.com',
          linkText: 'Click here for more info'
        }
      ]
      resolve(data)
    })
    return(promise)
  }

  getContent(data){
    let container = document.createElement('div')
    container.id = 'container'
    
    //create 'flex' container to hold content???
        
    let title = document.createElement('h1')
    title.style.color = '#dddddd'
    title.style.textAlign = 'center'
    title.style.textDecoration = 'underline'

    title.append("Nick's Project - baseline")
    
    //content.append(title)
    container.appendChild(title)

    //Open each object in db
    data.forEach((item) => {
      //create new card for each object
      let characterCard = new Card(item)
      //execute getContent in Card class to pull data onto card
      //add new card to container of dashboard
      container.append(characterCard.getContent())
    })

    return container

    }

  animate(){

  }
}
