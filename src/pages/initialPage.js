import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import { Option } from "../components/homePage/option";
import filme from "../imgs/entretenimentos/filmes.jpg";
import serie from "../imgs/entretenimentos/series.jpg";
import anime from "../imgs/entretenimentos/animes.jpg";
import desenho from "../imgs/entretenimentos/desenhos.webp";
import livro from "../imgs/entretenimentos/livros.jpg";
import jogo from "../imgs/entretenimentos/jogos.jpg";
import entretenimento from "../imgs/entretenimentos/entretenimentos.jpg";
import tudo from "../imgs/entretenimentos/tudo.png";
import { useEffect } from "react";
import { getEntertainmentQuantity } from "../services";
import { useState } from "react";

export function InitialPage() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState({})

  useEffect(()=>{
    getEntertainmentQuantity(userData.token).then((res) => {
      console.log(res);
      setQuantity(res.data)
    })
  }, [])

  return (
    <Container>
      <Header />
      <div className="board">
        <Option>
          <div onClick={() => navigate("/search-page/Seus Filmes")}>
            <div className="img">
              <img src={filme} alt="filme" />
            </div>
            Seus Filmes
            <span>{quantity.movies || 0}</span>
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Suas Séries")}>
            <div className="img">
              <img src={serie} alt="serie" />
            </div>
            Suas Séries
            <span>{quantity.series || 0}</span>
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Seus Animes")}>
            <div className="img">
              <img src={anime} alt="anime" />
            </div>
            Seus Animes
            <span>{quantity.animes || 0}</span>
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Seus Desenhos")}>
            <div className="img">
              <img src={desenho} alt="desenho" />
            </div>
            Seus Desenhos
            <span>{quantity.cartoons || 0}</span>
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Seus Livros")}>
            <div className="img">
              <img src={livro} alt="livro" />
            </div>
            Seus Livros
            <span>{quantity.books || 0}</span>
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Seus Jogos")}>
            <div className="img">
              <img src={jogo} alt="jogo" />
            </div>
            Seus Jogos
            <span>{quantity.games || 0}</span>
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Seus Entretenimentos")}>
            <div className="img">
              <img src={entretenimento} alt="entretenimento" />
            </div>
            Seus
            <br />
            Entretenimentos
            <span>{quantity.userEntertainments || 0}</span>
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Tudo")}>
            <div className="img">
              <img src={tudo} alt="tudo" />
            </div>
            Tudo
            <span>{quantity.allEntertainments || 0}</span>
          </div>
        </Option>
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
  @media (max-width: 614px) {
        overflow: auto;
      }
  .board {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    padding-left: 10%;
    margin-top: 2%;
    animation-duration: 1s;
    animation-name: fadeInDown;
    @media (max-width: 614px) {
      width: 96%;
      padding-left: 3%;
      margin-top:5%;
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
  }
`;
