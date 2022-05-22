import React from "react";

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
            const title = `ToDo : ${location.state.title}의 상세 이야기`; 
            return (
            <h1>{title}</h1>
            );
        } else {
            return null;
        }
    }
}

export default Detail;