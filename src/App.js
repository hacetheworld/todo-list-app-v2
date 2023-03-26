import { useContext } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoList from "./todo";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./loginSignup/login";
import { Signup } from "./loginSignup/signup";
import { Header } from "./header";
import { userContext } from "./loginSignup/contextApi/contextApi";

export default function App() {
  const { isLoggedIn } = useContext(userContext);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
