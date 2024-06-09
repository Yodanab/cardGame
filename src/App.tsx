import React from "react";
// import { Header } from "./layout/Header/Header";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import * as Style from "layout/AppWrapper.style";
import { Menu } from "layout/Menu/Menu";
import { SubMenu } from "layout/Menu/SubMenu";
import { useUserStore } from "store/useUserStore";
import { Login } from "pages/Login/Login";
import { Header } from "layout/Header/Header";

const App = () => {
  const { id } = useUserStore();
  return id ? (
    <Style.AppWrapper>
      <Menu />
      <Style.MainWrapper>
        <Header />
        <RouterProvider router={router} />
      </Style.MainWrapper>
    </Style.AppWrapper>
  ) : (
    <Login />
  );
};

export default App;
