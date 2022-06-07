import { StyledContact, FlexContact, Left, Right } from './Contact.styled'

const Contact = () => {
  return (
    <StyledContact>
      <FlexContact>
        <Left>
          <h3>Cave la Colombe</h3>
          <p>
            Grégoire Dessimoz
            <br />
            Mobile: 079 679 20 05 (Greg)
            <br />
            Bureau: 027 346 13 38
          </p>
          <p>
            greg.dz@protonmail.com
            <br />
            info@cave-la-colombe.ch
          </p>
          <p>
            <span>Adresse postale:</span>
            <br />
            Cretalla 17
            <br />
            1976 Erde/Conthey
            <br />
            Valais
          </p>
          <p>
            <span>Adresse de la cave:</span>
            <br />
            (merci d'appeler avant)
            <br />
            Avenue de la Gare 37
            <br />
            1964 Conthey
          </p>
        </Left>
        <Right>
          <form name='contact' method='post'>
            <input type='hidden' name='form-name' value='contact' />

            <label>Nom</label>
            <input type='text' name='name' />
            <label>E-mail</label>
            <input type='email' name='email' />
            <label>Message</label>
            <textarea name='message'></textarea>
            <button type='submit'>Envoyer</button>
          </form>
        </Right>
      </FlexContact>
    </StyledContact>
  )
}
export default Contact
