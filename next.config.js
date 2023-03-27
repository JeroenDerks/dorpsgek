/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true
  },
  // // async rewrites() {
  async redirects() {
    return [
      {
        source: '/api/:path*',
        has: [
          {
            type: 'host',
            value: 'ulrum.localhost:3002'
          }
        ],
        destination: 'http://localhost:3002/api/:path*',
        permanent: false
      }
    ];
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'csv-loader',
      options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true
      }
    });
    return config;
  }
};

module.exports = nextConfig;
