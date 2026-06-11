/** @type {import('next').NextConfig} */

// Standalone coinbypass site — static export for Cloudflare Pages.
// No origin server: `next build` emits a fully static `out/` directory that
// Cloudflare serves from the edge (unlimited bandwidth).
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true, // emit `/coin-payment/index.html` so static hosting resolves clean URLs
  images: {
    // The Next image optimizer needs a server; static export has none.
    unoptimized: true,
  },
};

module.exports = nextConfig;
