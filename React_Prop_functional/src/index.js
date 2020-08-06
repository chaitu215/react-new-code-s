import React , {Component} from 'react';
import  { render } from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component{
    constructor(){
        super()
        this.state ={
            svgChange : true
        }
    }

    render(){
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <h3> Array : {this.props.propArray}</h3>
                <h3> Bool : {this.props.propBool ? "True" : "False"}</h3>
                <h3> function : {this.props.propFunc(3)}</h3>
                <h3> Number : {this.props.propNumber}</h3>
                <h3> String : {this.props.propString}</h3>
            </div>
        )
    }
}

App.propTypes = {
    name : PropTypes.string,
    propArray : PropTypes.array.isRequired,
    propBool : PropTypes.bool.isRequired
}

App.defaultProps = {
    name: "Rushank",
    propArray : [1,2,3,4],
    propBool: true,
    propFunc : function(p){
        return p
    },
    propNumber : 8,
    propString: "India"
}

render(<App/> , document.getElementById('root'))