import styled from "styled-components";
import { useState } from "react";
import { Option } from "../../components/goals/option";
import { IoIosCloseCircle } from "react-icons/io";
import { createGoal, getAllGoals } from "../../services";
import { useEffect } from "react";

export function Window({ close, setClose, month, year, goals }) {
  let userData = JSON.parse(localStorage.getItem("userData"));
  const [goalMovies, setGoalMovies] = useState(0)
  const [qtdMovies, setQtdMovies] = useState(0)
  const [goalSerie, setGoalSerie] = useState(0)
  const [qtdSerie, setQtdSerie] = useState(0)
  const [goalAnimes, setGoalAnimes] = useState(0)
  const [qtdAnimes, setQtdAnimes] = useState(0)
  const [goalCartoon, setGoalCartoon] = useState(0)
  const [qtdCartoon, setQtdCartoon] = useState(0)
  const [goalBook, setGoalBook] = useState(0)
  const [qtdBook, setQtdBook] = useState(0)
  const [goalGames, setGoalGames] = useState(0)
  const [qtdGames, setQtdGames] = useState(0)
  
  useEffect(()=>{ 
    load()
  }, [close])

  function sendGoal(quantity, goal, typeId){
    createGoal(userData.token, {quantity, goal, typeId, month: numberOfMonth(), year: Number(year)}).then(res => {
      alert("Salvo com Sucesso")
    })
  }

  function numberOfMonth(){
    if(month === "Janeiro"){
      return 1
    }
    if(month === "Fevereiro"){
      return 2
    }
    if(month === "Março"){
      return 3
    }
    if(month === "Abril"){
      return 4
    }
    if(month === "Maio"){
      return 5
    }
    if(month === "Junho"){
      return 6
    }
    if(month === "Julho"){
      return 7
    }
    if(month === "Agosto"){
      return 8
    }
    if(month === "Setembro"){
      return 9
    }
    if(month === "Outubro"){
      return 10
    }
    if(month === "Novembro"){
      return 11
    }
    if(month === "Dezembro"){
      return 12
    }
  }

  function load(){
    let currentGoal = goals.filter(g => g.month === numberOfMonth() && g.year == year);

    setGoalMovies(0);
    setQtdMovies(0);
    setGoalSerie(0);
    setQtdSerie(0);
    setGoalAnimes(0);
    setQtdAnimes(0);
    setGoalCartoon(0);
    setQtdCartoon(0);
    setGoalBook(0);
    setQtdBook(0);
    setGoalGames(0);
    setQtdGames(0);

    currentGoal.forEach(g => {
      if(g.typeId === 1){
        setGoalMovies(g.goal);
        setQtdMovies(g.quantity);
      }

      if(g.typeId === 2){
        setGoalSerie(g.goal);
        setQtdSerie(g.quantity);
      }

      if(g.typeId === 3){
        setGoalAnimes(g.goal);
        setQtdAnimes(g.quantity);
      }

      if(g.typeId === 4){
        setGoalCartoon(g.goal);
        setQtdCartoon(g.quantity);
      }

      if(g.typeId === 5){
        setGoalBook(g.goal);
        setQtdBook(g.quantity);
      }

      if(g.typeId === 6){
        setGoalGames(g.goal);
        setQtdGames(g.quantity);
      }
    })
  }

  return (
    <Container darkMode={userData.darkMode} close={close}>
      <div className="left">
        <IoIosCloseCircle onClick={() => setClose(true)} className="close" />
        <h2>
          {month} de {year}
        </h2>
        <Option darkMode={userData.darkMode}>
          <span className="title">FILMES</span>
          <div className="goal">
            <span>META</span>
            <button onClick={()=> setGoalMovies(goalMovies-1)}>-</button>
            <p>{goalMovies}</p>
            <button onClick={()=> setGoalMovies(goalMovies+1)}>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button onClick={()=> setQtdMovies(qtdMovies-1)}>-</button>
            <p>{qtdMovies}</p>
            <button onClick={()=> setQtdMovies(qtdMovies+1)}>+</button>
          </div>
          <button onClick={() => sendGoal(qtdMovies, goalMovies, 1)} className="save">Salvar</button>
        </Option>
        <Option darkMode={userData.darkMode}>
          <span className="title">SÈRIES</span>
          <div className="goal">
            <span>META</span>
            <button onClick={()=> setGoalSerie(goalSerie-1)}>-</button>
            <p>{goalSerie}</p>
            <button onClick={()=> setGoalSerie(goalSerie+1)}>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button onClick={()=> setQtdSerie(qtdSerie-1)}>-</button>
            <p>{qtdSerie}</p>
            <button onClick={()=> setQtdSerie(qtdSerie+1)}>+</button>
          </div>
          <button onClick={() => sendGoal(qtdSerie, goalSerie, 2)} className="save">Salvar</button>
        </Option>
        <Option darkMode={userData.darkMode}>
          <span className="title">ANIMES</span>
          <div className="goal">
            <span>META</span>
            <button onClick={()=> setGoalAnimes(goalAnimes-1)}>-</button>
            <p>{goalAnimes}</p>
            <button onClick={()=> setGoalAnimes(goalAnimes+1)}>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button onClick={()=> setQtdAnimes(qtdAnimes-1)}>-</button>
            <p>{qtdAnimes}</p>
            <button onClick={()=> setQtdAnimes(qtdAnimes+1)}>+</button>
          </div>
          <button onClick={() => sendGoal(qtdAnimes, goalAnimes, 3)} className="save">Salvar</button>
        </Option>
        <Option darkMode={userData.darkMode}>
          <span className="title">DESENHOS</span>
          <div className="goal">
            <span>META</span>
            <button onClick={()=> setGoalCartoon(goalCartoon-1)}>-</button>
            <p>{goalCartoon}</p>
            <button  onClick={()=> setGoalCartoon(goalCartoon+1)}>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button onClick={()=> setQtdCartoon(qtdCartoon-1)}>-</button>
            <p>{qtdCartoon}</p>
            <button onClick={()=> setQtdCartoon(qtdCartoon+1)}>+</button>
          </div>
          <button onClick={() => sendGoal(qtdCartoon, goalCartoon, 4)} className="save">Salvar</button>
        </Option>
        <Option darkMode={userData.darkMode}>
          <span className="title">LIVROS</span>
          <div className="goal">
            <span>META</span>
            <button onClick={()=> setGoalBook(goalBook-1)}>-</button>
            <p>{goalBook}</p>
            <button onClick={()=> setGoalBook(goalBook+1)}>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button onClick={()=> setQtdBook(qtdBook-1)}>-</button>
            <p>{qtdBook}</p>
            <button onClick={()=> setQtdBook(qtdBook+1)}>+</button>
          </div>
          <button onClick={() => sendGoal(qtdBook, goalBook, 5)} className="save">Salvar</button>
        </Option>
        <Option darkMode={userData.darkMode}>
          <span className="title">JOGOS</span>
          <div className="goal">
            <span>META</span>
            <button onClick={()=> setGoalGames(goalGames-1)}>-</button>
            <p>{goalGames}</p>
            <button onClick={()=> setGoalGames(goalGames+1)}>+</button>
          </div>
          <div className="qtd">
            <span>QUANTIDADE ATUAL</span>
            <button onClick={()=> setQtdGames(qtdGames-1)}>-</button>
            <p>{qtdGames}</p>
            <button onClick={()=> setQtdGames(qtdGames+1)}>+</button>
          </div>
          <button onClick={() => sendGoal(qtdGames, goalGames, 6)} className="save">Salvar</button>
        </Option>
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
  height: 100vh;
  display: ${(props) => (props.close === true ? "none" : "flex")};
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  padding-top: 8%;
  background-color: rgba(10, 23, 55, 0.5);
  h2 {
    color: ${props=> props.darkMode === false ? "darkblue" : "white"};
    font-size: 30px;
    margin-bottom: 3%;
    margin-top: 2%;
    @media (max-width: 614px) {
      font-size: 6vw;
      margin-bottom: 10%;
    }
  }
  span{
    color: ${props=> props.darkMode === false ? "black" : "white"};
  }
  .left {
    width: 50%;
    height: 83%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props=> props.darkMode === false ? "white" : "#505050"};
    border-radius: 20px;
    margin-top: -2%;
    position: relative;
    animation-duration: 1s;
    animation-name: fadeInDown;
    @media (max-width: 614px) {
      margin-left: 5%;
      margin-right: 5%;
      height: fit-content;
      width: 90%;
      margin-top: 12%;
      margin-bottom: 10%;
      padding-bottom: 5%;
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
      background-color: white;
      border-radius: 100%;
      cursor: pointer;
      @media (max-width: 614px) {
        right: 10px;
        font-size: 10vw;
      }
    }
  }
`;
