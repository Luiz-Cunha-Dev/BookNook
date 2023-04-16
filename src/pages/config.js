import styled from "styled-components";
import { useState } from "react";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import { putDarkMode } from "../services";

export function Config() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  const [darkMode, setDarkMode] = useState(userData.darkMode)

   function changeDarkMode(){
    putDarkMode(userData.token).then((res) => {
      setDarkMode(!darkMode);
      localStorage.setItem("userData", JSON.stringify({...userData, darkMode: !darkMode}));
    })
  }


  return (
    <Container darkMode={darkMode === true ? "0px" : "35px"}>
      <Header />
      <div className="board">
        <h2>Configurações</h2>
        <div className="items">
        <span>Modo Escuro
          <div className="switch">
            <button onClick={changeDarkMode}></button>
          </div>
        </span>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-image: url(${background});
  background-image: ${props=> props.darkMode === "35px" ? "" : "none"};
  background-color: ${props=> props.darkMode === "35px" ? "" : "#191919"};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100%;
  .board {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-color: ${props=> props.darkMode === "35px" ? "white" : "#505050"};
    height: 78%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 35%;
    margin-right: 35%;
    padding-bottom: 10px;
    animation-duration: 1s;
    animation-name: fadeInDown;
    margin-bottom: 5%;
    @media (max-width: 614px) {
      width: 90%;
      height: 70%;
      margin-right: 5%;
      margin-left: 5%;
      margin-top: 6%;
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
      color: ${props=> props.darkMode === "35px" ? "darkblue" : "white"};
      font-size: 30px;
      @media (max-width: 614px) {
       font-size: 6vw;
      }
    }
    .items{
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span{
        box-sizing: border-box;
        margin-top: 20px;
        background-color: ${props=> props.darkMode === "35px" ? "#EEEEEE" : "#202020"};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        width: 90%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 50px;
        padding: 30px 60px 30px 60px;
        color: ${props=> props.darkMode === "35px" ? "darkblue" : "white"};
        font-size: 22px;
        @media (max-width: 614px) {
          padding: 30px 30px 30px 30px;
      width: 90%;
      height: 8vw;
      font-size: 4vw;
      }
        .switch{
          transition: linear 0.2s 0.1s;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          background-color: ${props => props.darkMode === "0px" ? "darkblue" : "white"};
          border-radius: 50px;
          width: 70px;
          height: 35px;
          position: relative;
          @media (max-width: 614px) {
              width: 14vw;
              height: 7vw;
              margin-left: 10vw;
            }
          button{
            position: absolute;
            right: ${props => props.darkMode};
            transition: linear 0.2s;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            height: 35px;
            width: 35px;
            border-radius: 100%;
            border: none;
            background-color: white;
            cursor: pointer;
            @media (max-width: 614px) {
              right: ${props => props.darkMode === "35px" ? "7vw" : "0px"};
              width: 7vw;
              height: 7vw;

      }
          }
        }
      }
    }
  }
`;
