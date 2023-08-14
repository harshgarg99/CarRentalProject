/** @type {import('next').NextConfig} */
const nextConfig = {
    Images: {
        domains: ['cdn.imagin.studio']
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
