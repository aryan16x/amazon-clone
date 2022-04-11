import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./components/Firebase";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only runs once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Header /> <Home />
                </>
              }
            />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/checkout"
              element={
                <>
                  <Header /> <Checkout />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
