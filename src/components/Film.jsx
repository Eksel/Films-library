import React from 'react';
import { Link } from 'react-router-dom';

const Film = (props) => {
    const componentDidMount = () => {
        window.scrollTo(0, 0);
    }
    const MakeBackgroundUrl = (url) => {
        return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${url}`
    }
    const MakeUrl = (poster_path) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`
    }
    const Background={
        backgroundImage: `url(${MakeBackgroundUrl(props.values.backdrop_path)})`
    }
    return (

        <div className="film" onLoad={componentDidMount}>
            <header className='page-header' style={Background}>
                <div className="back-btn">
                    <Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </Link>
                    
                </div>
                
                <h1 className='title'>{props.values.title}</h1>
            </header>
            <div className="content">
                <div className="left">
                    <img src={MakeUrl(props.values.poster_path)} alt="" />
                </div>
                <div className="right">
                    <div className="rate">
                        <h3>Rate:  {props.values.vote_average}</h3>
                    </div>
                    <div className='overview'>
                        <p>
                            {props.values.overview}
                        </p>
                    </div>
                    <div className="date">
                        <p>
                            RELEASE DATE: {props.values.release_date}
                        </p>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}

export default Film;
