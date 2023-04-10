import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import userPicture from "../imgs/userPicture.png";
import { putUser } from "../services";

export function AboutMe() {
  const navigate = useNavigate();
  let userData = JSON.parse(localStorage.getItem("userData"));
  const [email, setEmail] = useState(userData.email);
  const [pictureUrl, setPictureUrl] = useState(userData.pictureUrl);
  const [username, setUsername] = useState(userData.username);

  function updateUser(e){
    e.preventDefault();
    if(email !== "" && username !== ""){
      putUser(userData.token, {email, pictureUrl: pictureUrl, username}).then((res) => {
        console.log(res);
        localStorage.setItem("userData", JSON.stringify({...userData, email, pictureUrl, username}));
      })
    }
  }

  return (
    <Container>
      <Header />
      <div className="board">
        <h2>Sobre Mim</h2>
        <div className="back-image">
          <img src={pictureUrl || userPicture} alt="userPicture" />
        </div>
        <form onSubmit={updateUser}>
          <div className="inputBox">
            <input
              type="text"
              value={pictureUrl}
              onChange={(e) => setPictureUrl(e.target.value)}
            />
            <span>Inserir/Alterar URL da Imagem de Perfil</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>E-mail</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              maxLength={20}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Nome</span>
            <i></i>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100%;
  .board {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-color: white;
    height: fit-content;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 35%;
    margin-right: 35%;
    animation-duration: 1s;
    animation-name: fadeInDown;
    margin-bottom: 5%;
    @media (max-width: 614px) {
      width: 90%;
      height: fit-content;
      margin-right: 5%;
      margin-left: 5%;
      margin-top: 12%;
    }
    @keyframes fadeInDown {
      0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
    h2 {
      color: darkblue;
      font-size: 30px;
      @media (max-width: 614px) {
        font-size: 6vw;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70%;
      @media (max-width: 614px) {
        width: 80%;
      }
      input {
        box-sizing: border-box;
        height: 6%;
        width: 98%;
        border: none;
        outline: none;
        padding: 10px 10px 10px;
        font-size: 20px;
      }
      button {
        width: 160px;
        height: 42px;
        border-radius: 20px;
        border: thin;
        background-color: darkblue;
        color: white;
        font-size: 18px;
        cursor: pointer;
        transition: linear 0.1s;
        margin-bottom: 10%;
        @media (max-width: 614px) {
          width: 50%;
          height: 12vw;
          font-size: 4.5vw;
        }
        :hover {
          width: 170px;
          height: 45px;
          font-weight: bold;
          font-size: 20px;
          @media (max-width: 614px) {
            width: 51%;
            height: 12.5vw;
            font-size: 4.7vw;
          }
        }
      }
    }
    img {
      height: 14vw;
      @media (max-width: 614px) {
        height: 38vw;
      }
    }
    .back-image {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      height: 9vw;
      width: 9vw;
      border-radius: 120px;
      margin-bottom: 15%;
      overflow: hidden;
      @media (max-width: 614px) {
        margin-top: 0%;
        width: 25vw;
        height: 25vw;
        margin-bottom: 10%;
      }
    }
    .inputBox {
      position: relative;
      width: 100%;
      margin-bottom: 2.5vw;
      @media (max-width: 614px) {
        margin-bottom: 8.5vw;
      }
      span {
        font-size: 1em;
        letter-spacing: 0.05em;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 10px 10px 20px;
        pointer-events: none;
        transition: 0.5s;
        @media (max-width: 614px) {
          font-size: 3.4vw;
        }
      }
      i {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: darkblue;
        border-radius: 4px;
      }
    }
    .inputBox input:valid ~ span,
    .inputBox input:focus ~ span {
      color: darkblue;
      transform: translateY(-34px);
      font-size: 0.75em;
    }
  }
`;
