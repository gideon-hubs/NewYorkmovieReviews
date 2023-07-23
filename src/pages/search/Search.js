import React from 'react'
import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/ReviewCard'
import './Search.css'

function Search() {
     const queryString = useLocation().search
     const queryParams = new URLSearchParams(queryString)
     const query = queryParams.get('q')

     const url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=3AnqdqcAh9BPx7gOJCbX7qsohsT8hRjO?q=' + query
     

     
  return (
    <div>
    {/*<h2 className='page-title'>Recipes including "{query}"</h2>*/}
    {url && <RecipeList recipes={url} />}
    </div>
  )
}

export default Search