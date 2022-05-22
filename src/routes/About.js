import React from "react";
import './About.css';

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span> 이앱에대해서 : 나의 이름은 폴킴이야, 폴톨이라고도 하지. 이건 리액트로 만든 나의 첫번째 페이지</span>
            <span>-- paultall, 2022</span>
        </div>
    
    );
}

export default About;
