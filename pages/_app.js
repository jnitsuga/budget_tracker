import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css' //import bootstrap
import AppNavbar from '../components/NavBar'
import { Container } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppNavbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
