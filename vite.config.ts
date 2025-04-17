import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      !isProduction && componentTagger(), // Only include in non-production
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // Production-specific build settings
      outDir: "dist", // Output directory
      sourcemap: isProduction ? false : true, // Disable sourcemaps in production
      minify: "esbuild", // Default, but explicit for clarity
      target: "esnext", // Modern browsers for smaller bundles
      chunkSizeWarningLimit: 500, // Warn if chunks exceed 500kB
      rollupOptions: {
        output: {
          manualChunks: {
            // Example: Split vendor libraries into a separate chunk
            vendor: ["react", "react-dom"],
          },
        },
      },
    },
    base: isProduction ? "/my-app/" : "/", // Adjust base path for production (e.g., for GitHub Pages)
    envPrefix: ["VITE_", "APP_"], // Allow custom prefixes for env variables
  };
});