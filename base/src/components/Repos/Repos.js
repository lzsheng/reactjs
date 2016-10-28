import React from 'react';

const Repos = (props) => {
  console.log(props);
  return (  <div>
    <h3>Repos</h3>
    <h5>参数:{props.params.name}</h5>
    <div>{props.children}</div>
  </div>
  )
};

Repos.propTypes = {
  params: React.PropTypes.object,
};

export default Repos;
