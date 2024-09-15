/** @type {import('next').NextConfig} */


const nextConfig = {
  output: "export",
  basePath: "/blog", // Il nome del tuo repository GitHub
  assetPrefix: "", // Imposta questo prefisso per caricare correttamente gli asset
  images: {
    path: "", // Percorso corretto per le immagini in base al repository
    unoptimized: true, // Disabilita l'ottimizzazione per le esportazioni statiche
  },
};

export default nextConfig;
