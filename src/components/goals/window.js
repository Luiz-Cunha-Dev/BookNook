import styled from "styled-components";
import { useState } from "react";
import { Option } from "../../components/goals/option";
import { IoIosCloseCircle } from "react-icons/io";

export function Window({ close, setClose, month, year }) {
  const [edit, setEdit] = useState(true);

  return (
    <Container close={close}>
      <div className="left">
        <IoIosCloseCircle onClick={() => setClose(true)} className="close" />
        <h2>
          {month} de {year}
        </h2>
        <Option>
          <span className="title">FILMES</span>
          <div className="goal">
            <span>META</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <button className="save">Salvar</button>
        </Option>
        <Option>
          <span className="title">SÈRIES</span>
          <div className="goal">
            <span>META</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <button className="save">Salvar</button>
        </Option>
        <Option>
          <span className="title">ANIMES</span>
          <div className="goal">
            <span>META</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <button className="save">Salvar</button>
        </Option>
        <Option>
          <span className="title">DESENHOS</span>
          <div className="goal">
            <span>META</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <button className="save">Salvar</button>
        </Option>
        <Option>
          <span className="title">LIVROS</span>
          <div className="goal">
            <span>META</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <button className="save">Salvar</button>
        </Option>
        <Option>
          <span className="title">JOGOS</span>
          <div className="goal">
            <span>META</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button>-</button>
            <p>00</p>
            <button>+</button>
          </div>
          <button className="save">Salvar</button>
        </Option>
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
  height: 100vh;
  display: ${(props) => (props.close === true ? "none" : "flex")};
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  padding-top: 8%;
  background-color: rgba(10, 23, 55, 0.5);
  overflow: auto;
  h2 {
    color: darkblue;
    font-size: 30px;
    margin-bottom: 3%;
    margin-top: 2%;
    @media (max-width: 614px) {
      font-size: 6vw;
      margin-bottom: 10%;
    }
  }
  .left {
    width: 50%;
    height: 83%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    margin-top: -2%;
    position: relative;
    animation-duration: 1s;
    animation-name: fadeInDown;
    @media (max-width: 614px) {
      margin-left: 5%;
      margin-right: 5%;
      height: fit-content;
      width: 90%;
      margin-top: 12%;
      margin-bottom: 10%;
      padding-bottom: 5%;
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
    .close {
      z-index: 1;
      position: absolute;
      right: 15px;
      top: 15px;
      font-size: 50px;
      color: red;
      cursor: pointer;
      @media (max-width: 614px) {
        font-size: 10vw;
      }
    }
  }
`;
