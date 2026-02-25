import { o as decodeKey } from './chunks/astro/server_0T8_lVYa.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C_FsNQ5y.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Projects/pandy-goma/radical-profile/","cacheDir":"file:///D:/Projects/pandy-goma/radical-profile/node_modules/.astro/","outDir":"file:///D:/Projects/pandy-goma/radical-profile/dist/","srcDir":"file:///D:/Projects/pandy-goma/radical-profile/src/","publicDir":"file:///D:/Projects/pandy-goma/radical-profile/public/","buildClientDir":"file:///D:/Projects/pandy-goma/radical-profile/dist/client/","buildServerDir":"file:///D:/Projects/pandy-goma/radical-profile/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.18.0_@vercel+functi_3c4c07fd7887e0fa4c57282ea371704d/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--bg: #fafafa;--bg-soft: #f4f1f9;--panel: rgba(255, 255, 255, .82);--text: #27272a;--muted: #52525b;--border: rgba(161, 161, 170, .25);--violet: #7c3aed;--pink: #ec4899;--fuchsia: #d946ef;--zinc: #3f3f46;--white: #ffffff;--shadow: 0 24px 40px rgba(124, 58, 237, .15)}:root.dark{--bg: #111116;--bg-soft: #191322;--panel: rgba(24, 24, 30, .82);--text: #f5f5f5;--muted: #d4d4d8;--border: rgba(228, 228, 231, .16);--violet: #a78bfa;--pink: #f472b6;--fuchsia: #e879f9;--zinc: #f4f4f5;--white: #ffffff;--shadow: 0 30px 56px rgba(11, 8, 20, .65)}*{box-sizing:border-box}html,body{margin:0;padding:0;font-family:Sora,Segoe UI,sans-serif;color:var(--text);background:radial-gradient(circle at 12% 6%,rgba(217,70,239,.24),transparent 34%),radial-gradient(circle at 89% 20%,rgba(124,58,237,.22),transparent 36%),linear-gradient(180deg,var(--bg-soft) 0%,var(--bg) 100%);min-height:100%}a{color:inherit;text-decoration:none}.container{width:min(1120px,92vw);margin:0 auto}.header{position:sticky;top:0;z-index:20;backdrop-filter:blur(12px);background:color-mix(in srgb,var(--bg) 75%,transparent);border-bottom:1px solid var(--border)}.header-inner{display:flex;gap:1rem;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:1rem 0}.brand{font-weight:700;letter-spacing:.02em}.controls{display:flex;gap:.6rem;align-items:center}.pill{border:1px solid var(--border);background:var(--panel);border-radius:999px;padding:.4rem .8rem;font-size:.85rem;color:var(--muted)}.pill.is-active{border-color:color-mix(in srgb,var(--fuchsia) 42%,var(--border));color:var(--text);font-weight:600}nav ul{list-style:none;margin:0;padding:0;display:flex;gap:1rem;flex-wrap:wrap}nav a{font-size:.95rem;color:var(--muted)}nav a:hover{color:var(--fuchsia)}.hero{padding:4rem 0 3rem}.hero-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:2rem;align-items:center}.hero-copy h1{margin:0 0 .7rem;font-size:clamp(2rem,5vw,3.8rem);line-height:1.03}.hero-copy p{margin:0 0 1rem;color:var(--muted);line-height:1.65}.hero-actions{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.4rem}.button{display:inline-block;padding:.74rem 1.12rem;border-radius:.8rem;border:1px solid transparent;transition:transform .16s ease}.button:hover{transform:translateY(-2px)}.button-primary{background:linear-gradient(90deg,var(--violet),var(--fuchsia));color:var(--white);box-shadow:var(--shadow)}.button-secondary{border-color:var(--border);background:var(--panel)}.portrait{border-radius:1.2rem;overflow:hidden;background:var(--panel);border:1px solid var(--border);box-shadow:var(--shadow)}.portrait img{width:100%;height:100%;min-height:360px;object-fit:cover;display:block}.section{padding:2.5rem 0}.section-head h2{margin:0;font-size:clamp(1.35rem,3vw,2.1rem)}.section-head p{margin-top:.5rem;color:var(--muted)}.grid{display:grid;gap:1rem;margin-top:1.4rem}.grid-three{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-two{grid-template-columns:repeat(2,minmax(0,1fr))}.card{border:1px solid var(--border);border-radius:1rem;overflow:hidden;background:var(--panel)}.card-body{padding:1rem}.card h3{margin:0 0 .5rem}.card p{margin:.35rem 0;color:var(--muted)}.card img{width:100%;height:180px;object-fit:cover;display:block}.meta{font-size:.86rem}.video{aspect-ratio:16 / 9;width:100%;border:none;display:block}.contact{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;margin-top:1rem}.contact-item{padding:1rem;border-radius:.9rem;background:var(--panel);border:1px solid var(--border)}.contact-item strong{display:block;margin-bottom:.35rem}footer{text-align:center;color:var(--muted);padding:2.2rem 0 2.8rem}@media(max-width:980px){.hero-grid,.grid-three,.grid-two,.contact{grid-template-columns:1fr}.hero{padding-top:2.2rem}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Projects/pandy-goma/radical-profile/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.18.0_@vercel+functi_3c4c07fd7887e0fa4c57282ea371704d/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DLsiSUHl.mjs","D:/Projects/pandy-goma/radical-profile/node_modules/.pnpm/astro@5.18.0_@vercel+functi_3c4c07fd7887e0fa4c57282ea371704d/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BXnn8pl_.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.ico","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"wRbC5G8Ati5OWCK+So6fhzbJDBuh75VahGlQCKzWMLI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
