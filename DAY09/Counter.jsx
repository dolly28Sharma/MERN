// import React, { useEffect,useState } from 'react'
// // import App from '../App';
// // import { useState } from 'react';

// import React, { useEffect, useState } from 'react'

// const Counter = (props) => {
//     const {counter,increment, decrement, deletecounter}=props;
//     const checkValue=()=>{
//         return counter.count===0?"Zero":counter.count;
//     }
//     const checkCounter=()=>{
//         return counter.count===0?"badge bg-danger m-3 p-3 rounded text-white":"badge bg-warning m-3 p-3 rounded text-dark";
//     };
    
    
//   return (
//     <div className="container mt-3">
//         <button className="btn btn-primary" onClick={()=>decrement(counter)}>Decrement</button>
//         <span className={checkCounter()}>{checkValue()}</span>
//         <button className="btn btn-primary" onClick={()=>increment(counter)}>Increment</button>
//         <button className="btn btn-primary mx-3" onClick={()=>deletecounter(counter)}>Delete</button>
//     </div>
//   )
// }

// export default Counter





// //     if acounter.count>0)
// // }
// //     const [count,setCount]=useState(0);
// //     const checkValue=()=>{
// //         return count===0?"Zero":count;
// //     }
// //     const checkCounter=()=>{
// //         return count===0?" badget bg-danger m-3  p-3 rounded text-white"
// //         :"badget bg-warning m-3 p-3 text-dark rounded";
// //     };
// //     const decrement=()=>{
// //        if(count>0){
// //         setCount(count-1);
// //        }
// //     };
// //     const increment=()=>{
// //         setCount(count+1);
// //     }
// //     useEffect(()=>{
// //         console.log(count);
// //     },[count]);
// //     return(
// //         <div className='conatiner mt-3'>
// //             <button className="btn btn-primary" onClick={decrement}>Decrement</button>
// //         <span className={checkCounter()}>{checkValue()}</span>
// //             <button className="btn btn-primary" onClick={increment}>Increment</button>
// //             <button className="btn btn-primary" onClick={delete}>delete</button>
// //         </div>
// //     );
// // };
// // export default Counter;
import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);//variable that can update value/can be rendered
    const checkValue=()=>{
        return count===0?"Zero":count;
    }
    const checkCounter=()=>{
        return count===0?"badge bg-danger m-3 p-3 rounded text-white":"badge bg-warning m-3 p-3 rounded text-dark";
    };
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
        // count===0?setCount(0):setCount(count-1);
    }
    useEffect(()=>{
        console.log(count);
    },[count]);
  return (
    <div className="container mt-3">
        <button className="btn btn-primary" onClick={decrement}>Decrement</button>
        <span className={checkCounter()}>{checkValue()}</span>
        <button className="btn btn-primary" onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter