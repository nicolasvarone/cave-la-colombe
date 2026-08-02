import {
  StyledCategories,
  FlexCategories,
  Categorie,
  Card,
  Foreground,
  Background,
} from './Categories.styled'
import categories from '../../data/categories'
import { useAgeGate } from '../../context/AgeGate'

const Categories = () => {
  const openAgeGate = useAgeGate()

  return (
    <StyledCategories>
      <FlexCategories>
        {categories.map((item) => (
          <Categorie
            key={item.id}
            {...(item.external
              ? { as: 'a', href: item.url, onClick: openAgeGate }
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
