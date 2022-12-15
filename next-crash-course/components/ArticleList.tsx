 


import React from 'react'
import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

 const ArticleList = ({ articles }: any) => {
  return (
    
    <div className={articleStyles.grid}>
      {
      articles.map((article:any) => (
       <ArticleItem key={article.id} article={article}/>
      ))}
    </div>
  )
}

export default ArticleList