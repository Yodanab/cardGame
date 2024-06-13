import { Home } from "frontend/core/icons/Home";
import { Cart } from "frontend/core/icons/Cart";
import { Transfer } from "frontend/core/icons/Transfer";
import { Controller } from "frontend/core/icons/Controller";
import { Book } from "frontend/core/icons/Book";
import { Card } from "frontend/core/icons/Cards";
import { paths } from "frontend/router";

export const menu = [
  {
    title: "Home",
    path: paths.home,
    Icon: Home,
  },
  {
    title: "Shop",
    path: paths.cart,
    Icon: Cart,
  },
  {
    title: "Transfer",
    path: paths.transfer,
    Icon: Transfer,
  },
  {
    title: "Game",
    path: paths.game,
    Icon: Controller,
  },
  {
    title: "My Cards",
    path: paths.cards,
    Icon: Card,
  },
  {
    title: "My Album",
    path: paths.album,
    Icon: Book,
  },
];
