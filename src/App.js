import React, {Component} from 'react'
import './App.css'
import {connect} from 'react-redux'
import Counter from './Counter'
import {add,add_number,sub,asyncAdd} from '../src/redux/actions/actions';

class App extends Component {


  // updateCounter(value) {
  //   this.setState({
  //     counter: this.state.counter + value
  //   })
  // }

  render() {
    return (
      <div className='App'>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>
        <div className="Actions">
          <button onClick={()=>this.props.onAddNumber(15)}>Добавить 15</button>
          <button onClick={()=>this.props.onAddNumber(-17)}>Вычесть 17</button>
        </div>
        <div className="Actions">
          <button onClick={()=>this.props.onAsynsAdd(100)}>Ассинхронно добавить 100</button>
        </div>
        <Counter/>
      </div>
    )
  }
}


function mapStateToProps(state){
return{
  counter:state.counter1.counter
}

}


function mapDispathToProps(dispatch){
    return{
      onAdd:()=>dispatch(add()),
      onSub:()=>dispatch(sub()),
      onAddNumber:(number)=>dispatch(add_number(number)),
      onAsynsAdd:(number)=>dispatch(asyncAdd(number)),
    }
  }

export default connect(mapStateToProps,mapDispathToProps)(App)
