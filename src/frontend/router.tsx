import React from "react";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { NotFound } from "./pages/NotFound/NotFound";

export const paths = {
  home: "/",
  shop: "/shop",
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
  {
    path: paths.shop,
    element: <Shop />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
