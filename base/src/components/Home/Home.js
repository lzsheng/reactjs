import React from 'react';
import Page from '../Page';
import WeUI from 'react-weui';
const {Button} = WeUI;

const Home = () => (
  <Page hasFooter={true}>
    <div className="home">
      <img className="homeImg" src="http://u4.tdimg.com/1/66/222/58833299676275806311819614880262660491.jpg" alt=""/>
      <h3>reactJS</h3>
      <h3>2016/10/20</h3>
    </div>
  </Page>
);

export default Home;
