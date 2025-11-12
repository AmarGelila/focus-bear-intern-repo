import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
export default function App() {
  return (
    <>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              to="/"
              className="text-blue-500 p-3 border-b-2 hover:border-b-4 hover:opacity-50 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="text-blue-500 p-3 border-b-2 hover:border-b-4 hover:opacity-50 transition-all"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

// import HelloWorld from "./components/HelloWorld";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// <HelloWorld name={"Focus Bear"} />
// <HelloWorld name={"Amar Gelila"} />
// <Counter />
// <Form />
