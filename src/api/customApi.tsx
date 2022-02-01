import axios from "axios";
const { REACT_APP_SERVER_DIRECTION } = process.env;
//skills collection endpoints
export async function getAllSkills() {
  return axios({
    method: "GET",
    url: `${REACT_APP_SERVER_DIRECTION}skills`,
  });
}
export async function getSelectedSkill(id: String) {
  return axios({
    method: "GET",
    url: `${REACT_APP_SERVER_DIRECTION}skills/selectedSkill/${id}`,
  });
}
//web collection endpoints
export async function getAllWebs() {
  return axios({
    method: "GET",
    url: `${REACT_APP_SERVER_DIRECTION}webs`,
  });
}
export async function getSelectedWeb(id: String) {
  return axios({
    method: "GET",
    url: `${REACT_APP_SERVER_DIRECTION}skills/selectedSkill/${id}`,
  });
}
