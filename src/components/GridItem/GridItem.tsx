import { Col, Card, Button } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
interface DataTypes {
  title: string;
  url: string;
  imageUrl: string;
  description: string;
  votes: number;
  comments: string[];
}
function GridItem(props: { data: DataTypes }) {
  const { data } = props;
  const { title, url, imageUrl, description, votes, comments } = data;
  return (
    <Col xs={10} md={6} lg={4}>
      <Card className="bg-dark text-white">
        <Card.Title>
          <h1>{title}</h1>
          <Card.ImgOverlay>
            <button className="likebutton">
              <FavoriteIcon style={{ color: "red" }} />
            </button>
          </Card.ImgOverlay>
        </Card.Title>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      <a href={url}>
        <Button variant="primary">go to {title}</Button>
      </a>
    </Col>
  );
}
export default GridItem;
