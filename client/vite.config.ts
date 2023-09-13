import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vitePluginAutoGenerationWebp from "./plugins/vite-plugin-auto-generation-webp";

const { VITE_APP_SERVER_URL, VITE_APP_CLIENT_PORT } = process.env;
const PORT = Number(VITE_APP_CLIENT_PORT);

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      outDir: path.resolve(__dirname, "..", "server", "public"),
    },
    server: {
      port: PORT,
      host: "localhost",
      proxy: {
        "/uploads": {
          target: VITE_APP_SERVER_URL,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~": path.resolve(__dirname, "node_modules"),
        "@images": path.resolve(__dirname, "src/assets/images"),
      },
      extensions: [".js", ".ts", ".json", ".scss", ".css"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/styles/config.scss";
          @import "@/styles/mixins.scss";
        `,
        },
      },
    },
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
    plugins: [
      vue(),
      vitePluginAutoGenerationWebp({
        src: [
          "./src/assets/images/**/*.{png,jpg,jpeg}",
          "./public/images/**/*.{png,jpg,jpeg}",
        ],
      }),
    ],
  };
});
