import React, { useState, useEffect } from "react";
import "./aboutme.css";
import CardDescription from "../../components/CardDescription";
import { getAllSkills } from "../../api";
import MediaQuery from "react-responsive";

function AboutME() {
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [keywordID, setKeyWordID] = useState("");
  useEffect(() => {
    getAllSkills().then((res) => {
      setData(res.data.data);
      setLoading(false);
    });
  }, []);
  // useEffect(() => {
  //   if (data.length > 0) {
  //     console.log(data);
  //     setLoading(false);
  //   }
  // }, [data]);
  // const globalCSSvariables = document.body.style;
  function displayDescription(e: any) {
    setKeyWordID(e.target.id);

    if (!display) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }
  function closeDescription() {
    setDisplay(false);
  }
  return (
    <>
      {loading ? (
        <h1 style={{ color: "white" }}>loading...</h1>
      ) : (
        <>
          <MediaQuery minWidth={900}>
            <div className="keyWordsBox">
              <div className="keyWords1">
                <h1
                  id={data[0]._id}
                  onClick={(e) => displayDescription(e)}
                  className="growth fontVariatonHover"
                >
                  {data[0].skill}
                </h1>
              </div>
              <div className="keyWords2">
                <h1
                  id={data[1]._id}
                  onClick={(e) => displayDescription(e)}
                  className="resarcher fontVariatonHover"
                >
                  {data[1].skill}
                </h1>
                <h1
                  id={data[2]._id}
                  onClick={(e) => displayDescription(e)}
                  className="teamBuilding fontVariatonHover"
                >
                  {data[2].skill}
                </h1>
              </div>
              <div className="keyWords3">
                <h1 id={data[3]._id} className="comunication fontVariatonHover">
                  {data[3].skill}
                </h1>
              </div>
              <div className="keyWords4">
                <h1
                  id={data[4]._id}
                  onClick={(e) => displayDescription(e)}
                  className="creativity fontVariatonHover"
                >
                  {data[4].skill}
                </h1>
                <h1
                  id={data[5]._id}
                  onClick={(e) => displayDescription(e)}
                  className="selfLearning fontVariatonHover"
                >
                  {data[5].skill}
                </h1>
                <h1
                  id={data[6]._id}
                  onClick={(e) => displayDescription(e)}
                  className="activeListening fontVariatonHover"
                >
                  {data[6].skill}
                </h1>
              </div>
              <div className="keyWords5">
                <h1
                  id={data[7]._id}
                  onClick={(e) => displayDescription(e)}
                  className="SCRUM fontVariatonHover"
                >
                  {data[7].skill}
                </h1>
                <h1
                  id={data[8]._id}
                  onClick={(e) => displayDescription(e)}
                  className="github fontVariatonHover"
                >
                  {data[8].skill}
                </h1>
                <h1
                  id={data[9]._id}
                  onClick={(e) => displayDescription(e)}
                  className="githubProjects fontVariatonHover"
                >
                  {data[9].skill}
                </h1>
              </div>
              <div className="keyWords6">
                <h1
                  id={data[10]._id}
                  onClick={(e) => displayDescription(e)}
                  className="NPM fontVariatonHover"
                >
                  {data[10].skill}
                </h1>
                <h1
                  id={data[11]._id}
                  onClick={(e) => displayDescription(e)}
                  className="nodeJs fontVariatonHover"
                >
                  {data[11].skill}
                </h1>
                <h1
                  id={data[12]._id}
                  onClick={(e) => displayDescription(e)}
                  className="reactJs fontVariatonHover"
                >
                  {data[12].skill}
                </h1>
                <h1
                  id={data[13]._id}
                  onClick={(e) => displayDescription(e)}
                  className="bootstrap fontVariatonHover"
                >
                  {data[13].skill}
                </h1>
              </div>
              <div className="keyWords7">
                <h1
                  id={data[14]._id}
                  onClick={(e) => displayDescription(e)}
                  className="redux fontVariatonHover"
                >
                  {data[14].skill}
                </h1>
                <h1
                  id={data[15]._id}
                  onClick={(e) => displayDescription(e)}
                  className="mongoDB fontVariatonHover"
                >
                  {data[15].skill}
                </h1>
                <h1
                  id={data[16]._id}
                  onClick={(e) => displayDescription(e)}
                  className="PHP fontVariatonHover"
                >
                  {data[16].skill}
                </h1>
                <h1
                  id={data[17]._id}
                  onClick={(e) => displayDescription(e)}
                  className="mySQL fontVariatonHover"
                >
                  {data[17].skill}
                </h1>
              </div>
              <div className="keyWords8">
                <h1
                  id={data[18]._id}
                  onClick={(e) => displayDescription(e)}
                  className="expressJs fontVariatonHover"
                >
                  {data[18].skill}
                </h1>
                <h1
                  id={data[19]._id}
                  onClick={(e) => displayDescription(e)}
                  className="netlify fontVariatonHover"
                >
                  {data[19].skill}
                </h1>
              </div>
              <div className="keyWords9">
                <h1
                  id={data[20]._id}
                  onClick={(e) => displayDescription(e)}
                  className="heroku fontVariatonHover"
                >
                  {data[20].skill}
                </h1>
              </div>
            </div>
            {display ? (
              <>
                <div className="closerDiv" onClick={closeDescription}></div>
                <CardDescription mobile={false} keywordID={keywordID} />
              </>
            ) : (
              <div></div>
            )}
          </MediaQuery>
          <MediaQuery maxWidth={900}>
            {data.map((skill) => {
              return (
                <div className="keyWords9">
                  <h1
                    key={skill._id}
                    id={skill._id}
                    onClick={(e) => displayDescription(e)}
                    className="mobileFont fontVariatonHover"
                  >
                    {skill.skill}
                  </h1>
                </div>
              );
            })}
            {display ? (
              <>
                <div className="closerDiv" onClick={closeDescription}></div>
                <CardDescription mobile={true} keywordID={keywordID} />
              </>
            ) : (
              <div></div>
            )}
          </MediaQuery>
        </>
      )}
    </>
  );
}
export default AboutME;
