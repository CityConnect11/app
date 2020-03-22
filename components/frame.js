import Head from '../components/head'
import Header from '../components/header/header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default ({ children }) => (
  <div>
    <Head title="City Connect" />
    <Header />
    {children}
  </div>
);