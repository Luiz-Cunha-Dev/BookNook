import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import background from "../imgs/w2.jpg";
import { Header } from "../components/header";
import calendar from "../imgs/calendario.png";
import { Option } from "../components/goals/option";

export function Goals() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <div className="board">
        <h2>Metas</h2>
        <div className="back">
          <div className="left">
            <Option>
              <span className="title">FILMES</span>
              <div className="goal">
              <span>META</span>
              <button>-</button>
              <p>00</p>
              <button>+</button>
              </div>
              <div className="qtd">
              <span>QTDE ATUAL</span>
              <button>-</button>
              <p>00</p>
              <button>+</button>
              </div>
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
              <span>QTDE ATUAL</span>
              <button>-</button>
              <p>00</p>
              <button>+</button>
              </div>
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
              <span>QTDE ATUAL</span>
              <button>-</button>
              <p>00</p>
              <button>+</button>
              </div>
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
              <span>QTDE ATUAL</span>
              <button>-</button>
              <p>00</p>
              <button>+</button>
              </div>
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
              <span>QTDE ATUAL</span>
              <button>-</button>
              <p>00</p>
              <button>+</button>
              </div>
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
              <span>QTDE ATUAL</span>
              <button>-</button>
              <p>00</p>
              <button>+</button>
              </div>
            </Option>
          </div>
          <div className="rigth">
            <select>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
            <div className="months">
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Janeiro</span>
              </div>
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Fevereiro</span>
              </div>
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Março</span>
              </div>
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Abril</span>
              </div>
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Maio</span>
              </div>
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Junho</span>
              </div>
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Julho</span>
              </div>
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Agosto</span>
              </div>
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Setembro</span>
              </div>
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Outubro</span>
              </div>
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Novembro</span>
              </div>
              <div className="month">
                <img src={calendar} alt="calendar" />
                <span>Dezembro</span>
              </div>
            </div>
          </div>
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
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  .board {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;
    height: 75vh;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
    h2 {
      color: darkblue;
      font-size: 30px;
      margin-bottom: 5vh;
    }
  }
  .back {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    .left {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .rigth {
      box-sizing: border-box;
      width: 50%;
      height: 97%;
      border-left: solid 3px darkblue;
      select {
        overflow: visible;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        position: absolute;
        height: 30px;
        width: 100px;
        right: 23%;
        top: 6%;
        border: none;
        border-radius: 10px;
        padding-left: 10px;
        padding-right: 5px;
        background-color: white;
        font-size: 22px;
        color: darkblue;
      }
      .months {
        box-sizing: border-box;
        width: 98%;
        height: 98%;
        flex-wrap: wrap;
        display: flex;
        padding-left: 5%;
        overflow: auto;
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
      .month {
        transition: linear 0.1s;
        box-sizing: border-box;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 8px;
        width: 9vw;
        height: 9vw;
        position: relative;
        border-radius: 15px;
        margin-right: 15px;
        margin-bottom: 15px;
        font-size: 0.8vw;
        overflow: hidden;
        cursor: pointer;
        :hover {
          background-color: #eeeeee;
          font-size: 1vw;
          img {
            width: 15vw;
          }
          span {
            top: 13%;
          }
        }
        span {
          text-align: center;
          width: 56%;
          position: absolute;
          left: 22%;
          top: 16%;
          color: white;
          font-weight: bold;
        }
      }
      img {
        width: 14vw;
      }
    }
  }
`;
