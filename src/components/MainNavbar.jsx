import { Nav, Navbar } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" className="mr-auto">
        Karim Saad
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="/work">Work</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MainNavbar;
