import styled from "styled-components";

export function Option(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 90%;
  height: 15%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  text-align: center;
  margin-bottom: 7px;
  padding-left: 5%;
  padding-right: 2.5%;
  .check{
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon{
      display: initial;
      font-size: 40px;
    color: green;
    }
  }
  .title{
    box-sizing: border-box;
    width: 12%;
    text-align: start;
  }
  .goal{
    box-sizing: border-box;
    padding-top: 3%;
    width: 25%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      font-size: 1.1vw;
      position: absolute;
      left: 35%;
      top: 5px;
    }
  }
  .qtd{
    box-sizing: border-box;
    padding-top: 3%;
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    span{
      font-size: 1.1vw;
      position: absolute;
      left: 11%;
      top: 5px;
    }
  }
  button{
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      min-width: 40px;
      min-height: 40px;
      border-radius: 100%;
      border: none;
      background-color: darkblue;
      color: white;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5%;
      margin-right: 5%;
      cursor: pointer;
      :hover{
        font-size: 33px;
      }
    }
    p{
      box-sizing: border-box;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 35px;
      font-size: 23px;
      background-color: #EEEEEE;
      border-radius: 10px;
      padding-left: 10px;
      padding-right: 10px;
    }
`;
