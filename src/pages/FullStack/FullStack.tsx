import Map from "../../images/map.png";
import PLaceSearcher from "../../images/placeSearcher.png";
import ThunderVibe from "../../images/thundervibe.png";
import "./fullStackStyles.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
function FullStack() {
  return (
    <>
      <div className="fullStackContainer">
        <Row>
          <Col xs={10} md={10} lg={6}>
            <Card className="bg-dark text-white">
              <Card.Title>
                <h1>ThunderVibe</h1>
              </Card.Title>
              <Card.Img variant="top" src={ThunderVibe} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} md={10} lg={6}>
            <Card className="bg-dark text-white">
              <Card.Title>
                <h1>PlaceSearcher</h1>
              </Card.Title>
              <Card.Img variant="top" src={PLaceSearcher} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={10} md={10} lg={6}>
            <Card className="bg-dark text-white">
              <Card.Title>
                <h1>Map</h1>
              </Card.Title>
              <Card.Img variant="top" src={Map} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      {/* <div style={{ color: "white" }}>visitor@gmail.com</div>
      <div style={{ color: "white" }}>visitorUser</div> */}
    </>
  );
}
export default FullStack;
