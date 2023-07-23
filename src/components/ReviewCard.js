import React, { useState, useEffect } from 'react'
import './ReviewCard.css'
import axios from "axios";
import { Link } from 'react-router-dom';


const ReviewCard = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        const apiKey = '3AnqdqcAh9BPx7gOJCbX7qsohsT8hRjO';
        const apiUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${apiKey}`;
    
        async function fetchMovieReviews() {
            try {
                const response = await axios.get(apiUrl)
                const reviews = response.data.results;
                setReviews(reviews);
            } catch (error) {
                console.log('Error fetching reviews', error);
            }
        }
    
        fetchMovieReviews();
    }, [])

   
    
    return (
       <>
        <h1>Welcome</h1>
         
        <div className='recipe-list'>
            {reviews.map((reviews, index) => (
                <div key={reviews.index} className='card'>
                <h3>{reviews.display_title}</h3>
                <p>{reviews.critics_pick} to make</p>
                <div>{reviews.byline}</div>
                <div>{reviews.headline}</div>
                <div>{reviews.summary_short.substring(0, 100)}...</div>
                <Link to={`/details/${reviews.id}`}>Read More</Link>
                </div>
            ))}
        </div>
       </>
      )
}

export default ReviewCard