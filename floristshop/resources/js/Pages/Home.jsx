import Layout from '../Layouts/Layout'
import { Head } from '@inertiajs/react'

export default function Home() {
  return (
    <Layout>
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>Hello User, welcome to your first Inertia app!</p>
    </Layout>
  )
}