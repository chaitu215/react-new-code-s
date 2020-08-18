import React , {Component} from "react";
import { render } from "react-dom";
import axios from 'axios';

class App extends Component{
    constructor(){
        super()
        this.state = {
            data: '',
            getData : ''
        }
    }

    componentDidMount = () =>{
        // api calls , variable decalaration , object decalaration
        // this is prefered component life cycle 
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            res => {
                console.log('totalData', res.data)
                //this.state.getData = "sdads"
                //this.setState({getData : res.data.filter(item =>item.id === 1)})
                this.setState({getData : res.data})
                console.log('getData', this.state.getData)
            }
        )

        let payload = {
            userId: 19,
            id: 12,
            title: "post data inserted ",
            body:"rushi"
        };

        axios.post("https://jsonplaceholder.typicode.com/posts", payload).then(
            RES => {
                console.log('post call')
                this.setState({data : RES.data })
                console.log('RES POST', JSON.stringify(this.state.data))
            }
        )

        axios.delete("https://jsonplaceholder.typicode.com/posts").then(
            res => {
                this.setState({data : res.data}).filter(item => item.id === "1")
                console.log("delete", this.state.data)
            }
        )

    }

    render(){
        return(
            <div>
                {Object.keys(this.state.getData).map((key) => (
                    <div className="container">
                        <label> get call data </label><br/>
                        <hr/>
                      <span className="left">{'userId : ' + this.state.getData[key].userId}</span> <br/>
                      <span className="left">{'ID : ' + this.state.getData[key].id}</span> <br/>
                      <span className="right">{"Title : " + this.state.getData[key].title}</span> <br/>
                      <span className="right">{"Body : " + this.state.getData[key].body}</span>
                    </div>
                ))}

                {Object.keys(this.state.data).map((key) => (
                    <div className="container">
                        <hr/>
                        <label> Post call data </label>
                        <span className="left">{key}</span>
                        <span className="right">{":  "+ this.state.data[key]}</span>
                    </div>
                ))}

            </div>
        )
    }

}

render(<App/> , document.getElementById('root'))
