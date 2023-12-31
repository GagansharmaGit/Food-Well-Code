import React from "react";
class Profclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy name",
                location:"Dummy Location",
            }
        }

        console.log("child-consuctor" + this.props.name);
    }

    async  componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const jsonData = await data.json();
        this.setState({
            userInfo:jsonData,
        });
        console.log(jsonData);
        console.log("child-compDidMount"+ this.props.name);
    }
    
    render(){
        console.log("child-render"+ this.props.name);
        const {count1} = this.state;
        const {count2} = this.state;
        return (
            <div>

                 <h1>this is profile class based componenet</h1>
                 <h1>Profile Class Component </h1>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Location: {this.state.userInfo.location}</h2>
                <img src={this.state.userInfo.avatar_url}></img>
                {/* <h2>Count: {count1}</h2>
                <h2>Count2: {count2}</h2>
                <button onClick={()=>{
                    this.setState({
                        count1:1,
                        count2:4,
                    })
                }}>SetCount</button> */}
            </div>
        )
    }
}

export default Profclass;