
import React from 'react';
import Moment from 'react-moment';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);

function AlertContents(props) {
    const { card } = props;
    const {title, issuedAt, source, direction, createdAt} = card;

    return(
        <div>
            <h2 className={cx('truncate-text')}>{title}</h2>
            <p>
                Created at: <Moment format="DD/MM/YYYY">{createdAt}</Moment> by {source}
            </p>

            <p>{direction}</p>

            <p>
                Probable duration: <Moment format="DD/MM/YYYY">{issuedAt}</Moment>
            </p>
        </div>
    );
}

export default AlertContents;