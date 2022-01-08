import axios from "axios";
const { REACT_APP_SERVER_DIRECTION } = process.env;

export async function getAllSkills() {
  return axios({
    method: "GET",
    url: `${REACT_APP_SERVER_DIRECTION}skills`,
  });
}
