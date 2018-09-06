
import React from 'react';

function AlertContents(props) {
    const { card } = props;
    const {title, issuedAt, source, direction, createdAt} = card;

    return(
        <div>
            <h2>{title}</h2>
            <p>Created at: {createdAt} by {source}</p>
            <p>{direction}</p>
            <p>Probable duration: {issuedAt}</p>
        </div>
    );
}

export default AlertContents;