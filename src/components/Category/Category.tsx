import React from 'react'
import { Article, ResponseProps } from '../../types'
import CategoryBlock from '../../helpers/CategoryBlock'

const Category: React.FC<ResponseProps> = ({articles}) => {
  return (
    <>
      {articles.map((article, index) => (
        <CategoryBlock key={index} title={article.title} url={article.url} urlToImage={article.urlToImage || ""}  />
      ))}
    </>
  )
}

export default Category