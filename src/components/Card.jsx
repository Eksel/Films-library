import React from 'react';
import { Link } from 'react-router-dom';
const MakeUrl = (poster_path) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`
    }
const Card = ({id,title,vote_average,poster_path,release_date}) => {
    function summary(a){
        return '/'+a
      }
    return (
        
        <div className='card'>
            <Link to={summary(id)}>
                <div className='image'>
                    
                    <img src={MakeUrl(poster_path)} alt="" />
                </div>
                <div className='content'>
                    <h2 className='title'>{title}</h2>
                    <h3 className='rate'>Rate:{vote_average}</h3>
                    <h2 className='date'>{release_date}</h2>
                </div>
            
            </Link>
        </div>
    );
}

export default Card;
