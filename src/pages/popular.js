import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import { Option } from "../components/popular/option";
import filme from "../imgs/entretenimentos/filmes.jpg";
import serie from "../imgs/entretenimentos/series.jpg";
import anime from "../imgs/entretenimentos/animes.jpg";
import desenho from "../imgs/entretenimentos/desenhos.webp";
import livro from "../imgs/entretenimentos/livros.jpg";
import jogo from "../imgs/entretenimentos/jogos.jpg";
import tudo from "../imgs/entretenimentos/tudo.png";

export function Popular() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <div className="board">
        <h2>Mais Populares</h2>
        <div className="options">
        <Option>
          <div onClick={() => navigate("/popular/ranking/Filmes")}>
            <div className="img">
              <img src={filme} alt="filme" />
            </div>
            Filmes
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/popular/ranking/Séries")}>
            <div className="img">
              <img src={serie} alt="serie" />
            </div>
            Séries
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/popular/ranking/Animes")}>
            <div className="img">
              <img src={anime} alt="anime" />
            </div>
            Animes
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/popular/ranking/Desenhos")}>
            <div className="img">
              <img src={desenho} alt="desenho" />
            </div>
            Desenhos
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/popular/ranking/Livros")}>
            <div className="img">
              <img src={livro} alt="livro" />
            </div>
            Livros
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/popular/ranking/Jogos")}>
            <div className="img">
              <img src={jogo} alt="jogo" />
            </div>
            Jogos
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/popular/ranking/Os")}>
            <div className="img">
              <img src={tudo} alt="tudo" />
            </div>
            Tudo
          </div>
        </Option>
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
    width: 35%;
    height: 78%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 35%;
    margin-right: 35%;
    margin-bottom: 1%;
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
    .options{
      box-sizing: border-box;
    background-color: white;
    width: 93%;
    height: 100%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 35%;
    margin-right: 35%;
    margin-bottom: 1%;
    padding-bottom: 10px;
    overflow: auto;
    overflow-x: hidden;
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
  }
`;
