import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main application component
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <RecoilRoot> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RecoilRoot>,
  document.getElementById('root')
);
