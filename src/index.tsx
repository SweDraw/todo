// * Lib
import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";

// *  Component
import App from "./component/App";

// * Context
import {ThemeProvider} from "./context/theme";

// * All project style
import './style/root.scss';

// * Redux
import Store from './store';

const Root = () => (
  <Provider store={Store}>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </Provider>
);

render(<Root/>, document.getElementById('root'));
