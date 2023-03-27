import { useState} from "react";
import styled from "styled-components";
import { SignIn } from "../components/signin";
import { SignUp } from "../components/signup";
import { useNavigate, useParams } from "react-router-dom";
import background from "../imgs/principal-wallpaper.jpg"
import icone from "../imgs/icone.png";

export function Auth() {

    const navigate = useNavigate();
    const {name} = useParams()
    const [status, setStatus] = useState(name)

  return (
    <Container>
      <div className="header">
        <div  onClick={() => navigate("/")} className="icone">
          <img src={icone} />
          <h1>BookNook</h1>
        </div>
      </div>
      <div className="box">
      <SignUp status={status} setStatus={setStatus}/>
      <SignIn status={status} setStatus={setStatus}/>
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
  height: 100vh;
  .header {
    display: flex;
    padding-left: 17.1%;
    align-items: center;
    h1{
        font-family: 'Chewy';
        color: darkblue;
        font-size: 55px;
        cursor: pointer;
    }
    .icone {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      img {
        height: 50px;
        margin-right: 20px;
        cursor: pointer;
      }
    }
}
.box{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -100px;
    }
`;
