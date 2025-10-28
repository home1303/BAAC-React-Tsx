import React from "react";
import AllRouter from "./controllers/AllRouter";
import Sidebar from "./Component/Sidebars";
import Footer from "./Component/Footer";

const App: React.FC = () => {

  return (
    <div>
      <Sidebar />
      <AllRouter />
      <Footer />
    </div>
  );
};

export default App;
