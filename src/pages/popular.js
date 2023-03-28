import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import { Option } from "../components/popular/option";
import filme from "../imgs/entretenimentos/filmes.jpg";
import serie from "../imgs/entretenimentos/series.jpg";
import anime from "../imgs/entretenimentos/animes.jpg";
import desenho from "../imgs/entretenimentos/desenhos.webp";
import livro from "../imgs/entretenimentos/livros.jpg";
import jogo from "../imgs/entretenimentos/jogos.jpg";
import entretenimento from "../imgs/entretenimentos/entretenimentos.jpg";
import tudo from "../imgs/entretenimentos/tudo.png";

export function Popular() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <div className="board">
        <h2>Mais Populares</h2>
        <Option>
          <div className="img">
            <img src={filme} alt="filme" />
          </div>
          Filmes
        </Option>
        <Option>
          <div className="img">
            <img src={serie} alt="serie" />
          </div>
          Séries
        </Option>
        <Option>
          <div className="img">
            <img src={anime} alt="anime" />
          </div>
          Animes
        </Option>
        <Option>
          <div className="img">
            <img src={desenho} alt="desenho" />
          </div>
          Desenhos
        </Option>
        <Option>
          <div className="img">
            <img src={livro} alt="livro" />
          </div>
          Livros
        </Option>
        <Option>
          <div className="img">
            <img src={jogo} alt="jogo" />
          </div>
          Jogos
        </Option>
        <Option>
          <div className="img">
            <img src={tudo} alt="tudo" />
          </div>
          Tudo
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-color: white;
    height: 78%;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 35%;
    margin-right: 35%;
    padding-bottom: 10px;
    h2 {
      color: darkblue;
      font-size: 30px;
    }
  }
`;
