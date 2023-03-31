import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import userPicture from "../imgs/userPicture.png";

export function AboutMe() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <div className="board">
        <h2>Sobre Mim</h2>
        <div className="back-image">
          <img src={userPicture} alt="userPicture" />
        </div>
        <form>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Inserir/Alterar URL da Imagem de Perfil</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>E-mail</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Nome</span>
            <i></i>
          </div>
          <button>Salvar</button>
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
    height: 75%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 35%;
    margin-right: 35%;
    h2 {
      color: darkblue;
      font-size: 30px;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        height: 6%;
        width: 22vw;
        border: none;
        outline: none;
        padding: 20px 10px 0px;
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
        :hover {
          width: 170px;
          height: 45px;
          font-weight: bold;
          font-size: 20px;
        }
      }
    }
    img {
      height:12vw;
    }
    .back-image {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      height: 9vw;
      width: 9vw;
      border-radius: 120px;
      margin-bottom: 15%;
    }
    .inputBox {
      position: relative;
      width: 100%;
      margin-bottom: 2vw;
      span {
        font-size: 1em;
        letter-spacing: 0.05em;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 20px 10px 20px;
        pointer-events: none;
        transition: 0.5s;
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
