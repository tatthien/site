import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  redirects() {
    return [
      {
        source: '/notes/:slug',
        destination: '/posts/:slug',
        permanent: true,
      }
    ]
  }
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
