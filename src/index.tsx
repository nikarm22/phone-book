import React from 'react';
import ReactDOM from 'react-dom';

import App from './sections/app/App';
import { ContactsContextProvider } from './stores/contacts';

import reportWebVitals from './utils/reportWebVitals';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ContactsContextProvider>
      <App />
    </ContactsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
