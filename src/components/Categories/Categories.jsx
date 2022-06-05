import {
  StyledCategories,
  FlexCategories,
  Categorie,
  Card,
  Foreground,
  Background,
} from './Categories.styled'
import categories from '../../data/categories'

const Categories = () => {
  return (
    <StyledCategories>
      <FlexCategories>
        {categories.map((item) => (
          <Categorie to={item.url} key={item.id}>
            <Card>
              <Foreground>
                <h2>{item.text}</h2>
                <div />
                <img src={item.image} alt={item.text} />
              </Foreground>
              <Background />
            </Card>
          </Categorie>
        ))}
      </FlexCategories>
    </StyledCategories>
  )
}
export default Categories
