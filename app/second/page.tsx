import Head from 'next/head'
import PocketBase from 'pocketbase'
//import { json } from 'stream/consumers'

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs'

const getPosts = async () => {
  const pb = new PocketBase('http://127.0.0.1:8090')
  const records = await pb
    .collection('posts')
    .getFullList(200, { expand: 'owner, comments, comments.user' })
  return records as any[]
}

export default async function SecondPage() {
  const result = await getPosts()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </>
  )
}