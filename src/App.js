import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Select from "./component/select";
import CustomeSelect from "./component/customeSelect";
import Register from "./component/Register/register";


const App = () => {
  
  return (
    <div className="App">
      {/* <Select /> */}
    {/* <CustomeSelect /> */}
    <Register />
    </div>
  );
};

export default App;
