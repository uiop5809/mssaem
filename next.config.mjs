const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
})

export default nextConfig
