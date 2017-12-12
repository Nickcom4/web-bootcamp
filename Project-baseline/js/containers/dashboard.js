import Card from '../components/card'
//import Marvel from '../components/marvelClass'
import Marvel from '../components/marvel2'

//let MongoClient = require('mongodb').MongoClient
//MongoClient mongoClient = new MongoClient()


export default class Dashboard {
  constructor(){
  }

  getData(searchByName){
    let marvel = new Marvel()
    let result = []
    mongoClient.connect(this.url, (err, db) => {
      if (err) throw err
        let query = { name: '' }
        query.name = searchByName
        db.collection('characters').find(query).toArray((err, result) => {
          if (err) throw err
          console.log(result)
          //callback && callback(result)
         // console.log(JSON.stringify(result, null, 2))
          //callback(JSON.stringify(result, null, 2))
          //db.close()
        })
  //    return JSON.stringify(result, null, 2)
    })
    //return result
  }
  

  getContent(){
    let container = document.createElement('div')
    container.id = 'container'
    
    //create 'flex' container to hold content???
        
    let title = document.createElement('h1')
    title.style.color = '#dddddd'
    title.append("Nick's Project - baseline")
    title.style.textAlign = 'center'
    title.style.textDecoration = 'underline'

    //content.append(title)
    container.appendChild(title)

    let characterName = 'Hulk'
    let marvel = new Marvel()
    let card1 = new Card({
      name       : marvel.getMongoData(characterName).name,
      description: marvel.getData(characterName).description,
      thumbnail  : marvel.getData(characterName).thumbnail
    })
//      description:'description placeholder',
//      description : () => {
//        description.append(this.options.Description)
//        return this.lookupCharacter(name).Description
//        description.append(this.options)

//      let marvel = new Marvel()
//      marvel.getCharacters(name)
//        getData('hulk')
//      },
//      image: 'image placeholder'
//    )
//    let dashboard = new Dashboard()
//    content.append(dashboard.getContent())
    //let marvel = new Marvel()
    //card1.description = marvel.getMongoData('Hulk')
    container.append(card1.getContent())
  
      
    let card2 = new Card({
      name:'name placeholder 2',
      description: 'description2 placeholder',
      image: 'image 2 placeholder'
    })
    container.append(card2.getContent())
      
    let card3 = new Card({
      name:'name placeholder 3',
      description: 'description3 placeholder',
      image: 'image 3 placeholder'
    })
    container.append(card3.getContent())


  return container

  }

  animate(){

  }
}
