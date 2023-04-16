import styled from "styled-components";

export function Box({children, darkMode}) {
  return <Container darkMode={darkMode}>{children}</Container>;
}

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 32%;
  height: 12vw;
  background-color: ${props=> props.darkMode === false ? "white" : "#202020"};
  border-radius: 10px;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  margin-bottom: 30px;
  margin-left: 10px;
  position: relative;
  @media (max-width: 614px) {
    width: 95%;
    height: 40vw;
    margin-bottom: 4%;
  }

  @media (max-width: 935px) {
    width: 48%;
    height: 20vw;
    margin-bottom: 4%;
  }
  .add{
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 40px;
    color: ${props=> props.darkMode === false ? "darkblue" : "white"};
    cursor: pointer;
    @media (max-width: 614px) {
    right: 12px;
    bottom: 12px;
  }
    :hover{
      font-size: 41px;
    }
  }
  .back {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  img {
    width: 200px;
  }
  h3 {
    padding: 0px;
    width: 100%;
    font-size: 21px;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .img {
    box-sizing: border-box;
    min-width: 110px;
    width: 250px;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
    overflow: hidden;
    @media (max-width: 614px) {
      width: 200px;
      margin-right: 3%;
    }
  }
  :hover {
    background-color: ${props=> props.darkMode === false ? "#eeeeee" : "#303030"};
  }
  .informations {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      color: ${props=> props.darkMode === false ? "black" : "white"};
      font-size: 1vw;
      margin-bottom: 6%;
      @media (max-width: 614px) {
        margin-bottom: 6%;
        font-size: 3vw;
      }
      @media (max-width: 935px) {
        margin-bottom: 6%;
        font-size: 1.5vw;
      }
    }
    .categories {
      display: flex;
      margin-bottom:6%;
      @media (max-width: 614px) {
        margin-bottom: 6%;
      }
      .category {
        margin-right: 3%;
        padding: 3px;
        color: white;
        border-radius: 5px;
        font-size: 0.8vw;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 614px) {
          font-size: 2.2vw;
          margin-right: 2%;
        }
        @media (max-width: 935px) {
          font-size: 1.2vw;
          margin-right: 2%;
        }
      }
      .category:nth-child(1) {
        border: solid 2px darkred;
        background-color: #eb3d34;
      }
      .category:nth-child(2) {
        border: solid 2px darkgreen;
        background-color: #28b019;
      }
      .category:nth-child(3) {
        border: solid 2px darkblue;
        background-color: #345eeb;
      }
    }
  }
`;
