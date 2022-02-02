import React, { useEffect, useState } from "react";

import "./fullStackStyles.css";
import { getAllWebs } from "../../api/index";
import { Row } from "react-bootstrap";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import GridItem from "../../components/GridItem";

function FullStack() {
  const [websData, setWebData] = useState<any[]>([]);
  const [loadingMovies, setLoadingMovies] = useState(true);
  useEffect(() => {
    getAllWebs().then((res) => {
      setWebData(res.data.data);
      setLoadingMovies(false);
    });
  }, []);

  return (
    <>
      {loadingMovies ? (
        <h1 style={{ color: "white" }}>loading...</h1>
      ) : (
        <div className="fullStackContainer">
          <Row>
            {websData.map((web) => {
              return (
                <GridItem data={web} />
                // <Col xs={10} md={6} lg={3}>
                //   <Card className="bg-dark text-white">
                //     <Card.Title>
                //       <h1>{web.title}</h1>
                //       <Card.ImgOverlay>
                //         <button className="likebutton">
                //           <FavoriteIcon style={{ color: "red" }} />
                //         </button>
                //       </Card.ImgOverlay>
                //     </Card.Title>
                //     <Card.Img variant="top" src={web.imageUrl} />
                //     <Card.Body>
                //       <Card.Text>{web.description}</Card.Text>
                //       <a href={web.url}>
                //         <Button variant="primary">
                //           visit {web.projectNames}
                //         </Button>
                //       </a>
                //     </Card.Body>
                //   </Card>
                // </Col>
              );
            })}
          </Row>
        </div>
      )}
      <div style={{ color: "white" }}>
        You can login with this credentials in all applications:{" "}
      </div>
      <div style={{ color: "white" }}>visitor@gmail.com</div>
      <div style={{ color: "white" }}>visitorUser</div>
    </>
  );
}
export default FullStack;
