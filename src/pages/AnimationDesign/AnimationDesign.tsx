import React, { useEffect, useState } from "react";
import { getAllProjects } from "../../api/index";
import GridItem from "../../components/GridItem";
import { Row } from "react-bootstrap";

function AnimationDesign() {
  const [videoData, setVideoData] = useState<any[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(true);
  useEffect(() => {
    getAllProjects("videos").then((res) => {
      setVideoData(res.data.data);
      setLoadingVideos(false);
    });
  }, []);
  return (
    <>
      {loadingVideos ? (
        <h1 style={{ color: "white" }}>loading...</h1>
      ) : (
        <div className="fullStackContainer">
          <Row>
            {videoData.map((video) => {
              return <GridItem data={video} />;
            })}
          </Row>
        </div>
      )}
    </>
  );
}
export default AnimationDesign;
