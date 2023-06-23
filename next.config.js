const BASE_URL="https://books-api.nomadcoders.workers.dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source:"/list",
        destination:"/hi",
        permanent:false
      }
    ];
  },
  async rewrites(){
    return [
      {
        source:"/api/all-books",
        destination:`${BASE_URL}/lists`,
      },
    ]
  }
}

module.exports = nextConfig
