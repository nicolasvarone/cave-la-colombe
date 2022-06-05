import { StyledTopImage, Image } from '../TopImage/TopImage.styled'

const TopImage = ({ src, alt }) => {
  return (
    <StyledTopImage>
      <Image src={src} alt={alt} />
    </StyledTopImage>
  )
}

export default TopImage
