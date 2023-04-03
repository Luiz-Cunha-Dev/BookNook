import styled from "styled-components";
import { useState } from "react";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";

export function Config() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <Container darkMode={darkMode === true ? "0px" : "35px"}>
      <Header />
      <div className="board">
        <h2>Configurações</h2>
        <div className="items">
        <span>Modo Escuro
          <div className="switch">
            <button onClick={() => setDarkMode(!darkMode)}></button>
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
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100%;
  .board {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-color: white;
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
    }
    .items{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span{
        margin-top: 20px;
        background-color: #EEEEEE;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        width: 19vw;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 50px;
        padding: 30px 60px 30px 60px;
        color: darkblue;
        font-size: 22px;
        .switch{
          transition: linear 0.2s 0.1s;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          background-color: ${props => props.darkMode === "0px" ? "darkblue" : "white"};
          border-radius: 50px;
          width: 70px;
          height: 35px;
          position: relative;
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
          }
        }
      }
    }
  }
`;
