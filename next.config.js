const withPlugins = require('next-compose-plugins');
// const withImages = require('next-images');
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const isProduction =
  process.env.NODE_ENV === 'production' && process.env.REACT_APP_MODE === 'production';

//Next Config
const nextConfig = {
  strictMode: true,
  future: {
    webpack5: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  crossOrigin: 'anonymous',
  trailingSlash: true,
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    server: !isProduction ? 'http://localhost:1338' : 'https://lubimka-fm.redw.me',
    isProd: isProduction,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./src/'));

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

//Image next config
const imagesPluginSetting = {
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['storage.googleapis.com', 'localhost', 'image-fetcher.radioheart.ru', 'i.scdn.co'],
  },
};

//SASS
const sassPluginSetting = {
  sassOptions: {
    includePaths: ['./src'],
    //Добавляем эту строку в каждый файл scss для того что бы сделать глобальными переменные или миксины
    prependData: `@import "src/scss/global.scss";`,
  },
};

//обьеденяем плагины и конфигурацию
module.exports = withPlugins(
  [withBundleAnalyzer, imagesPluginSetting, sassPluginSetting],
  nextConfig
);
