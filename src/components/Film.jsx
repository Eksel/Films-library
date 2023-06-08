import React from 'react';

const Film = (props) => {
    const MakeUrl = (poster_path) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`
    }
    return (
        <div className='page-header'>
            <div className="back-btn">

            </div>
            <h1>{props.values.title}</h1>
            <img src={MakeUrl(props.values.poster_path)} alt="" />
            <div className="rate">

            </div>
            <div className='overview'>

            </div>

        </div>
    );
}

export default Film;
