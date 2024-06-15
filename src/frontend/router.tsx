import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";

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
    element: <Home />,
  },
]);
