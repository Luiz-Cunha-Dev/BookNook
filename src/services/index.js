import axios from "axios";
// const BASE_URL = 
const BASE_URL = "https://book-nook.onrender.com/";

// Auth

function login(body) {
  return axios.post(`${BASE_URL}signin`, body);
}

function logout(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  return axios.delete(`${BASE_URL}logout`, config);
}

function signUp(body) {
  return axios.post(`${BASE_URL}signup`, body);
}

//
// Entertainments

function getEntertainmentQuantity(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  return axios.get(`${BASE_URL}entertainment/quantity`, config);
}

function getEntertainmentByType(token, typeName) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  return axios.get(`${BASE_URL}entertainment/type/${typeName}`, config);
}

function getEntertainmentById(token, entertainmentId) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  return axios.get(`${BASE_URL}entertainment/id/${entertainmentId}`, config);
}

function getAllntertainment(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  return axios.get(`${BASE_URL}entertainment/all`, config);
}

function getAllCategories(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  return axios.get(`${BASE_URL}entertainment/categories`, config);
}

function createNewEntertainment(token, body) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if(body.category1Id === 0){
        delete body.category1Id;
      }
      if(body.category2Id === 0){
        delete body.category2Id;
      }
      if(body.category3Id === 0){
        delete body.category3Id;
      }
      if(body.comment === ""){
        delete body.comment;
      }

  return axios.post(`${BASE_URL}entertainment/create`, body, config);
}

function addExistingEntertainment(token, entertainmentId) {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

return axios.post(`${BASE_URL}entertainment/add/${entertainmentId}`, {}, config);
}

function updateEntertainment(token, body, entertainmentUsersId) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if(body.category1Id === 0){
        delete body.category1Id;
      }
      if(body.category2Id === 0){
        delete body.category2Id;
      }
      if(body.category3Id === 0){
        delete body.category3Id;
      }
      if(body.comment === "" || body.comment === null || body.comment === 0){
        delete body.comment;
      }

  return axios.put(`${BASE_URL}entertainment/update/${entertainmentUsersId}`, body, config);
}

function deleteEntertainment(token, entertainmentUsersId) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  return axios.delete(`${BASE_URL}entertainment/delete/${entertainmentUsersId}`, config);
}

//
// Goals

function getAllGoals(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  return axios.get(`${BASE_URL}goals/all`, config);
}

function createGoal(token, body) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  return axios.post(`${BASE_URL}goals/create`, body, config);
}


//
// Ranking

function getRanking(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  return axios.get(`${BASE_URL}ranking/general`, config);
}

//
// User

function putUser(token, body) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  return axios.put(`${BASE_URL}user/informations`, body, config);
}

function putDarkMode(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };  
  return axios.put(`${BASE_URL}user/darkmode`, {}, config);
}

//

export {
  login,
  logout,
  signUp,
  getEntertainmentQuantity,
  getEntertainmentByType,
  getEntertainmentById,
  getAllntertainment,
  getAllCategories,
  createNewEntertainment,
  updateEntertainment,
  deleteEntertainment,
  getAllGoals,
  createGoal,
  getRanking,
  putUser,
  putDarkMode,
  addExistingEntertainment
};