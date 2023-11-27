import React  from 'react';
import "../style.css";
import menu from "./Food";

function Navbar(probs) {

    const filter = (e) =>{
        const val = e.target.value;
        const ele=val.toLowerCase();

        if(ele===''){
            probs.change(null);
        }

        const collect = menu?.filter((item)=>
            item.title.toLowerCase().includes(ele)
        );

        probs.change(collect);
    }

    const chooseoption = (type)=>{
        if(type==="all"){
            return probs.change(menu);
        }
        
        const typeproduct = menu?.filter((item)=>
            item.category.toLowerCase().includes(type)
        );

        probs.change(typeproduct);
    }

    return (
        <div className='Nav'>
            <div className='title'>
                <h2>F o o d   C o u n t e r</h2>
                <input
                    onChange={filter}
                    className='nav-inp'
                    type="text"
                    placeholder='search food'
                ></input>
            </div>

            <div className='option'>
                <div className='opt'>
                    <button onClick={()=> chooseoption("all")}>All</button> 
                    <button onClick={()=> chooseoption("breakfast")}>BreakFast</button>
                    <button onClick={()=> chooseoption("lunch")}>Lunch</button>
                    <button onClick={()=> chooseoption("dinner")}>Dinner</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;