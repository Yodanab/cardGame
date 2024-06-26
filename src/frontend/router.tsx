import React from "react";
import { Home } from "./pages/Home/Home";

export const paths = {
  home: "/",
  cart: "/cart",
  transfer: "/transfer",
  game: "/game",
  cards: "/cards",
  album: "/album",
} as const;

export const router = [
  {
    path: paths.home,
    element: <Home />,
  },
];
