import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <h1 className='fw-bolder  text-primary'>About This App</h1>
      <Row className="mt-4">
        <Col md={6}>
          <Card >
            <Card.Body className='bg-primary text-white'>
              <Card.Title className='fw-bold'>Purpose</Card.Title>
              <Card.Text>
                This app is designed to help users manage their notes efficiently. 
                You can create, edit, delete, and search for notes seamlessly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mt-4'>
          <Card>
            <Card.Body className='bg-primary text-white'>
              <Card.Title>Features</Card.Title>
              <Card.Text>
                - Create new notes<br />
                - Edit existing notes<br />
                - Delete notes<br />
                - Search functionality<br />
                - Responsive design<br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col>
          <Card>
            <Card.Body className='bg-primary text-white'>
              <Card.Title>About the Team</Card.Title>
              <Card.Text>
                This app is developed by a team of passionate developers aiming to make note-taking easy and accessible for everyone.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
