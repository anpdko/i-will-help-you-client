import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import App from './App.tsx';

import './styles/variables.css';
import './styles/null.scss';
import './styles/index.scss';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
