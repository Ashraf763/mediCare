import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Patient from "./components/Patient";
import Caretaker from "./components/Caretaker";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" Component={Login} />
          <Route exact path="/register" Component={Register} />
          <Route exact path="/" Component={Home} />
          <Route exact path="/patient" Component={Patient} />
          <Route exact path="/caretaker" Component={Caretaker} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import "./App.css";
// import Wrapper from "./components/Wrapper";
// import NotFound from "./components/NotFound";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="*" Component={Wrapper} />
//         <Route path="/not-found" Component={NotFound} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
