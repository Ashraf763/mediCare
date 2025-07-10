import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" Component={Login} />
          <Route exact path="/register" Component={Register} />
          <Route path="*" Component={ProtectedRoute} />
          <Route path="/not-found" Component={NotFound} />
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
