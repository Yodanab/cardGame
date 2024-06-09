import React from "react";
// import { Header } from "./layout/Header/Header";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import * as Style from "./layout/AppWrapper.style";
import { Menu } from "./layout/Menu/Menu";
import { SubMenu } from "./layout/Menu/SubMenu";

const App = () => {
  return (
    <Style.AppWrapper>
      <Menu />
      <Style.MainWrapper>
        <div>USER</div>
        <SubMenu />
        <RouterProvider router={router} />
      </Style.MainWrapper>
    </Style.AppWrapper>
  );
};

export default App;
