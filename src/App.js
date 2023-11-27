import "./style.css";
import {useState} from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import menu from "./component/Food";
import { Fragment } from "react";

const App = () =>{
    const [filterdata,setfilterdata] = useState(menu);

    const choose = (val)=>{
        setfilterdata(val);
    } 

    return(
        <Fragment>
            <Navbar change={choose}/>
            <Home val1={filterdata}/>
        </Fragment>
    )
}

export default App;