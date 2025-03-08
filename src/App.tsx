import React from "react";
import Sidebar from "./components/Sidebar";
import Rout from "./routers/Rout";

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Rout />
      </div>
    </div>
  );
};

export default App;
