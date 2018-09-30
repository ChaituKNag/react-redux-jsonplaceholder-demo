import React from 'react';

import './index.css';

export default props => (
    props.list && props.list.map(listItem => <h3>{listItem.name}</h3>)
)