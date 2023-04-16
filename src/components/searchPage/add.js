import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { createNewEntertainment, getAllCategories } from "../../services";
import { ThreeDots } from 'react-loader-spinner'

export function Add({ setAdd, add, categoryName }) {
  let userData = JSON.parse(localStorage.getItem("userData"));
  const [grade, setGrade] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [category1Id, setCategory1Id] = useState("");
  const [category2Id, setCategory2Id] = useState("");
  const [category3Id, setCategory3Id] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [comment, setComment] = useState("");
  const [button, setButton] = useState("Salvar");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getAllCategories(userData.token).then((res) => {
      setCategoryList(res.data);
    });
  }, []);

  function sendForm(e) {
    e.preventDefault();
    setDisabled(true);
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

    if (name !== "" && imageUrl !== "" && grade.length === 1) {
      createNewEntertainment(userData.token, {
        name,
        imageUrl,
        typeId: getTypeId(),
        category1Id: Number(category1Id),
        category2Id: Number(category2Id),
        category3Id: Number(category3Id),
        grade: grade[0],
        comment
      }).then((res) => {
        setName("");
        setImageUrl("");
        setCategory1Id("");
        setCategory2Id("");
        setCategory3Id("");
        setGrade([]);
        setComment("")
        setDisabled(false);
        setButton("Salvar");
        setAdd(true);
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

  function Name() {
    if (categoryName === "Seus Filmes") {
      return "Adicionar um Filme";
    }
    if (categoryName === "Suas Séries") {
      return "Adicionar uma Série";
    }
    if (categoryName === "Seus Animes") {
      return "Adicionar um Anime";
    }
    if (categoryName === "Seus Desenhos") {
      return "Adicionar um Desenho";
    }
    if (categoryName === "Seus Livros") {
      return "Adicionar um Livro";
    }
    if (categoryName === "Seus Jogos") {
      return "Adicionar um Jogo";
    }
  }

  function getTypeId() {
    if (categoryName === "Seus Filmes") {
      return 1;
    }
    if (categoryName === "Suas Séries") {
      return 2;
    }
    if (categoryName === "Seus Animes") {
      return 3;
    }
    if (categoryName === "Seus Desenhos") {
      return 4;
    }
    if (categoryName === "Seus Livros") {
      return 5;
    }
    if (categoryName === "Seus Jogos") {
      return 6;
    }
  }

  return (
    <Container add={add}>
      <div className="board2">
        <IoIosCloseCircle onClick={() => setAdd(true)} className="close" />
        <h2>{Name()}</h2>
        <form onSubmit={sendForm}>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <span>Inserir URL da Imagem</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={name}
              maxLength={20}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Nome</span>
            <i></i>
          </div>
          <div className="categories">
            <select
              value={category1Id}
              onChange={(e) => setCategory1Id(e.target.value)}
            >
              <option value="">Categoria 1</option>
              {categoryList.map((c, i) => (
                <option key={i} value={c.id}>{c.name}</option>
              ))}
            </select>
            <select
              value={category2Id}
              onChange={(e) => setCategory2Id(e.target.value)}
            >
              <option value="">Categoria 2</option>
              {categoryList.map((c, i) => (
                <option key={i} value={c.id}>{c.name}</option>
              ))}
            </select>
            <select
              value={category3Id}
              onChange={(e) => setCategory3Id(e.target.value)}
            >
              <option value="">Categoria 3</option>
              {categoryList.map((c, i) => (
                <option key={i} value={c.id}>{c.name}</option>
              ))}
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
            <textarea
              wrap="hard"
              className="big-input"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <i></i>
          </div>
          <button disabled={disabled} type="submit">{button}</button>
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
  display: ${(props) => (props.add === true ? "none" : "flex")};
  justify-content: center;
  .board2 {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-color: white;
    height: fit-content;
    width: 40%;
    border-radius: 30px;
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
      width: 90%;
      margin-top: 12%;
      margin-bottom: 10%;
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
          width: 8vw;
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
        display: flex;
      justify-content: center;
      align-items: center;
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
