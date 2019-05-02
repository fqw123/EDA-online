import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import './style/common.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

ReactDOM.render(<LocaleProvider  local={zh_CN}><App /></LocaleProvider >, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// "proxy": "http://192.168.43.179:80",

// btn(){
//   console.log('1111');
//   fetch('https://api.github.com/users')
//       .then((res) => res.json())
//       .then(data => {
//           console.log(data);
//           let output = '';
//           data.forEach((user) => {
//               output += `<li>${user.login}</li>`;
//           });
//           document.getElementById('output').innerHTML = output;
//       })
//       .catch(err => console.log(err));
// }

