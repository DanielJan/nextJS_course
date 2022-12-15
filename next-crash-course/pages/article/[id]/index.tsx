import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'

 const Article = ({ article }: any) => {
  // const router = useRouter()
  // const { id } = router.query
  return (
    < >
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}


export const getStaticProps = async (context: any) => {
  console.log('context.params', context.params)
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    )

    const article = await res.json()

    return {
      props: {
        article
      }
    }
}

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
    )
    const articles = await res.json()

    const ids = articles.map(e => e.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    console.log('paths', paths)
    return {
      paths,
      fallback: false
    }
}


export default Article