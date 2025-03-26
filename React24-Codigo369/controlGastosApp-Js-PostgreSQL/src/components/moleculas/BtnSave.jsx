import styled from "styled-components";
import { Icono } from "../atomos/Icono";

export const BtnSave = ({ funcion, titulo, bgcolor, icono }) => {
  return (
    <Container type="submit" bgcolor={bgcolor}>
      <Icono>{icono}</Icono>
      <span className="btn" onClick={funcion}>
        {titulo}
      </span>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  background-color: initial;
  .btn {
    background-color: ${(props) => props.bgcolor};
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em #000;
    transition: 0.2s;
    white-space: 1px;
    color: #000;
    cursor: pointer;
    &:hover {
        transform: translate(-0.05em, -0.05em);
        box-shadow: 0.15em 0.15em #000;
    }
    &:active {
        transform: translate(0.05em, 0.05em);
        box-shadow: 0.05em 0.05em #000;
  }
`;
