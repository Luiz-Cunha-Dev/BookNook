import styled from "styled-components";
import { deleteEntertainment } from "../../services";

export function Delete({delet, setDelet, openEntertainment, setClose}) {
  let userData = JSON.parse(localStorage.getItem("userData"));

  function deleteItem() {

      deleteEntertainment(
        userData.token,
        openEntertainment.id
      ).then((res) => {
        console.log(res);
        setDelet(true);
        setClose(true)
      });
  }

  return (
    <Container delet={delet}>
      <div className="board2">
        <h2>Tem certeza que gostaria de deletar esse item?</h2>
        <button onClick={deleteItem}>Deletar</button>
        <p onClick={() => setDelet(true)}>Cancelar</p>
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
  height: 100%;
  background-color: rgba(10, 23, 55, 0.5);
  padding-top: 6%;
  display: ${(props) => (props.delet === true ? "none" : "flex")};
  justify-content: center;
  overflow: auto;
  .board2 {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-color: white;
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
      margin-top: 12%;
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
      background-color: darkblue;
      color: white;
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: linear 0.1s;
      :hover {
        width: 170px;
        height: 45px;
        font-weight: bold;
        font-size: 20px;
      }
    }
    p {
      cursor: pointer;
    }
  }
`;
