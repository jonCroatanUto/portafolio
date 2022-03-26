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
//get all projects depending of the dicipline: webs or video animation
export async function getAllProjects(dicipline: string) {
  return axios({
    method: "GET",
    url: `${REACT_APP_SERVER_DIRECTION}${dicipline}`,
  });
}

//using a external api to send an email to my gmail

export async function sendEmailToJon(email: {
  emailFrom: string;
  subject: string;
  message: string;
}) {
  const { emailFrom, subject, message } = email;
  return axios({
    method: "POST",
    url: `${REACT_APP_SERVER_DIRECTION}user/contactWithJonEmail`,
    data: {
      emailFrom: emailFrom,
      subject: subject,
      message: message,
    },
  });
}
// export async function getSelectedWeb(id: String) {
//   return axios({
//     method: "GET",
//     url: `${REACT_APP_SERVER_DIRECTION}skills/selectedSkill/${id}`,
//   });
// }
//videos collection endpoints
// export async function getAllVideos() {
//   return axios({
//     method: "GET",
//     url: `${REACT_APP_SERVER_DIRECTION}videos`,
//   });
// }
// export async function getSelectedVideo(id: String) {
//   return axios({
//     method: "GET",
//     url: `${REACT_APP_SERVER_DIRECTION}skills/selectedSkill/${id}`,
//   });
// }
