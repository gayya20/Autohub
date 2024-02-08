import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BallTriangle } from "react-loader-spinner";

export const AppLayout = (props) => {

  const {
    isAuthenticated,
    isLoading,
    children
  } = props;

  return (
    <div className="container">
      { isAuthenticated && <Header/> }
      <div className="main">
        {
          !isLoading
            ? children
            : (
              <div className="loader-wrapper">
                <BallTriangle
                  color="#a660e4"
                  height={ 100 }
                  width={ 100 }
                  timeout={ 3000 }
                />
              </div>
            )
        }
      </div>
      { isAuthenticated && <Footer/> }
    </div>
  );
};