import React,{useState} from 'react';

function Hooks()
{
    var n=["Usman","Arman",""]
    const state=useState();
    const[count,setCount]=useState(0);
    function Owaes()
    {
        setCount(count+1);
    };

    return(
        <>

            <div className="text-center">
            <h1 className="display-4">Welcome to the worlds most boring game in the universe. even the aliens cant create a game more boring than this.
            </h1> 
            <h3>Try to reach 1 billion! and get a prize of 0.000000000000000000000001 paisa. You will get your reward after 75 years. *t&c apply</h3>
            <h3>We are in the guinnes book of world records!</h3>
                <h1 className="display-1">{count}</h1>
                <button type="button" className="btn btn-success btn-lg" onClick={Owaes}>Click here</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <p>* You will not get a prize at all.</p>
        </>
        
    );
};
export default Hooks;
