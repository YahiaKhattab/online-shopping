import { Link } from "react-router-dom";
import { Alert, Button, Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Row className="text-center">
        <Col>
          <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>😕</div>
          
          <Alert variant="danger" className="shadow">
            <Alert.Heading as="h1" style={{ fontSize: "3rem" }}>404 - Page Not Found</Alert.Heading>
            <p className="mb-4">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button 
              as={Link} 
              to="/" 
              variant="primary" 
              size="lg"
              className="mt-3"
            >
              ← Return to Homepage
            </Button>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;