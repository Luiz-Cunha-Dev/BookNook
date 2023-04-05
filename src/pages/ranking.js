import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import filme from "../imgs/entretenimentos/filmes.jpg";
import { RankingItem } from "../components/popular/rankingItem";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export function Ranking() {
  const { categoryName } = useParams();
  const [filter, setFilter] = useState("score");

  return (
    <Container filter={filter}>
      <Header />
      <div className="board">
        <h2>{categoryName} Mais Populares</h2>
        <div className="filter">
          <button onClick={() => setFilter("score")}>Nota Mais Alta</button>
          <button onClick={() => setFilter("views")}>Mais Vistos</button>
        </div>
        <div className="list">
        <RankingItem>
          <span>1°</span>
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
              <FaStar className="star1"/>
              <FaStar className="star2"/>
              <FaStar className="star3"/>
              <FaStar className="star4"/>
              <FaStar className="star5" />
              <p>Views: 10000</p>
            </Stars>
          </div>
        </RankingItem>
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
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  .board {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;
    width: 35%;
    height: 78%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 35%;
    margin-right: 35%;
    margin-bottom: 1%;
    animation-duration: 1s;
    animation-name: fadeInDown;
    margin-bottom: 10%;
    @media (max-width: 614px) {
      width: 90%;
      height: 75%;
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
    .list{
      width: 95%;
      overflow: auto;
    overflow-x: hidden;
    margin-bottom: 30px;
    ::-webkit-scrollbar {
      border-radius: 50px;
    width: 10px;
    background: transparent;
    border-top-right-radius: 50px;
}
::-webkit-scrollbar-thumb{
background-color: darkblue;
border-radius: 50px;
}   
::-webkit-scrollbar-track-piece{
  height: 80%;
}    
    }
    h2 {
      color: darkblue;
      font-size: 30px;
      @media (max-width: 614px) {
       font-size: 6vw;
      }
    }
    .filter {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 30px;
      @media (max-width: 614px) {
       width: 80%;
       margin-bottom: 5%;
      }
      button {
        transition: 1s;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        height: 40px;
        padding-left: 10px;
        padding-right: 10px;
        border: thin;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        @media (max-width: 614px) {
       font-size: 3.8vw;
      }
        :nth-child(1) {
          background-color: ${(props) =>
            props.filter === "score" ? "darkblue" : "ligthblue"};
          color: ${(props) => (props.filter === "score" ? "white" : "black")};
        }
        :nth-child(2) {
          background-color: ${(props) =>
            props.filter === "views" ? "darkblue" : "ligthblue"};
          color: ${(props) => (props.filter === "views" ? "white" : "black")};
        }
      }
    }
  }
`;

const Stars = styled.div`
  font-size: 2vw;
  color: grey;
  display: flex;
  align-items: center;
  @media (max-width: 614px) {
       font-size: 6vw;
      }
  .star1{
    color: #faab00;
  }
  .star2{
    color: #faab00;
  }
  .star3{
    color: #faab00;
  }
  .star4{
    color: #faab00;
  }
  .star5{
    color: #faab00;
  }
`;
