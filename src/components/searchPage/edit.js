import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

export function Edit({ setEdit, edit, categoryName }) {
  const [grade, setGrade] = useState([]);

  function Name() {
    if (categoryName === "Seus Filmes") {
      return "Editar o Filme";
    }
    if (categoryName === "Suas Séries") {
      return "Editar a Série";
    }
    if (categoryName === "Seus Animes") {
      return "Editar o Anime";
    }
    if (categoryName === "Seus Desenhos") {
      return "Editar o Desenho";
    }
    if (categoryName === "Seus Livros") {
      return "Editar o Livro";
    }
    if (categoryName === "Seus Jogos") {
      return "Editar o Jogo";
    }
  }

  return (
    <Container edit={edit}>
      <div className="board2">
        <IoIosCloseCircle onClick={() => setEdit(true)} className="close" />
        <h2>{Name()}</h2>
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
          <div className="categories">
            <select>
              <option value="2023">Categoria 1</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
            <select>
              <option value="2023">Categoria 2</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
            <select>
              <option value="2023">categoria 3</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
          <span>De uma Nota</span>
          <div className="grades">
            <Grade
              select={grade.includes(1) === true ? true : false}
              onClick={() => setGrade([1])}
            >
              1
            </Grade>
            <Grade
              select={grade.includes(2) === true ? true : false}
              onClick={() => setGrade([2])}
            >
              2
            </Grade>
            <Grade
              select={grade.includes(3) === true ? true : false}
              onClick={() => setGrade([3])}
            >
              3
            </Grade>
            <Grade
              select={grade.includes(4) === true ? true : false}
              onClick={() => setGrade([4])}
            >
              4
            </Grade>
            <Grade
              select={grade.includes(5) === true ? true : false}
              onClick={() => setGrade([5])}
            >
              5
            </Grade>
            <Grade
              select={grade.includes(6) === true ? true : false}
              onClick={() => setGrade([6])}
            >
              6
            </Grade>
            <Grade
              select={grade.includes(7) === true ? true : false}
              onClick={() => setGrade([7])}
            >
              7
            </Grade>
            <Grade
              select={grade.includes(8) === true ? true : false}
              onClick={() => setGrade([8])}
            >
              8
            </Grade>
            <Grade
              select={grade.includes(9) === true ? true : false}
              onClick={() => setGrade([9])}
            >
              9
            </Grade>
            <Grade
              select={grade.includes(10) === true ? true : false}
              onClick={() => setGrade([10])}
            >
              10
            </Grade>
          </div>
          <div className="comment">
            <span>Comentario</span>
            <textarea wrap="hard" className="big-input" type="text" />
            <i></i>
          </div>
          <button>Salvar</button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(10, 23, 55, 0.5);
  padding-top: 6%;
  display: ${(props) => (props.edit === true ? "none" : "flex")};
  justify-content: center;
  .board2 {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-color: white;
    height: 75%;
    width: 40%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 35%;
    margin-right: 35%;
    position: relative;
    animation-duration: 1s;
    animation-name: fadeInDown;
    @media (max-width: 614px) {
      margin-left: 5%;
      margin-right: 5%;
      height: fit-content;
      width: 90%;
      margin-top: 10%;
      margin-bottom: 12%;
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
    h2 {
      color: darkblue;
      font-size: 30px;
      margin-bottom: 10%;
      @media (max-width: 614px) {
        font-size: 6vw;
        margin-bottom: 5vh;
      }
    }
    form {
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .categories {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 1vh;
        select {
          width: 10vw;
          height: 4vh;
          font-size: 20px;
          padding-left: 2%;
          padding-right: 2%;
          border-radius: 10px;
          color: darkblue;
          margin-left: 4%;
          margin-right: 4%;
          @media (max-width: 614px) {
            width: 25vw;
            margin-left: 1.5%;
            margin-right: 1.5%;
            font-size: 3.1vw;
          }
        }
      }

      span {
        font-size: 1em;
        letter-spacing: 0.05em;
        padding: 20px 10px 20px;
      }
      .grades {
        box-sizing: border-box;
        width: 18.5vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 5%;
        @media (max-width: 614px) {
          width: 90%;
        }
        div:nth-child(1) {
          border-top-left-radius: 10px;
        }
        div:nth-child(5) {
          border-top-right-radius: 10px;
        }
      }
      div:nth-child(6) {
        border-bottom-left-radius: 10px;
      }
      div:nth-child(10) {
        border-bottom-right-radius: 10px;
      }
      .comment {
        width: 100%;
      }
      textarea {
        background: transparent;
        height: 9vh;
        width: 95%;
        max-width: 95%;
        max-height: 9vh;
        border: solid 1px #878787;
        border-radius: 10px;
        font-size: 0.8vw;
        line-height: 20px;
        font-weight: 300;
        padding: 7px 15px;
        margin-top: 5px;
        margin-bottom: 20px;
        transition: all 0.3s ease-in-out;
        margin-bottom: 30px;
        @media (max-width: 614px) {
          margin-bottom: 5%;
          margin-top: 2%;
          width: 90%;
          max-width: 90%;
          min-width: 90%;
          min-height: 9vh;
          font-size: 3.2vw;
      }
        ::-webkit-scrollbar {
          border-radius: 50px;
          width: 10px;
          background: transparent;
          border-top-right-radius: 50px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: darkblue;
          border-radius: 50px;
        }
        ::-webkit-scrollbar-track-piece {
          height: 80%;
        }
      }
      input {
        height: 6%;
        width: 95%;
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
          margin-bottom: 5%;
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
    .inputBox {
      position: relative;
      width: 100%;
      margin-bottom: 3.5vh;
      span {
        font-size: 1em;
        letter-spacing: 0.05em;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 20px 10px 20px;
        pointer-events: none;
        transition: 0.5s;
        @media (max-width: 614px) {
          font-size: 3.3vw;
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
      transform: translateY(-28px);
      font-size: 0.75em;
      @media (max-width: 614px) {
        font-size: 2.5vw;
      }
    }
  }
`;

const Grade = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 5px;
  width: 3.5vw;
  height: 2.8vw;
  font-size: 0.9vw;
  border: solid 1px
    ${(props) => (props.select === true ? "darkred" : "darkblue")};
  background-color: ${(props) => (props.select === true ? "red" : "blue")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  @media (max-width: 614px) {
    width: 12vw;
    height: 10vw;
    font-size: 3vw;
  }
  :hover {
    font-size: 1.2vw;
    font-weight: bold;
    @media (max-width: 614px) {
      font-size: 3vw;
    }
  }
`;
