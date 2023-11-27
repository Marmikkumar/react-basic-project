import React  from 'react';
import Detail from './Detail';
import "../style.css";


function Home(probs) {

    return (
        <div className='Home'>
            <div className='container'>
                    {probs.val1.map((item)=>{
                        return(
                        <Detail 
                            key={item.id}
                            image={item.img}
                            title={item.title}
                            intro={item.category}
                            cost={item.price}
                        />
                        );
                    })};
                {/* </div> */}
                
            </div>
            
        </div>
    )
}

export default Home;