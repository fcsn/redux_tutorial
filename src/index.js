import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  //합친 reducer를 여기에 넣는다

//store.subscribe(() => console.log(store.getState()));    상태가 바뀔 때마다 실행할 콜백 함수 등록.

/*const unsubscribe = store.subscribe(() => console.log(store.getState()));
  unsubscribe();      unsubscribe실행 후 더 이상 subscribe하지 않게 된다.
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
