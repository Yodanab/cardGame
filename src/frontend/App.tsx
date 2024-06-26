import React, { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import {
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { router } from "./router";
import * as Style from "frontend/layout/AppWrapper.style";
import { Menu } from "frontend/layout/Menu/Menu";
import { useUserStore } from "frontend/store/useUserStore";
import { Login } from "frontend/Login/Login";
import { Header } from "frontend/layout/Header/Header";
import { Loader } from "./layout/Loader/Loader";
import { Home } from "./pages/Home/Home";

const App = () => {
  const {
    userInfo,
    checkAuth,
    loading,
  } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, []);

  const renderUi = () => {
    if (loading) return <Loader />;
    if (userInfo.id)
      return (
        <>
          <Menu />
          <Style.MainWrapper>
            <Header />
            <Style.ContentWrap>
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
              </Routes>
            </Style.ContentWrap>
          </Style.MainWrapper>
        </>
      );
    return <Login />;
  };

  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <Style.AppWrapper>
          {renderUi()}
        </Style.AppWrapper>
      </main>
    </NextUIProvider>
  );
};

export default App;
