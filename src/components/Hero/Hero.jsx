import { StyledHero, Image } from './Hero.styled'
import hero from '../../images/hero.jpg'

const Hero = () => {
  return (
    <StyledHero
    // style={{
    //   backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${hero})`,
    //   // backgroundImage: `url(${hero})`,
    // }}
    >
      <div />
      <Image src={hero} />
    </StyledHero>
  )
}
export default Hero
