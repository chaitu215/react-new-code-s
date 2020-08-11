import React from 'react';
import './App.css';
import LifeCycles from './lifecycle.component';


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            showChild : true,
            text : ''
        }
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">

                    <button onClick={() => this.setState(state => ({
                        showChild : !state.showChild
                    }))}>Toggle LifeCycles</button>

                    <button onClick={()=> this.setState(state => ({
                        text : state.text + 'hello'
                    }))}>Update Text</button>

                    {this.state.showChild ? <LifeCycles text={this.state.text}/> : null }
                </header>
            </div>
        )
    }
}

export default App 