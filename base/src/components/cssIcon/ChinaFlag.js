import React from 'react';

require('srcPath/sass/widget/_chinaFlag.scss');

const ChinaFlag = (props) => {
    return (
    <div className="chinaFlag" style={{
            WebkitTransform:`scale(${props.scale?props.scale:1})`,
            transform:`scale(${props.scale?props.scale:1})`
        }}>
        <div className="chinaFlag_d1">★</div>
        <div className="chinaFlag_d2">★</div>
        <div className="chinaFlag_d3">★</div>
        <div className="chinaFlag_d4">★</div>
        <div className="chinaFlag_d5">★</div>
    </div> 
    )
};

ChinaFlag.propTypes = {
  scale: React.PropTypes.number
};

export default ChinaFlag;
