import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {

    const location = useLocation();
    const navigate = useNavigate();
    const { year, title, summary, poster, genres } = location.state || {};

    console.log(location.state);

    useEffect(() => {
        if(!location.state) {
            navigate('/');
        }
    }, [location, navigate]);

    
    return <span>{title}</span>;
}

export default Detail;
