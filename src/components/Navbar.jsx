import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: 65 }}>
        <Container>
          <Navbar.Brand href="/" className="text-danger">
            Navbar
          </Navbar.Brand>
          <Nav className="ms-auto ">
            <Nav.Link>
              <Link to="/" className="text-decoration-none text-danger ">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/counter" className="text-decoration-none text-danger ">
                Counter
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/product" className="text-decoration-none text-danger ">
                Product
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/quotes" className="text-decoration-none text-danger ">
                Quotes
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup" className="text-decoration-none text-danger">
                Signup
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
