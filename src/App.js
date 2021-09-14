import React, { useState } from "react";
import HomePage from "./routes/Home/HomePage";
import GamePage from "./routes/Game/GamePage";

const App = () => {
  const [page, setPage] = useState("app");
  const handlerPageChange = (page) => {
    setPage(page);
  };

  switch (page) {
    case "app":
      return <HomePage onChangePage={handlerPageChange} />;
    case "game":
      return <GamePage onChangePage={handlerPageChange} />;
    default:
      return <HomePage />;
  }
};

export default App;
