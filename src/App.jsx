import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Body from './components/Body';
import style from './index.styl'


function App() {
  return (
    <Provider store={store}>
        <div>
          <Header/>
          <hr className={style.hr}/>
          <Body/>
        </div>
    </Provider>
  );
}

export default App;
