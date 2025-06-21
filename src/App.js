import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Patient from "./components/Patient";
import Caretaker from "./components/Caretaker";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" Component={Login} />
          <Route exact path="/" Component={Home} />
          <Route exact path="/patient" Component={Patient} />
          <Route exact path="/caretaker" Component={Caretaker} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
