/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Gunslito Registry',
    description: 'Gunslito Registry for KASM Workspaces.',
    icon: 'https://github.com/Gunslito/kasm-registry/1.0/icon.png',
    listUrl: 'https://github.com/Gunslito/kasm-registry/',
    contactUrl: 'https://github.com/Gunslito/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
