import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ProductProvider} from './context';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductProvider><App /></ProductProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
