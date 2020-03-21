import Container from 'react-bootstrap/Container'
import MenuEntry from './button'

export default () => (
  <Container>
    <MenuEntry link='/consumer/index' label='Nutzer' />
    <MenuEntry link='/provider/index' label='Anbieter' />
  </Container>
)