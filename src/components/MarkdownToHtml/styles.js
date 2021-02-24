import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`;

export const Markdown = styled.div`
  background-color: #283038;
  height: 600px;
  width: 400px;

  textarea {
    height: 100%;
    width: 100%;
    background-color: transparent;
    resize: none;
    outline: none;
    border: none;
    padding: 10px;
    color: #fff;
    font-size: 15px;
  }
`;

export const View = styled.div`
  padding: 10px;
  min-height: 600px;
  max-height: 600px;
  width: 400px;
  overflow-y: auto;
  overflow-x: hidden;

  img {
    width: 365px;
    margin: 0px 0px 15px 0px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2)
  }

  h1 {
    font-family: 'Times New Roman', Times, serif;
    margin: 10px 0px 15px 0px;
  }
`;
