import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import logo from '../../Assets/logo.png'
import './NavBar.css'

function NavBar() {

  return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"> <img src={logo} alt="" /></Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Programs</Nav.Link>
             <Nav.Link href="#pricing">Achievments</Nav.Link>
              <Nav.Link href="#pricing">Galary</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>

          </Nav>
             <Button variant="outline-warning">Apply Now</Button>
        </Container>
      </Navbar>

  )   
}

export default NavBar
