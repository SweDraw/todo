import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import Store from './store';
import App from "./component/App";
import './style/normalize.css';

const Root = () => (
  <Provider store={Store}>
    <App/>
  </Provider>
);

render(<Root/>, document.getElementById('root'));
