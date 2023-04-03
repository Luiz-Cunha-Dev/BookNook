import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

export function Edit({setEdit, edit, categoryName}) {
  const navigate = useNavigate();

  function Name(categoryName){
    if(categoryName === "Seus Filmes"){
      return "Editar um Filme"
    }
  }

  return (
    <Container edit={edit}>
      <div className="board">
      <IoIosCloseCircle onClick={() => setEdit(true)} className="close" />
        <h2>{Name(categoryName)}</h2>
        <form>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Inserir URL da Imagem</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Nome</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Categoria 1</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Categoria 2</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Categoria 3</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="number" required="required" />
            <span>Avaliação de 0 a 10</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Comentario</span>
            <i></i>
          </div>
          <button>Salvar</button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(10, 23, 55, 0.5);
  padding-top: 6%;
  display: ${(props) => (props.edit === true ? "none" : "flex")};
  justify-content: center;
  .board {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-color: white;
    height: 75%;
    width: 50%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 35%;
    margin-right: 35%;
    position: relative;
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
  .close {
      position: absolute;
      right: 15px;
      top: 15px;
      font-size: 50px;
      color: red;
      cursor: pointer;
    }
    h2 {
      color: darkblue;
      font-size: 30px;
      margin-bottom: 35px;
    }
    form {
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      input {
        height: 6%;
        width: 70%;
        border: none;
        outline: none;
        padding: 10px 10px 10px ;
        font-size: 20px;
      }
      button {
        position: initial;
        width: 160px;
        height: 42px;
        border-radius: 20px;
        border: thin;
        background-color: darkblue;
        color: white;
        font-size: 18px;
        margin-top: -10px;
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
