import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component{
    constructor(){
        super()
        this.state = {
            name : 'React',
            hideClick : false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(){
        if(this.state.hideClick == true){
            this.setState({hideClick : false})
        } else if (this.state.hideClick == false){
            this.setState({hideClick : true})
        }
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text"/>
                    {/* { cond ? trueblock : false block } */}
                    
                    { 
                        this.state.hideClick 
                        ? 
                          <div style={{"background-color": "red", "height" : "500px" ,"width" :  "500px" }}>
                         </div> 
                        : 
                         <div style={{"background-color": "blue", "height" : "500px" ,"width" :  "500px" }}>
                         </div> 
                    }
                </form>
                <button onClick ={this.handleClick}>Click</button>
                
            </div>
        )
    }
}

render(<App/> , document.getElementById('root'))