import React from "react";
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navitation(){
    return (
        <div className="nav">
            <Link to="/">홈</Link>
            <Link to="/about">Who is PaulTall?</Link>
        </div>
    );
}

export default Navitation;