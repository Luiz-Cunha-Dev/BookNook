import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function HomePage() {

    const navigate = useNavigate();

  return (
    <Container>
      <div className="header">
        <h1>BookNook</h1>
        <div className="buttons">
        <button onClick={() => navigate("/auth/signin")} >Entrar</button>
        <button onClick={() => navigate("/auth/signup")} >Cadastrar-se</button>
        </div>
      </div>
      <div className="principal">
        <div className="text">
          <h2>Titulo</h2>
          <p>
            Evite acidentes. Faça de propósito.. Há muitas coisas mais
            importantes que o dinheiro...mas elas custam caro!. Qual é o
            diminutivo de golfinho?. I bet most serial killers play the drums.
            Evite acidentes. Faça de propósito..
          </p>
          <p>
            Evite acidentes. Faça de propósito.. Há muitas coisas mais
            importantes que o dinheiro...mas elas custam caro!. Qual é o
            diminutivo de golfinho?. I bet most serial killers play the drums.
            Evite acidentes. Faça de propósito..
          </p>
          <p>
            Evite acidentes. Faça de propósito.. Há muitas coisas mais
            importantes que o dinheiro...mas elas custam caro!. Qual é o
            diminutivo de golfinho?. I bet most serial killers play the drums.
            Evite acidentes. Faça de propósito..
          </p>
        </div>
        <img src="https://files.tecnoblog.net/wp-content/uploads/2018/12/apps-android-facebook-google-plus-700x394.jpg" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-image: url(https://cutewallpaper.org/22/4k-minimalist-blue-wallpapers/minimalist-forest-wallpapers-4k-hd-minimalist-forest-backgrounds-on-wallpaperbat.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    h1{
        font-family: 'Chewy';
        color: darkblue;
        font-size: 55px;
    }
    button{
        height: 40px;
        background-color: transparent;
        border: solid 2px darkblue;
        color: darkblue;
        font-family: 'Courier New', Courier, monospace;
        font-size: 17px;
        font-weight: 600;
        border-radius: 20px;
        padding-left: 15px;
        padding-right: 15px;
        margin-right: 20px;
        transition: 500ms;
        cursor: pointer;
        :hover{
            background-color: white;
            font-weight: 900;
            font-size: 20px;
        }
    }
    button:last-child{
        height: 45px;
        background-color: darkblue;
        color: white;
    }
  }
  .principal {
    margin-top: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 600px;
      height: 100%;
      border-radius: 10px;
    }
  }
  .text {
    padding: 0px 0px 30px 30px;
    width: 600px;
    background-color: white;
    border-radius: 20px;
    h2{
        color: darkblue;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 30px;
        font-weight: bold;
    }
    p{
        color: #4C4C66;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 20px;
    }
  }
`;
