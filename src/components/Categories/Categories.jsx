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
          <Categorie
            key={item.id}
            {...(item.external
              ? { as: 'a', href: item.url, target: '_blank', rel: 'noreferrer' }
              : { to: item.url })}
          >
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
