const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
// const withImages = require('next-images');
const path = require('path');

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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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
    // disableStaticImages: true,
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      'lubimka-fm.redw.me',
      'localhost',
      'image-fetcher.radioheart.ru',
      'lubimka-media.s3.eu-central-1.amazonaws.com',
    ],
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

//Image Optimizer
const imagesOptimizePluginSettings = [
  withOptimizedImages,
  {
    inlineImageLimit: 1024, // если размер картинки будет больше чем это значение тогда будет вставлятся ссылка, если меньше то бинарник
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'ico', 'gif', 'jpg'],
    removeOriginalExtension: true,
    optimizeImages: false,
    optimizeImagesInDev: false,
    svgo: {
      plugins: [{ removeComments: true }],
    },
    mozjpeg: {
      quality: 70,
    },
    optipng: {
      optimizationLevel: 5,
    },
    pngquant: false,
    webp: {
      preset: 'default',
      quality: 70,
    },
  },
];

//обьеденяем плагины и конфигурацию
module.exports = withPlugins([imagesPluginSetting, sassPluginSetting], nextConfig);
