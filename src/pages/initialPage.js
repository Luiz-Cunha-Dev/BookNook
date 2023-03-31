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

export function InitialPage() {
  const navigate = useNavigate();

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
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Seus Séries")}>
            <div className="img">
              <img src={serie} alt="serie" />
            </div>
            Suas Séries
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Seus Animes")}>
            <div className="img">
              <img src={anime} alt="anime" />
            </div>
            Seus Animes
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Seus Desenhos")}>
            <div className="img">
              <img src={desenho} alt="desenho" />
            </div>
            Seus Desenhos
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Seus Livros")}>
            <div className="img">
              <img src={livro} alt="livro" />
            </div>
            Seus Livros
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Seus Jogos")}>
            <div className="img">
              <img src={jogo} alt="jogo" />
            </div>
            Seus Jogos
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
          </div>
        </Option>
        <Option>
          <div onClick={() => navigate("/search-page/Tudo")}>
            <div className="img">
              <img src={tudo} alt="tudo" />
            </div>
            Tudo
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
  .board {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    padding-left: 10%;
    margin-top: 2%;
  }
`;
