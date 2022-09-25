// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import MyPostsCell from 'src/components/MyPostsCell/MyPostsCell'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <MyPostsCell />
      <ArticlesCell />
    </>
  )
}

export default HomePage
