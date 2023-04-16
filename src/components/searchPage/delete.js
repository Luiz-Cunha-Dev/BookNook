import styled from "styled-components";
import { deleteEntertainment } from "../../services";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner'

export function Delete({delet, setDelet, openEntertainment, setClose}) {
  let userData = JSON.parse(localStorage.getItem("userData"));

  const [button, setButton] = useState("Deletar");  
  const [disabled, setDisabled] = useState(false);

  function deleteItem() {
    setDisabled(true);

    if(userData.darkMode === true){
      setButton(<ThreeDots
        height="80"
        width="80"
        radius="9"
        color="black"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
    />)
    }else{
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
    }


      deleteEntertainment(
        userData.token,
        openEntertainment.id
      ).then((res) => {
        setDisabled(false);
        setButton("Deletar");
        setDelet(true);
        setClose(true)
      })
      .catch(()=>{
        setDisabled(false);
        setButton("Deletar");
      })
  }

  return (
    <Container darkMode={userData.darkMode} delet={delet}>
      <div className="board2">
        <h2>Tem certeza que gostaria de deletar esse item?</h2>
        <button disabled={disabled} onClick={deleteItem}>{button}</button>
        <p onClick={() => setDelet(true)}>Cancelar</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  z-index: 3;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(10, 23, 55, 0.5);
  padding-top: 6%;
  display: ${(props) => (props.delet === true ? "none" : "flex")};
  justify-content: center;
  overflow: auto;
  .board2 {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-color: ${props=> props.darkMode === false ? "white" : "#202020"};
    height: fit-content;
    width: 400px;
    height: 35%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    margin-left: 35%;
    margin-right: 35%;
    position: relative;
    animation-duration: 1s;
    animation-name: fadeInDown;
    margin-top: 8%;
    @media (max-width: 614px) {
      margin-left: 5%;
      margin-right: 5%;
      width: 90%;
      margin-top: 50%;
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
    h2 {
        width: 100%;
        text-align: center;
      margin-bottom: 10%;
      color: ${props=> props.darkMode === false ? "black" : "white"};
      @media (max-width: 614px) {
        font-size: 6vw;
        margin-bottom: 5vh;
      }
    }
    button {
      width: 160px;
      height: 42px;
      border-radius: 20px;
      border: thin;
      background-color: ${props=> props.darkMode === false ? "darkblue" : "white"};
      color: ${props=> props.darkMode === false ? "white" : "black"};
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: linear 0.1s;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        width: 170px;
        height: 45px;
        font-weight: bold;
        font-size: 20px;
      }
    }
    p {
      cursor: pointer;
      color: ${props=> props.darkMode === false ? "black" : "white"};
    }
  }
`;
