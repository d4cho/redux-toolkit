import React from "react";
import Titlebar from "./components/Titlebar";
import Menu from "./components/Menu";
import { loadRestoAsync, setResto } from "./redux/restoSlice";
import { useDispatch } from "react-redux";
import "./App.css";

// dummy data from server
const name = "Golden Thai";
const menu = {
    111: { id: 111, name: "Pad Thai", price: 11.95 },
    222: { id: 222, name: "Pad See Ew", price: 12.95 },
    333: { id: 333, name: "Pad Kaprao", price: 13.95 },
    444: { id: 444, name: "Green Curry", price: 14.95 },
    555: { id: 555, name: "Massaman Curry", price: 15.95 },
};

function App() {
    const dispatch = useDispatch();

    // to mimic reaching out to database
    setTimeout(() => dispatch(setResto({ name, menu })), 1000);

    // dispatch(setResto({ name, menu }));
    // dispatch(loadRestoAsync());
    return (
        <div className="App">
            <div className="header">
                <Titlebar />
            </div>
            <div className="main">
                <Menu />
            </div>
        </div>
    );
}

export default App;
