import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {

    const navigate=useNavigate();
    const handleback=()=>{
        navigate(-1);
    }
    return(
    <div>
        <h1>Page not found</h1>
        <button onClick={handleback}>Go back</button>   
    </div>)
}
