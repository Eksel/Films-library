import React from 'react';
const MakeUrl = (poster_path) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`
    }
const Card = ({title,vote_average,poster_path,release_date}) => {
    
    return (
        <div className='card'>
            <div className='image'>
                <img src={MakeUrl(poster_path)} alt="" />
            </div>
            <div className='content'>
                <h2 className='title'>{title}</h2>
                <h3 className='rate'>Rate:{vote_average}</h3>
                <h2 className='date'>{release_date}</h2>
            </div>
        </div>
    );
}

export default Card;