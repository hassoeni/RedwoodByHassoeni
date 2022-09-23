// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell/ArticlesCell'
import MyPostsCell from 'src/components/MyPostsCell/MyPostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticlesCell/>
      <MyPostsCell/>
    </>
  )
}

export default HomePage
