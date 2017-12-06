import Card from '../components/card'
export default class Dashboard {
  constructor(){
  }

  getData(){

  }

  getContent(){
    let container = document.createElement('div')
    container.id = 'container'
    
        
    let title = document.createElement('h1')
    title.style.color = '#dddddd'
    title.append('Jarvis Web Container Title')
    title.style.textAlign = 'center'
    title.style.textDecoration = 'underline'

    //content.append(title)
    container.appendChild(title)

    let card1 = new Card({
      Name:'name placeholder',
      Description:'description placeholder',
      Image: 'image placeholder'
    })
    container.append(card1.getContent())
  
  return container

  }

  animate(){

  }
}
