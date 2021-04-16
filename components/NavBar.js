import { Nav, Navbar  } from 'react-bootstrap'
import Link from 'next/link'

export default () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
        <Link href="/"><a className="navbar-brand">Budget Tracker</a></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="mr-auto">
            <Nav className="mr-auto">
              <Link href="/"><a className="nav-link">Register</a></Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}