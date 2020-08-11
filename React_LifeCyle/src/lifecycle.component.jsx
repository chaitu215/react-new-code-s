import React from 'react';

class Lifecycles extends React.Component{
    constructor(){
        super()
        console.log('In Constructor')
    }

    componentWillMount(){
        console.log('Component Will mount')
    }

    componentDidMount(){
        // prefered for variables , api calls ,  declartions , glocal objects
        console.log('Component Did mount ')
    }

    componentDidUpdate(){
        console.log('Component Did update')
    }

    shouldComponentUpdate(nextProps){
        console.log('should Component update', nextProps)
        return nextProps.text !== this.props.text
    }

    componentWillUnmount(){
        console.log('component Will unMount')
    }

    render(){
        console.log('render')
        return(
            <div className = "lifecycles">
                <h3> Life cycle compoenents</h3>
                {this.props.text}
            </div>
        )
    }
}

export default Lifecycles