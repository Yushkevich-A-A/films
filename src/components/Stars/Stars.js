import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star/Star';
import shortid from 'shortid';

import './Stars.css';

function Stars(props) {
    const { count } = props || 0;

    console.log(parseInt(count));

    if (!parseInt(count) || count < 1 || count > 5) {
        return(null);
    }

    const arrStars = new Array(parseInt(count)).fill('').map( () => ({ id: shortid.generate()}) );
    
    return (
        <ul className='card-body-stars'>
            {
            arrStars.map( item => <Star key={item.id}/> )
            }
        </ul>
    )
}

Stars.propTypes = {
    count: PropTypes.number.isRequired,
};

export default Stars;

