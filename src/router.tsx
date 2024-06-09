import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const paths = {
  home: "/",
  cart: "/cart",
  transfer: "/transfer",
  game: "/game",
  cards: "/cards",
  album: "/album",
} as const;

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <div />,
  },
]);
