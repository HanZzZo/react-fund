import React from 'react'

class ClassCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        //если не зафиксировать контекст счетчик работать не будет
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

         increment() {
        this.setState({count: this.state.count += 1})
       }
      
        decrement() {
            this.setState({count: this.state.count -= 1})
      }

    render() {
        return (
            <div>
            <h1>{this.state.count}</h1>
             {/*слушатель события "нажатие" */}
            <button onClick={this.increment}>increment</button> 
            <button onClick={this.decrement}>decremet</button>
        </div>
        )
    }
}

export default ClassCounter