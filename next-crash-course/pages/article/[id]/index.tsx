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


export const getServerSideProps = async (context: any) => {
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
export default Article