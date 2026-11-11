import { StyledButton } from './Button.styled'

const Button = ({ as, href, to, text }) => {
  return (
    <StyledButton as={as} href={href} to={to}>
      {text}
    </StyledButton>
  )
}

export default Button
