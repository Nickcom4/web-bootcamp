import Card from '../components/card'
//import Marvel from '../components/marvelClass'
export default class Dashboard {
  constructor(){
  }

  getData(){

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

    let card1 = new Card({
      name       :'Hulk',
      description:'description here',
 //     description: () => {
//        description.append(this.options.Description)
//        return this.lookupCharacter(name).Description
//        description.append(this.options)
  //    },
      image: 'image placeholder'
    })
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
