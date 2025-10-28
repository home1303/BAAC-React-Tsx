import React from "react";
import AllRouter from "./controllers/AllRouter";
import Sidebar from "./Component/Sidebars";

const App: React.FC = () => {

  return (
    <div>
      <Sidebar />
      <AllRouter />
    </div>
  );
};

export default App;
