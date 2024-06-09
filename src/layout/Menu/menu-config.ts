import { Home } from "core/icons/Home";
import { Cart } from "core/icons/Cart";
import { Transfer } from "core/icons/Transfer";
import { Controller } from "core/icons/Controller";
import { Book } from "core/icons/Book";
import { Card } from "core/icons/Cards";
import { paths } from "router";

export const menu = [
  {
    title: "Home",
    path: paths.home,
    Icon: Home,
  },
  {
    title: "Cart",
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
    title: "Cards",
    path: paths.cards,
    Icon: Card,
  },
  {
    title: "Album",
    path: paths.album,
    Icon: Book,
  },
];
