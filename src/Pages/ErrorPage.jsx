import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#red").onclick = function () {
      document.querySelector("#green").style.color = "blue";
    };
  });

  return (
    <Container className=" text-center mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="display-1 text-danger ">404</h1>
          <h2 className="mb-4">Oops! Page Not Found</h2>
          <p className="lead">
            The page you are looking for does not exist is not unavailable.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              Go to Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
