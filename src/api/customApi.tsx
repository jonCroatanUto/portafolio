import axios from "axios";
const { REACT_APP_SERVER_DIRECTION } = process.env;

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
