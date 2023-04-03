import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import { FaSearch } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import filme from "../imgs/entretenimentos/filmes.jpg";
import { Box } from "../components/searchPage/box";
import { Window } from "../components/searchPage/window";
import { Add } from "../components/searchPage/add";

export function SearchPage() {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const [close, setClose] = useState(true);
  const [add, setAdd] = useState(true);

  return (
    <>
      <Container>
        <Header />
        <Add add={add} setAdd={setAdd} categoryName={categoryName}/>
        <Window close={close} setClose={setClose} categoryName={categoryName}/>
        <div className="board">
          <h2>{categoryName}</h2>
          <form>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>Busque pelo nome que procura</span>
              <i></i>
            </div>
            <button>
              <FaSearch />
            </button>
            <div onClick={() => setAdd(false)} className="add">
              <span>Adicionar</span>
              <div className="rigth">
                <MdOutlineAdd className="plus" />
              </div>
            </div>
          </form>
          <div className="list">
            <Box>
              <div onClick={() => setClose(false)} className="back">
              <div className="img">
                <img src={filme} alt="filme" />
              </div>
              <div className="informations">
                <h3>Vingadores: Ultimato</h3>
                <div className="categories">
                  <div className="category">Ação</div>
                  <div className="category">Heroi</div>
                  <div className="category">Ficção Cientifica</div>
                </div>
                <Stars>
                  <FaStar className="star1" />
                  <FaStar className="star2" />
                  <FaStar className="star3" />
                  <FaStar className="star4" />
                  <FaStar className="star5" />
                </Stars>
              </div>
              </div>
            </Box>
            <Box>
              <div  onClick={() => setClose(false)} className="back">
              <div className="img">
                <img src={filme} alt="filme" />
              </div>
              <div className="informations">
                <h3>Vingadores: Ultimato</h3>
                <div className="categories">
                  <div className="category">Ação</div>
                  <div className="category">Heroi</div>
                  <div className="category">Ficção Cientifica</div>
                </div>
                <Stars>
                  <FaStar className="star1" />
                  <FaStar className="star2" />
                  <FaStar className="star3" />
                  <FaStar className="star4" />
                  <FaStar className="star5" />
                </Stars>
              </div>
              </div>
            </Box>
            <Box>
              <div  onClick={() => setClose(false)} className="back">
              <div className="img">
                <img src={filme} alt="filme" />
              </div>
              <div className="informations">
                <h3>Vingadores: Ultimato</h3>
                <div className="categories">
                  <div className="category">Ação</div>
                  <div className="category">Heroi</div>
                  <div className="category">Ficção Cientifica</div>
                </div>
                <Stars>
                  <FaStar className="star1" />
                  <FaStar className="star2" />
                  <FaStar className="star3" />
                  <FaStar className="star4" />
                  <FaStar className="star5" />
                </Stars>
              </div>
              </div>
            </Box>
            <Box>
              <div  onClick={() => setClose(false)} className="back">
              <div className="img">
                <img src={filme} alt="filme" />
              </div>
              <div className="informations">
                <h3>Vingadores: Ultimato</h3>
                <div className="categories">
                  <div className="category">Ação</div>
                  <div className="category">Heroi</div>
                  <div className="category">Ficção Cientifica</div>
                </div>
                <Stars>
                  <FaStar className="star1" />
                  <FaStar className="star2" />
                  <FaStar className="star3" />
                  <FaStar className="star4" />
                  <FaStar className="star5" />
                </Stars>
              </div>
              </div>
            </Box>
            <Box>
              <div  onClick={() => setClose(false)} className="back">
              <div className="img">
                <img src={filme} alt="filme" />
              </div>
              <div className="informations">
                <h3>Vingadores: Ultimato</h3>
                <div className="categories">
                  <div className="category">Ação</div>
                  <div className="category">Heroi</div>
                  <div className="category">Ficção Cientifica</div>
                </div>
                <Stars>
                  <FaStar className="star1" />
                  <FaStar className="star2" />
                  <FaStar className="star3" />
                  <FaStar className="star4" />
                  <FaStar className="star5" />
                </Stars>
              </div>
              </div>
            </Box>
            <Box>
              <div  onClick={() => setClose(false)} className="back">
              <div className="img">
                <img src={filme} alt="filme" />
              </div>
              <div className="informations">
                <h3>Vingadores: Ultimato</h3>
                <div className="categories">
                  <div className="category">Ação</div>
                  <div className="category">Heroi</div>
                  <div className="category">Ficção Cientifica</div>
                </div>
                <Stars>
                  <FaStar className="star1" />
                  <FaStar className="star2" />
                  <FaStar className="star3" />
                  <FaStar className="star4" />
                  <FaStar className="star5" />
                </Stars>
              </div>
              </div>
            </Box>
            <Box>
              <div  onClick={() => setClose(false)} className="back">
              <div className="img">
                <img src={filme} alt="filme" />
              </div>
              <div className="informations">
                <h3>Vingadores: Ultimato</h3>
                <div className="categories">
                  <div className="category">Ação</div>
                  <div className="category">Heroi</div>
                  <div className="category">Ficção Cientifica</div>
                </div>
                <Stars>
                  <FaStar className="star1" />
                  <FaStar className="star2" />
                  <FaStar className="star3" />
                  <FaStar className="star4" />
                  <FaStar className="star5" />
                </Stars>
              </div>
              </div>
            </Box>
            <Box>
              <div  onClick={() => setClose(false)} className="back">
              <div className="img">
                <img src={filme} alt="filme" />
              </div>
              <div className="informations">
                <h3>Vingadores: Ultimato</h3>
                <div className="categories">
                  <div className="category">Ação</div>
                  <div className="category">Heroi</div>
                  <div className="category">Ficção Cientifica</div>
                </div>
                <Stars>
                  <FaStar className="star1" />
                  <FaStar className="star2" />
                  <FaStar className="star3" />
                  <FaStar className="star4" />
                  <FaStar className="star5" />
                </Stars>
              </div>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </>
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
    margin-top: 2%;
    margin-left: 5%;
    margin-right: 5%;
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
      margin-bottom: 5vh;
    }
    form {
      width: 35%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      position: relative;
      margin-bottom: 2vw;
      .add {
        transition: linear 0.5s;
        position: absolute;
        right: -18vw;
        bottom: 0px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        font-size: 40px;
        color: darkblue;
        margin-right: 20px;
        cursor: pointer;
        :hover {
          font-size: 50px;
          span {
            font-size: 20px;
            width: 110px;
          }
        }
        span {
          width: 90px;
          transition: linear 0.2s;
          font-size: 20px;
          padding-left: 10px;
          padding-right: 10px;
          font-weight: 600;
        }
        .rigth {
          background-color: darkblue;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 50px;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          .plus {
            transition: linear 0.1;
            color: white;
          }
        }
      }
      input {
        height: 6%;
        width: 50%;
        border: none;
        outline: none;
        padding: 20px 10px 10px 10px;
        font-size: 20px;
      }
      button {
        position: absolute;
        right: 0px;
        min-width: 40px;
        height: 40px;
        border-radius: 100%;
        border: none;
        background-color: darkblue;
        color: white;
        font-size: 19px;
        cursor: pointer;
        transition: linear 0.1s;
        display: flex;
        align-items: center;
        justify-content: center;
        :hover {
          font-weight: bold;
          font-size: 22px;
        }
      }
    }
    img {
      height: 12vw;
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
  .list {
    box-sizing: border-box;
    width: 98%;
    height: 100%;
    display: flex;
    padding-left: 2%;
    padding-right: 2%;
    flex-wrap: wrap;
    overflow: auto;
    overflow-x: hidden;
    margin-bottom: 30px;
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
`;

const Stars = styled.div`
  font-size: 2vw;
  color: grey;
  display: flex;
  align-items: center;
  .star1 {
    color: #faab00;
  }
  .star2 {
    color: #faab00;
  }
  .star3 {
    color: #faab00;
  }
  .star4 {
    color: #faab00;
  }
  .star5 {
    color: #faab00;
  }
`;
