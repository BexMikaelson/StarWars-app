import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<Navbar className="header" bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">
                <h1>Star Wars Encyclopedia</h1>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} end to="/people">
							People
						</Nav.Link>
						<Nav.Link as={NavLink} end to="/films">
							Films
						</Nav.Link>
					
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Menu;
