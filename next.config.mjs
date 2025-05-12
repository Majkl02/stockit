/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // FIX na CORS problem pri volani back-endu
    return [
      {
        source: '/api/v1/:path*',
        destination: 'http://localhost:8888/api/v1/:path*'
      }
    ]
  }
}

export default nextConfig
