// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   base: "/noon-academic-support/",
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.DEPLOY_ENV === "GH_PAGES" ? "/noon-academic-support/" : "/",
  plugins: [react()],
});
