import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte'
import replace from "@rollup/plugin-replace";

import styles from 'rollup-plugin-styles';
// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isUI5 = mode === "UI5";
  return defineConfig({
    plugins: [
      svelte(),
			splitVendorChunkPlugin(),
      replace({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) }),
    ],
    build: isUI5
      ? {
          outDir: "distUI5",
          target: "esnext",
          lib: {
            entry: "src/UI5.main.ts",
            name: "sveltetodo",
            fileName: "sveltetodo" ,
            formats: ["umd"]           
          },
					
        }
      : undefined ,
  });
}
