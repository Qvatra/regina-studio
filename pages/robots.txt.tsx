import { GetServerSideProps } from 'next'

const Robots = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robots = `User-agent: *
Allow: /
Sitemap: ${process.env.NEXT_PUBLIC_WEBSITE_URL}/sitemap.xml`

  res.setHeader('Content-Type', 'text/plain')
  res.write(robots)
  res.end()

  return {
    props: {},
  }
}

export default Robots 