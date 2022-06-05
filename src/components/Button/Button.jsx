import { StyledButton } from './Button.styled'

const Button = ({ as, href, text }) => {
  return (
    <StyledButton as={as} href={href}>
      {text}
    </StyledButton>
  )
}

export default Button
