import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Details.css'

const Details = () => {
    const [reviews, setReviews] = useState([])
    const { id } = useParams()
    
    useEffect(()=>{
        const apiKey = '3AnqdqcAh9BPx7gOJCbX7qsohsT8hRjO';
        const apiUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${apiKey}`+ id;
    
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
    }, [id])

    return (
        <div className='recipe'>
            {reviews && (
                <>
                <h2 className='page-title'>{reviews.display_title}</h2>
                <p>Takes {reviews.headline} to cook.</p>
                <p className='method'>{reviews.summary_short}</p>
                </>
            )}
        </div>
      )
}

export default Details