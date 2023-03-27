import { useState} from "react";
import styled from "styled-components";
import { SignIn } from "../components/signin";
import { SignUp } from "../components/signup";
import { useNavigate, useParams } from "react-router-dom";

export function Auth() {

    const navigate = useNavigate();
    const {name} = useParams()
    const [status, setStatus] = useState(name)

  return (
    <Container>
      <div className="header">
        <h1 onClick={() => navigate("/")}>BookNook</h1>
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
  background-image: url(https://cutewallpaper.org/22/4k-minimalist-blue-wallpapers/minimalist-forest-wallpapers-4k-hd-minimalist-forest-backgrounds-on-wallpaperbat.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
  .header {
    display: flex;
    padding-left: 18.5%;
    align-items: center;
    h1{
        font-family: 'Chewy';
        color: darkblue;
        font-size: 55px;
        position: fixed;
        top: 0px;
        cursor: pointer;
    }
}
.box{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
