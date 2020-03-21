import Container from 'react-bootstrap/Container'
import MenuEntry from './button'

export default () => (
  <Container>
    <MenuEntry link='./consumer' label='Nutzer' />
    <MenuEntry link='./provider' label='Anbieter' />
  </Container>
)