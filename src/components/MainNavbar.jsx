import { Image, Nav, Navbar } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg="white" className="mb-4 border-bottom">
      <Navbar.Brand href="/">
        <Image fluid src="k.png" alt="Karim Saad" width="50px" height="50px" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/work">Work</Nav.Link>
        <Nav.Link href="/find">Find Me</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MainNavbar;
