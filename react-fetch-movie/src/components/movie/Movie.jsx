import React from 'react';
import api from '../../utilities/Api_key'

const Movie = (props) => {
    return (
        <a href={`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${props.item}`} className='dropList'>
            <p className='dropText'>{props.title}</p>
            <img className="poster" src={`https://image.tmdb.org/t/p/w300${props.poster}`}  alt="poster" />
            <p className='dropText'>{props.description}</p>
            <p className='rating'> Rating iMdb {props.rating} </p>
            <p className='release'> Release Date {props.year} </p>
        </a>
    );
}

export default Movie;

