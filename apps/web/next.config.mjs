/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@lembur-apps/shared"],
  // Optional: jika perlu konfigurasi lain
  experimental: {
    // Konfigurasi experimental jika diperlukan
  }
};

export default nextConfig;