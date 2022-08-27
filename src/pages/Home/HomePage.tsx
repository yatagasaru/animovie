import {Outlet} from 'react-router-dom'

import Layout from '../../components/Layout'

const HomePage = () => {
  return (
    <Layout minHeight="101vh">
      <Outlet />
    </Layout>
  )
}

export default HomePage
