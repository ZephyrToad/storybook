import React from 'react';

const Icon = (props) => (
    <img style={{ width: 100, ...props.style }} src={require(`../images/${props.src}.${props.type}`)} alt='src' />
);

Icon.defaultProps = {
    src: 'react',
    type: 'svg'
};

export default Icon;