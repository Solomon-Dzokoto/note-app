import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-2">
      <Container>
        <Row>
            <Col className="text-center">
            <Nav >
              <Nav.Link href="https://facebook.com" target="_blank" className="text-white">
                <FaFacebook size={24} />
              </Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank" className="text-white">
                <FaTwitter size={24} />
              </Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank" className="text-white">
                <FaInstagram size={24} />
              </Nav.Link>
            </Nav>
            </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} <small>maah-mood</small>. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
