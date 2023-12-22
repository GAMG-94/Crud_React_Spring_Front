import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUsers from "./users/AddUsers";
import EditUsers from "./users/EditUsers";
import ViewUsers from "./users/ViewUsers";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addUser" element={<AddUsers />} />
          <Route exact path="/editUser/:id" element={<EditUsers />} />
          <Route exact path="/viewUser/:id" element={<ViewUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
