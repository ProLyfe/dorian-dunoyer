/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';
import withVideos from 'next-videos';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default withVideos({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "main.scss";`,
  },
  webpack: (config, { isServer }) => {
    // Ajouter une règle supplémentaire pour les vidéos si nécessaire
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|ogv|avi)$/, // Extensions des fichiers vidéo
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000, // Convertir les fichiers de moins de 10kB en base64
          fallback: 'file-loader', // Utiliser file-loader pour les fichiers plus gros
          // publicPath: '/_next/static/videos/',
          // outputPath: 'static/videos/',
          name: '[name].[hash].[ext]', // Nommage des fichiers avec hash
        },
      },
    });

    return config;
  },
});
