import { Nav, Navbar } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg="white" className="pt-3">
      <Navbar.Brand href="/">
        <h1>Karim Saad</h1>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/work">Work</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MainNavbar;
