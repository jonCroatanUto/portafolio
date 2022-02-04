import React, { useEffect, useState } from "react";

import "./fullStackStyles.css";
import { getAllProjects } from "../../api/index";
import { Row } from "react-bootstrap";
import GridItem from "../../components/GridItem";

function FullStack() {
  const [websData, setWebData] = useState<any[]>([]);
  const [loadingWebs, setLoadingWebs] = useState(true);
  useEffect(() => {
    getAllProjects("webs").then((res) => {
      setWebData(res.data.data);
      setLoadingWebs(false);
    });
  }, []);

  return (
    <>
      {loadingWebs ? (
        <h1 style={{ color: "white" }}>loading...</h1>
      ) : (
        <div className="fullStackContainer">
          <Row>
            {websData.map((web, index) => {
              return <GridItem key={index} data={web} />;
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
