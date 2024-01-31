import React from 'react'
import { Article, ResponseProps } from '../../types'
import CategoryBlock from '../../helpers/CategoryBlock'

const Category: React.FC<ResponseProps> = ({items}) => {
  return (
    <>
      {items.map((article, index) => (
        <CategoryBlock key={index} title={article.title} newsUrl={article.newsUrl} images={article.images || ""}  />
      ))}
    </>
  )
}

export default Category