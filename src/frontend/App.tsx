import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import * as Style from "frontend/layout/AppWrapper.style";
import { Menu } from "frontend/layout/Menu/Menu";
import { useUserStore } from "frontend/store/useUserStore";
import { Login } from "frontend/Login/Login";
import { Header } from "frontend/layout/Header/Header";

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
              <Style.ContentWrap>
                <RouterProvider router={router} />
              </Style.ContentWrap>
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
