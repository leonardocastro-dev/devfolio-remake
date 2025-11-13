import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/devfolio',
  assetPrefix: '/devfolio/',
  trailingSlash: true,
  output: 'standalone',
}

export default nextConfig
