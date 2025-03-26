import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me volvi a dibujar");

  return <small>{value} </small>;
});

//La forma mas comun pero que no funciona en vite:
/* 
import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me volvi a dibujar");

  return <small>{value} </small>;
}) */
