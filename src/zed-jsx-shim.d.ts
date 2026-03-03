// Fallback shim for editors that parse `.astro` as plain TSX (e.g. Zed fallback TS server).
// Astro's language server should provide richer types; this only prevents ts(7026).
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
