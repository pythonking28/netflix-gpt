import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterImagePath}) => {
  return (
    <div>
        <img className='w-48 ' src={IMG_CDN + posterImagePath} />
    </div>
  )
}

export default MovieCard