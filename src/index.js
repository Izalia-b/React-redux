import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/rootReducer'
import reduxThunk from 'redux-thunk';


const composeEnhancers =
//если есть обьект window то забрать функцию из этого обьекта REDUX_DEVTOOLS_EXTENSION_COMPOSE
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    //если обьекта нет то использовать встроеную функцию 
    }) : compose;

const loggerMiddleware=store=>next=>action=>{
  const result=next(action)
  console.log('Middleware',store.getState())
  return result
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware,reduxThunk)))


const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
