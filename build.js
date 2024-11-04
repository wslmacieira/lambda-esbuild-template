(async () => {
  const fs = require('fs')
  const path = require('path')
  const esbuild = require('esbuild')
  const watch = process.argv.includes("--watch")
  const functionsDir = "src"
  const outDir = "dist"
  // const entryPoints = fs
  //   .readdirSync(path.join(__dirname, functionsDir))
  //   .map((entry) => `${functionsDir}/${entry}/**.ts`)
  const ctx = await esbuild[watch ? "context" : "build"]({
    logLevel: "info",
    entryPoints: [`${functionsDir}/main.ts`, `${functionsDir}/shared/worker.ts`],
    bundle: true,
    outdir: path.join(__dirname, outDir),
    outbase: functionsDir,
    platform: 'node',
    sourcemap: 'inline',
  })
  watch && await ctx.watch();
})()

