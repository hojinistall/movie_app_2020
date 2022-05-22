import React from "react";
import "./Detail.css";

// function Detail(props){
//     console.log(props);
//     const {location} = props;
//     const title = `ToDo : ${location.state.title}의 상세 이야기`; 
//     return (
//         <h1>{title}</h1>
//     );
// }

class Detail extends React.Component{
    componentDidMount(){
        const { location,history} = this.props;
        if(location.state == undefined){
            history.push('/');
        }
    }

    render(){
        const { location} = this.props;

        if(location.state){
            return (
            <div className="movie__detail">
                <h1> -- 폴톨의 영화 이야기 --</h1>
                <h2>{location.state.title}</h2>
                <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                <h3 className="movie__title">{location.state.title} </h3>
                <h5 className="movie__year"><span>제작 년도 : </span>{location.state.year}</h5>
                <ul className='movie__genres'>
                    <span>장르 :&nbsp;</span>
                    {location.state.genres.map((genre,index)=>{
                        return <li key={index} className='movie__genre'>{genre}</li>;
                    })}
                </ul>
                <p>요약 줄거리 : </p>
                <p className="movie__summary">{location.state.summary}</p>
            </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;