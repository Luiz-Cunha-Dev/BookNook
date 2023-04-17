import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import background from "../imgs/principal-wallpaper.jpg";
import icone from "../imgs/icone.png";
import app from "../imgs/aplicativo.png";
import { useEffect } from "react";

export function HomePage() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  useEffect(()=> {
    if(userData){
      navigate("/initial");
    }
  }, [])

  return (
    <Container>
      <div className="header">
        <div className="icone">
          <img src={icone} />
          <h1>BookNook</h1>
        </div>
        <div className="buttons">
          <button onClick={() => navigate("/auth/signin")}>Entrar</button>
          <button onClick={() => navigate("/auth/signup")}>Cadastrar-se</button>
        </div>
      </div>
      <div className="principal">
        <div className="text">
          <h2>Bem-vindo ao melhor site de gerenciamento de entretenimento! </h2>
          <p>
            Registre todos os filmes, livros e jogos que você já assistiu ou
            jogou
          </p>
          <p>
            Avalie cada um deles em uma escala de estrelas e escreva um breve
            comentário
          </p>
          <p>
            Veja quais são os entretenimentos mais populares entre os usuários
            do site
          </p>
          <p>
            Defina metas pessoais para ler mais livros, assistir mais filmes ou
            jogar mais jogos
          </p>
        </div>
        <img src={app} />
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
  height: 100vh;
  @media (max-width: 614px) {
      }
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation-duration: 1s;
    animation-name: fadeInLeft;
    @keyframes fadeInLeft {
      0% {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
    h1 {
      font-family: "Chewy";
      color: darkblue;
      font-size: 55px;
      @media (max-width: 614px) {
        font-size: 30px;
      }
    }
    .buttons{
      width: 17vw;
      @media (max-width: 935px) {
      width: 40%;
      }
      @media (max-width: 614px) {
        width: 35%;
        display: flex;
        flex-direction: column;
      }
    }
    button {
      height: 40px;
      background-color: transparent;
      border: solid 2px darkblue;
      color: darkblue;
      font-family: "Courier New", Courier, monospace;
      font-size: 17px;
      font-weight: 600;
      border-radius: 20px;
      padding-left: 15px;
      padding-right: 15px;
      margin-right: 20px;
      transition: 500ms;
      cursor: pointer;
      @media (max-width: 614px) {
        height: 40px;
        font-size: 3vw;
        margin-right: 0px;
        margin-top: 10px;
      }
      :hover {
        background-color: white;
        font-weight: 900;
        font-size: 20px;
      }
    }
    button:last-child {
      height: 45px;
      background-color: darkblue;
      color: white;
    }
    .icone {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 50px;
        margin-right: 20px;
        @media (max-width: 614px) {
        height: 30px;
      }
      }
    }
  }
  .principal {
    position: fixed;
    bottom: 11%;
    left: 5%;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation-duration: 2s;
    animation-name: fadeInRigth;
    @media (max-width: 614px) {
      flex-direction: column;
      left: 0%;
      bottom: 20%;
      }
    @keyframes fadeInRigth {
      0% {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
    img {
      width: 600px;
      height: 100%;
      border-radius: 10px;
      animation: fadetoDown 8s infinite alternate;
      @media (max-width: 935px) {
      width: 50%;
      margin-bottom: -30vw;
      }
      @media (max-width: 614px) {
      width: 90%;
      }
    }
    @keyframes fadetoDown {
      0% {
        transform: translate3d(0, 120%, 0);
      }
      100% {
        transform: translate3d(0, 18%, 0);
      }
    }
  .text {
    padding: 2%;
    padding-top: 1% ;
    width: 43%;
    background-color: white;
    border-radius: 20px;
    margin-top: -10%;
    @media (max-width: 935px) {
      margin-top: -70px;
      }
    @media (max-width: 614px) {
      margin-top: 0;
        width: 90%;
        padding: 5%;
    padding-top: 2% ;
    margin-bottom: -50px;
      }
    h2 {
      width: 100%;
      text-align: center;
      color: darkblue;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-size: 30px;
      font-weight: bold;
      @media (max-width: 614px) {
        font-size: 3vh;
      }
    }
    p {
      color: #4c4c66;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-size: 20px;
      @media (max-width: 614px) {
        font-size: 2vh;
      }
    }
  }
}
`;
