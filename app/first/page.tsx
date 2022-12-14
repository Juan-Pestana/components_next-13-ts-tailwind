//import {useState} from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Posts from './components/Posts'
import { users, posts, comments } from './data.js'

export default async function FirstPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col justify-center sm:w-3/4  lg:w-1/2 xl:w-2/6 mx-auto py-3">
        {/* @ts-expect-error Server Component */}
        <Posts />
      </section>
    </>
  )
}
