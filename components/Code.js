import React from 'react';

const styles = {
    backdrop: {
        backgroundColor: 'lightgrey',
        border: '4px solid black',
        borderRadius: '4px',
        marginBottom: '8px',
        width: '75%'
    },
    code: {
        fontSize: '16px',
        fontStyle: 'italic',
        margin: ' 4px 8px'
    }
};

const Code = (props) => {
    const { lines } = props;

    return (
        <div style={styles.backdrop}> {
            lines.map((line, i) => (
                <code key={i} style={styles.code}> {
                    typeof line !== 'string'
                        ? <>
                            <span style={{ marginLeft: `${line[1] * 16}px` }}>
                                {line[0]}
                            </span>
                            <br />
                        </> : <>{line} <br/></>
                } </code>
            ))
        } </div>
    )
};

Code.defaultProps = {
    lines: []
};

export default Code;