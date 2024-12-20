const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/index.BTJWOXXx.js","_astro/_commonjsHelpers.BosuxZz1.js","_astro/hoisted.DdSepiOG.js","_astro/hoisted.4nW8fbOx.js"])))=>i.map(i=>d[i]);
const x="modulepreload",P=function(e){return"/"+e},b={},R=function(t,r,i){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),s=n?.nonce||n?.getAttribute("nonce");a=Promise.allSettled(r.map(m=>{if(m=P(m),m in b)return;b[m]=!0;const h=m.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${p}`))return;const c=document.createElement("link");if(c.rel=h?"stylesheet":x,h||(c.as="script"),c.crossOrigin="",c.href=m,s&&c.setAttribute("nonce",s),document.head.appendChild(c),h)return new Promise((l,f)=>{c.addEventListener("load",l),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(n){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n}return a.then(n=>{for(const s of n||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},ee={name:"MissingMediaQueryDirective",title:"Missing value for `client:media` directive.",message:'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'},te={name:"NoMatchingRenderer",title:"No matching renderer found.",message:(e,t,r,i)=>`Unable to render \`${e}\`.

${i>0?`There ${r?"are":"is"} ${i} renderer${r?"s":""} configured in your \`astro.config.mjs\` file,
but ${r?"none were":"it was not"} able to server-side render \`${e}\`.`:`No valid renderer was found ${t?`for the \`.${t}\` file extension.`:"for this file extension."}`}`,hint:e=>`Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.`},re={name:"NoClientEntrypoint",title:"No client entrypoint specified in renderer.",message:(e,t,r)=>`\`${e}\` component has a \`client:${t}\` directive, but no client entrypoint was provided by \`${r}\`.`,hint:"See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."},ie={name:"NoClientOnlyHint",title:"Missing hint on client:only directive.",message:e=>`Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,hint:e=>`Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`},ne={name:"NoMatchingImport",title:"No import found for component.",message:e=>`Could not render \`${e}\`. No matching import has been found for \`${e}\`.`,hint:"Please make sure the component is properly imported."},se={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},ae={name:"ImageMissingAlt",title:'Image missing required "alt" property.',message:'Image missing "alt" property. "alt" text is required to describe important images on the page.',hint:'Use an empty string ("") for decorative images.'},oe={name:"InvalidImageService",title:"Error while loading image service.",message:"There was an error loading the configured image service. Please see the stack trace for more information."},v={name:"MissingImageDimension",title:"Missing image dimensions",message:(e,t)=>`Missing ${e==="both"?"width and height attributes":`${e} attribute`} for ${t}. When using remote images, both dimensions are required in order to avoid CLS.`,hint:"If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets). You can also use `inferSize={true}` for remote images to get the original dimensions."},ce={name:"FailedToFetchRemoteImageDimensions",title:"Failed to retrieve remote image dimensions",message:e=>`Failed to get the dimensions for ${e}.`,hint:"Verify your remote image URL is accurate, and that you are not using `inferSize` with a file located in your `public/` folder."},I={name:"UnsupportedImageFormat",title:"Unsupported image format",message:(e,t,r)=>`Received unsupported format \`${e}\` from \`${t}\`. Currently only ${r.join(", ")} are supported by our image services.`,hint:"Using an `img` tag directly instead of the `Image` component might be what you're looking for."},T={name:"UnsupportedImageConversion",title:"Unsupported image conversion",message:"Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported."},S={name:"ExpectedImage",title:"Expected src to be an image.",message:(e,t,r)=>`Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${e}\` (type: \`${t}\`).

Full serialized options received: \`${r}\`.`,hint:"This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."},me={name:"ExpectedImageOptions",title:"Expected image options.",message:e=>`Expected getImage() parameter to be an object. Received \`${e}\`.`},de={name:"ExpectedNotESMImage",title:"Expected image options, not an ESM-imported image.",message:"An ESM-imported image cannot be passed directly to `getImage()`. Instead, pass an object with the image in the `src` property.",hint:"Try changing `getImage(myImage)` to `getImage({ src: myImage })`"},O={name:"IncompatibleDescriptorOptions",title:"Cannot set both `densities` and `widths`",message:"Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",hint:"Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors."},le={name:"NoImageMetadata",title:"Could not process image metadata.",message:e=>`Could not process image metadata${e?` for \`${e}\``:""}.`,hint:"This is often caused by a corrupted or malformed image. Re-exporting the image from your image editor may fix this issue."},$={name:"LocalImageUsedWrongly",title:"Local images must be imported.",message:e=>`\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${e}\`.`,hint:"If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections). See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property."},he={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:e=>`\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vite.dev/guide/features.html#glob-import"},ge={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:e=>`\`Astro.glob(${e})\` did not return any matching files.`,hint:"Check the pattern for typos."},_={name:"MissingSharp",title:"Could not find Sharp.",message:"Could not find Sharp. Please install Sharp (`sharp`) manually into your project or migrate to another image service.",hint:"See Sharp's installation instructions for more information: https://sharp.pixelplumbing.com/install. If you are not relying on `astro:assets` to optimize, transform, or process any images, you can configure a passthrough image service instead of installing Sharp. See https://docs.astro.build/en/reference/errors/missing-sharp for more information.\n\nSee https://docs.astro.build/en/guides/images/#default-image-service for more information on how to migrate to another image service."};function C(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function F(e,t){if(!t||t.line===void 0||t.column===void 0)return"";const r=C(e).split(`
`).map(n=>n.replace(/\t/g,"  ")),i=[];for(let n=-2;n<=2;n++)r[t.line+n]&&i.push(t.line+n);let a=0;for(const n of i){let s=`> ${n}`;s.length>a&&(a=s.length)}let o="";for(const n of i){const s=n===t.line-1;o+=s?"> ":"  ",o+=`${n+1} | ${r[n]}
`,s&&(o+=`${Array.from({length:a}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return o}class g extends Error{loc;title;hint;frame;type="AstroError";constructor(t,r){const{name:i,title:a,message:o,stack:n,location:s,hint:m,frame:h}=t;super(o,r),this.title=a,this.name=i,o&&(this.message=o),this.stack=n||this.stack,this.loc=s,this.hint=m,this.frame=h}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,r){this.frame=F(t,r)}static is(t){return t.type==="AstroError"}}const M=["jpeg","jpg","png","tiff","webp","gif","svg","avif"],E="webp",j=["src","width","height","format","quality"];function q(e){return e.endsWith("/")?e.slice(0,e.length-1):e}function D(e){return e.startsWith("/")?e.substring(1):e}function k(e){return e.replace(/^\/|\/$/g,"")}function H(e){return typeof e=="string"||e instanceof String}function z(...e){return e.filter(H).map((t,r)=>r===0?q(t):r===e.length-1?D(t):k(t)).join("/")}function U(e){return/^(?:http|ftp|https|ws):?\/\//.test(e)||e.startsWith("data:")}function y(e){return typeof e=="object"}function fe(e){return typeof e=="string"}async function ue(e){return typeof e=="object"&&"then"in e?(await e).default??await e:e}function G(e,t){return Q(e,t.protocol)&&L(e,t.hostname,!0)&&V(e,t.port)&&B(e,t.pathname)}function V(e,t){return!t||t===e.port}function Q(e,t){return!t||t===e.protocol.slice(0,-1)}function L(e,t,r){if(t){if(!r||!t.startsWith("*"))return t===e.hostname;if(t.startsWith("**.")){const i=t.slice(2);return i!==e.hostname&&e.hostname.endsWith(i)}else if(t.startsWith("*.")){const i=t.slice(1);return e.hostname.replace(i,"").split(".").filter(Boolean).length===1}}else return!0;return!1}function B(e,t,r){if(t)if(t.endsWith("*")){if(t.endsWith("/**")){const i=t.slice(0,-2);return i!==e.pathname&&e.pathname.startsWith(i)}else if(t.endsWith("/*")){const i=t.slice(0,-1);return e.pathname.replace(i,"").split("/").filter(Boolean).length===1}}else return t===e.pathname;else return!0;return!1}function J(e,{domains:t=[],remotePatterns:r=[]}){if(!U(e))return!1;const i=new URL(e);return t.some(a=>L(i,a))||r.some(a=>G(i,a))}function pe(e){return e?"transform"in e:!1}function Y(e){let t=parseInt(e);return Number.isNaN(t)?e:t}const u={propertiesToHash:j,validateOptions(e){if(!e.src||typeof e.src!="string"&&typeof e.src!="object")throw new g({...S,message:S.message(JSON.stringify(e.src),typeof e.src,JSON.stringify(e,(t,r)=>r===void 0?null:r))});if(y(e.src)){if(!M.includes(e.src.format))throw new g({...I,message:I.message(e.src.format,e.src.src,M)});if(e.widths&&e.densities)throw new g(O);if(e.src.format==="svg"&&(e.format="svg"),e.src.format==="svg"&&e.format!=="svg"||e.src.format!=="svg"&&e.format==="svg")throw new g(T)}else{if(e.src.startsWith("/@fs/")||!U(e.src)&&!e.src.startsWith("/"))throw new g({...$,message:$.message(e.src)});let t;if(!e.width&&!e.height?t="both":!e.width&&e.height?t="width":e.width&&!e.height&&(t="height"),t)throw new g({...v,message:v.message(t,e.src)})}return e.format||(e.format=E),e.width&&(e.width=Math.round(e.width)),e.height&&(e.height=Math.round(e.height)),e},getHTMLAttributes(e){const{targetWidth:t,targetHeight:r}=A(e),{src:i,width:a,height:o,format:n,quality:s,densities:m,widths:h,formats:p,...c}=e;return{...c,width:t,height:r,loading:c.loading??"lazy",decoding:c.decoding??"async"}},getSrcSet(e){const t=[],{targetWidth:r}=A(e),{widths:i,densities:a}=e,o=e.format??E;let n=e.width,s=1/0;y(e.src)&&(n=e.src.width,s=n);const{width:m,height:h,...p}=e,c=[];if(a){const l=a.map(d=>typeof d=="number"?d:parseFloat(d)),f=l.sort().map(d=>Math.round(r*d));c.push(...f.map((d,N)=>({maxTargetWidth:Math.min(d,s),descriptor:`${l[N]}x`})))}else i&&c.push(...i.map(l=>({maxTargetWidth:Math.min(l,s),descriptor:`${l}w`})));for(const{maxTargetWidth:l,descriptor:f}of c){const d={...p};l!==n?d.width=l:e.width&&e.height&&(d.width=e.width,d.height=e.height),t.push({transform:d,descriptor:f,attributes:{type:`image/${o}`}})}return t},getURL(e,t){const r=new URLSearchParams;if(y(e.src))r.append("href",e.src.src);else if(J(e.src,t))r.append("href",e.src);else return e.src;return Object.entries({w:"width",h:"height",q:"quality",f:"format"}).forEach(([o,n])=>{e[n]&&r.append(o,e[n].toString())}),`${z("/","/_image")}?${r}`},parseURL(e){const t=e.searchParams;return t.has("href")?{src:t.get("href"),width:t.has("w")?parseInt(t.get("w")):void 0,height:t.has("h")?parseInt(t.get("h")):void 0,format:t.get("f"),quality:t.get("q")}:void 0}};function A(e){let t=e.width,r=e.height;if(y(e.src)){const i=e.src.width/e.src.height;r&&!t?t=Math.round(r*i):t&&!r?r=Math.round(t/i):!t&&!r&&(t=e.src.width,r=e.src.height)}return{targetWidth:t,targetHeight:r}}let w;const W={low:25,mid:50,high:80,max:100};async function K(){let e;try{e=(await R(async()=>{const{default:t}=await import("../index.BTJWOXXx.js").then(r=>r.i);return{default:t}},__vite__mapDeps([0,1,2,3]))).default}catch{throw new g(_)}return e.cache(!1),e}const X={validateOptions:u.validateOptions,getURL:u.getURL,parseURL:u.parseURL,getHTMLAttributes:u.getHTMLAttributes,getSrcSet:u.getSrcSet,async transform(e,t,r){w||(w=await K());const i=t;if(i.format==="svg")return{data:e,format:"svg"};const a=w(e,{failOnError:!1,pages:-1,limitInputPixels:r.service.config.limitInputPixels});if(a.rotate(),i.height&&!i.width?a.resize({height:Math.round(i.height)}):i.width&&a.resize({width:Math.round(i.width)}),i.format){let s;if(i.quality){const m=Y(i.quality);typeof m=="number"?s=m:s=i.quality in W?W[i.quality]:void 0}a.toFormat(i.format,{quality:s})}const{data:o,info:n}=await a.toBuffer({resolveWithObject:!0});return{data:o,format:n.format}}};var Z=X;const ye=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{g as A,j as D,me as E,ce as F,se as I,ee as M,ne as N,R as _,he as a,ge as b,te as c,ie as d,re as e,le as f,S as g,de as h,fe as i,y as j,pe as k,oe as l,ae as m,ue as r,ye as s};