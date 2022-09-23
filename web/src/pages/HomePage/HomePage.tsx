// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import MyPostsCell from 'src/components/MyPostsCell/MyPostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <MyPostsCell/>
    </>
  )
}

export default HomePage
