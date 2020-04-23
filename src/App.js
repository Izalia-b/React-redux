import React, {Component} from 'react'
import './App.css'
import {connect} from 'react-redux'

class App extends Component {


  // updateCounter(value) {
  //   this.setState({
  //     counter: this.state.counter + value
  //   })
  // }

  render() {
    console.log('APP',this.props)
    return (
      <div className='App'>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
return{
  counter:state.counter
}

}


function mapDispathToProps(dispatch){
    return{
      onAdd:()=>dispatch({type:'ADD'}),
      onSub:()=>dispatch({type:'SUB'}),
    }
  }

export default connect(mapStateToProps,mapDispathToProps)(App)
