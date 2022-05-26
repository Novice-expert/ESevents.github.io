
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import {Container } from 'react-bootstrap';
// import { NavDropdown} from 'react-bootstrap';
//import { COMPONENT } from 'react-bootstrap';


const _navBar =() =>{
    return (
<>
<Navbar bg="light" expand="lg" background-color=" rgb(95,174,31)">
  <Container>
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#link">Home</Nav.Link>
        <Nav.Link href="#link">Team</Nav.Link>
        <Nav.Link href="#link">Events</Nav.Link>
        <Nav.Link href="#link">Speakers</Nav.Link>
        <Nav.Link href="#link">Sponsors</Nav.Link>
        <Nav.Link href="#link">FAQ</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

{/* <style>
.color-nav{
  background-color:green;
}
</style> */}
</>


    );

    }

    export default _navBar;