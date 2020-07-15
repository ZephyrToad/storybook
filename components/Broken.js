import React from 'react';

const Broken = (props) => {
    const { data } = props;

    return data.map((_x, i) => (
        <div key={i}>
            na
        </div>
    ));
};

export default Broken;
