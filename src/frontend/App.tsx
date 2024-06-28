import React, { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes } from "react-router-dom";
import { router } from "./router";
import * as Style from "frontend/layout/AppWrapper.style";
import { Menu } from "frontend/layout/Menu/Menu";
import { useUserStore } from "frontend/store/useUserStore";
import { Login } from "frontend/Login/Login";
import { Header } from "frontend/layout/Header/Header";
import { PageLoader } from "./layout/Loader/PageLoader/PageLoader";
import useWindowDimensions from "./Hooks/useWindowDimensions";

const App = () => {
  const {
    userInfo,
    checkAuth,
    loading,
  } = useUserStore();

  const { width } = useWindowDimensions();

  useEffect(() => {
    checkAuth();
  }, []);

  const renderUi = () => {
    if (loading) return <PageLoader />;
    if (userInfo.id)
      return (
        <>
          {width > 1200 && <Menu />}
          <Style.MainWrapper>
            <Header width={width} />
            <Style.ContentWrap>
              <Routes>
                {router.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
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
