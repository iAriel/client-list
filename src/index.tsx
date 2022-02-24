import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {TableContextProvider} from './context/tableContext';

ReactDOM.render(
  <React.StrictMode>
    <TableContextProvider> 
      <App />
    </TableContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
