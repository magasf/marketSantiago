
import { Navbar, Container, NavDropdown, Nav, Button, Form, FormControl } from "react-bootstrap";


export const NavBar = () => {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Full Ventas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                    <Nav.Link href="#action1">Productos</Nav.Link>
                    <Nav.Link href="#action2">Vehiculos</Nav.Link>
                    <NavDropdown title="Inmuebles" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Casas</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">Departamentos</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">Depositos y galpones</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#" disabled>Servicios</Nav.Link>
                      </Nav>
                      <Form className="d-flex">
                      <FormControl
                        type="search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Busqueda</Button>
                      </Form>
            </Navbar.Collapse>
      </Container>
            </Navbar>
            

        </div>
    )
}
