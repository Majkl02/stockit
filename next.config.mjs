/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // FIX na CORS problem pri volani back-endu
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8888/v1/api/:path*'
      }
    ]
  }
}

export default nextConfig
