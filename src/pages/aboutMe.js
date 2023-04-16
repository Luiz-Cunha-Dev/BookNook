import styled from "styled-components";
import { useState } from "react";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import userPicture from "../imgs/userPicture.png";
import { putUser } from "../services";
import { ThreeDots } from 'react-loader-spinner';

export function AboutMe() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  const [email, setEmail] = useState(userData.email);
  const [pictureUrl, setPictureUrl] = useState(userData.pictureUrl);
  const [username, setUsername] = useState(userData.username);
  const [button, setButton] = useState("Salvar");
  const [disabled, setDisabled] = useState(false);

  function updateUser(e){
    e.preventDefault();
    setButton(<ThreeDots
      height="80"
      width="80"
      radius="9"
      color="white"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
  />)
    setDisabled(true);
    if(email !== "" && username !== ""){
      putUser(userData.token, {email, pictureUrl: pictureUrl, username}).then((res) => {
        setDisabled(false);
        setButton("Salvar");
        localStorage.setItem("userData", JSON.stringify({...userData, email, pictureUrl, username}));
      })
      .catch(()=>{
        setDisabled(false);
        setButton("Salvar");
      })
    }else{
      setDisabled(false);
      setButton("Salvar");
    }
  }

  return (
    <Container darkMode={userData.darkMode}>
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
          <button disabled={disabled} type="submit">{button}</button>
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
  background-image: ${props=> props.darkMode === false ? "" : "none"};
  background-color: ${props=> props.darkMode === false ? "" : "#191919"};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100%;
  .board {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-color: ${props=> props.darkMode === false ? "white" : "#505050"};
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
    @media (max-width: 935px) {
      width: 60%;
      height: fit-content;
      margin-right: 20%;
      margin-left: 20%;
      margin-top: 5%;
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
      color: ${props=> props.darkMode === false ? "darkblue" : "white"};
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
        background-color: ${props=> props.darkMode === false ? "" : "#505050"};
        color: ${props=> props.darkMode === false ? "" : "white"};
      }
      button {
        width: 160px;
        height: 42px;
        border-radius: 20px;
        border: thin;
        background-color: ${props=> props.darkMode === false ? "darkblue" : "#191919"};
        color: white;
        font-size: 18px;
        cursor: pointer;
        transition: linear 0.1s;
        margin-bottom: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
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
      @media (max-width: 935px) {
        height: 15vw;
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
      @media (max-width: 935px) {
        margin-top: 0%;
        width: 15vw;
        height: 15vw;
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
      @media (max-width: 935px) {
        margin-bottom: 4.5vw;
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
        color: ${props=> props.darkMode === false ? "black" : "white"};
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
        background-color: ${props=> props.darkMode === false ? "darkblue" : "white"};
        border-radius: 4px;
      }
    }
    .inputBox input:valid ~ span,
    .inputBox input:focus ~ span {
      color: ${props=> props.darkMode === false ? "darkblue" : "white"};
      transform: translateY(-34px);
      font-size: 0.75em;
    }
  }
`;
