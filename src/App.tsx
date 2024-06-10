import React from "react";
// import { Header } from "./layout/Header/Header";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import * as Style from "layout/AppWrapper.style";
import { Menu } from "layout/Menu/Menu";
import { useUserStore } from "store/useUserStore";
import { Login } from "pages/Login/Login";
import { Header } from "layout/Header/Header";

const App = () => {
  const { userInfo } = useUserStore();
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        {userInfo.id ? (
          <Style.AppWrapper>
            <Menu />
            <Style.MainWrapper>
              <Header />
              <RouterProvider router={router} />
            </Style.MainWrapper>
          </Style.AppWrapper>
        ) : (
          <Login />
        )}
      </main>
    </NextUIProvider>
  );
};

export default App;
