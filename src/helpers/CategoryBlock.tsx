import React from 'react'
import { Link } from 'react-router-dom'
import { Article } from '../types'


const CategoryBlock: React.FC<Article> = ({title, url, urlToImage}) => {
  return (
    <div className='card w-72 h-40 lg:h-60 mb-4 lg:w-96'>
      <Link to={url}
       relative='path' className='block w-full h-full'>
        <div className="banner w-full h-4/5">
          <img src={urlToImage || ""} alt="couldn't load image" className='object-cover h-full w-full'/>
        </div>

        <div className="title text-xs font-black lg:text-sm xl:text-base">{title}</div>
      </Link>
    </div>
  )
}

export default CategoryBlock