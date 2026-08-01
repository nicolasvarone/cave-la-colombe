import domain1 from '../images/domain1.jpg'
import wines1 from '../images/wines1.jpg'
import visit1 from '../images/visit1.jpg'

const categories = [
  {
    id: 1,
    url: '/domaine',
    number: '01',
    text: 'Domaine',
    image: domain1,
  },
  {
    id: 2,
    url: 'https://shop.cave-la-colombe.ch/category/rouges',
    external: true,
    number: '02',
    text: 'Vins',
    image: wines1,
  },
  {
    id: 3,
    url: '/visite',
    number: '03',
    text: 'Visite',
    image: visit1,
  },
]

export default categories
