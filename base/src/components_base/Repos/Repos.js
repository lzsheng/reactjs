import React from 'react';
import Page from '../Page';

const Repos = (props) => {
  console.log(props);
  return (  
    <Page hasFooter={true}>
    <div>
      <h3>Repos</h3>
      <h5>参数:{props.params.name}</h5>
      <div>{props.children}</div>
    </div>
    </Page>
  )
};

Repos.propTypes = {
  params: React.PropTypes.object,
};

export default Repos;
