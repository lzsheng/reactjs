import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import Shake from './components/Shake';

window.addEventListener('load',()=>{
  FastClick.attach(document.body);
});

setTimeout(()=>{
  ReactDOM.render(<Shake />,document.getElementById('app'));
},100)

/*样式*/
// import 'weui';
require('normalize.css/normalize.css');
require('./sass/index.scss');