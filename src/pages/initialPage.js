import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import { Option } from "../components/option";
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
          <div className="img">
            <img src={filme} alt="filme" />
          </div>
          Seus Filmes
        </Option>
        <Option>
          <div className="img">
            <img src={serie} alt="serie" />
          </div>
          Suas Séries
        </Option>
        <Option>
        <div className="img">
            <img src={anime} alt="anime" />
          </div>
            Seus Animes</Option>
        <Option>
        <div className="img">
            <img src={desenho} alt="desenho" />
          </div>
            Seus Desenhos</Option>
        <Option>
        <div className="img">
            <img src={livro} alt="livro" />
          </div>
            Seus Livros</Option>
        <Option>
        <div className="img">
            <img src={jogo} alt="jogo" />
          </div>
            Seus Jogos</Option>
        <Option>
        <div className="img">
            <img src={entretenimento} alt="entretenimento" />
          </div>
          Todos os Seus
          <br /> Entretenimentos
        </Option>
        <Option>
        <div className="img">
            <img src={tudo} alt="tudo" />
          </div>
            Tudo</Option>
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
    margin-top: 70px;
  }
`;
