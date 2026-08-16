import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { N as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "../_slug-BV0iQDsw.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CDoYzxur.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** A full-screen WebGL fluid trail that follows the pointer. */
function SplashCursor({ SIM_RESOLUTION = 128, DYE_RESOLUTION = 1440, CAPTURE_RESOLUTION: _CAPTURE_RESOLUTION = 512, DENSITY_DISSIPATION = 3.5, VELOCITY_DISSIPATION = 2, PRESSURE = .1, PRESSURE_ITERATIONS = 20, CURL = 3, SPLAT_RADIUS = .2, SPLAT_FORCE = 6e3, SHADING = true, COLOR_UPDATE_SPEED = 10, BACK_COLOR = {
	r: .5,
	g: 0,
	b: 0
}, TRANSPARENT = true, RAINBOW_MODE = true, COLOR = "#ff0000" }) {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas || !window.matchMedia("(pointer: fine)").matches) return;
		const gl = canvas.getContext("webgl", {
			alpha: true,
			depth: false,
			antialias: false
		});
		if (!gl) return;
		const halfFloat = gl.getExtension("OES_texture_half_float");
		const linear = gl.getExtension("OES_texture_half_float_linear");
		if (!halfFloat) return;
		const type = halfFloat.HALF_FLOAT_OES;
		const config = {
			SIM_RESOLUTION,
			DYE_RESOLUTION: linear ? DYE_RESOLUTION : 256,
			DENSITY_DISSIPATION,
			VELOCITY_DISSIPATION,
			PRESSURE,
			PRESSURE_ITERATIONS,
			CURL,
			SPLAT_RADIUS,
			SPLAT_FORCE,
			SHADING: SHADING && !!linear,
			COLOR_UPDATE_SPEED,
			BACK_COLOR,
			TRANSPARENT,
			RAINBOW_MODE,
			COLOR
		};
		const vertex = `attribute vec2 a; varying vec2 v,vL,vR,vT,vB; uniform vec2 t; void main(){v=a*.5+.5;vL=v-vec2(t.x,0);vR=v+vec2(t.x,0);vT=v+vec2(0,t.y);vB=v-vec2(0,t.y);gl_Position=vec4(a,0,1);}`;
		const shaders = {
			splat: `precision highp float;varying vec2 v;uniform sampler2D u;uniform vec2 p;uniform float ar,r;uniform vec3 c;void main(){vec2 q=v-p;q.x*=ar;gl_FragColor=vec4(texture2D(u,v).xyz+exp(-dot(q,q)/r)*c,1);}`,
			advect: `precision highp float;varying vec2 v;uniform sampler2D u,s;uniform vec2 t;uniform float dt,d;void main(){gl_FragColor=texture2D(s,v-dt*texture2D(u,v).xy*t)/(1.+d*dt);}`,
			curl: `precision mediump float;varying vec2 v,vL,vR,vT,vB;uniform sampler2D u;void main(){float x=texture2D(u,vR).y-texture2D(u,vL).y-texture2D(u,vT).x+texture2D(u,vB).x;gl_FragColor=vec4(.5*x,0,0,1);}`,
			vort: `precision highp float;varying vec2 v,vL,vR,vT,vB;uniform sampler2D u,c;uniform float dt,k;void main(){float L=texture2D(c,vL).x,R=texture2D(c,vR).x,T=texture2D(c,vT).x,B=texture2D(c,vB).x,C=texture2D(c,v).x;vec2 f=.5*vec2(abs(T)-abs(B),abs(R)-abs(L));f=f/(length(f)+.0001)*k*C;f.y=-f.y;gl_FragColor=vec4(texture2D(u,v).xy+f*dt,0,1);}`,
			div: `precision mediump float;varying vec2 v,vL,vR,vT,vB;uniform sampler2D u;void main(){vec2 C=texture2D(u,v).xy;float L=texture2D(u,vL).x,R=texture2D(u,vR).x,T=texture2D(u,vT).y,B=texture2D(u,vB).y;if(vL.x<0.)L=-C.x;if(vR.x>1.)R=-C.x;if(vT.y>1.)T=-C.y;if(vB.y<0.)B=-C.y;gl_FragColor=vec4(.5*(R-L+T-B),0,0,1);}`,
			clear: `precision mediump float;varying vec2 v;uniform sampler2D u;uniform float x;void main(){gl_FragColor=x*texture2D(u,v);}`,
			pressure: `precision mediump float;varying vec2 v,vL,vR,vT,vB;uniform sampler2D p,d;void main(){float x=(texture2D(p,vL).x+texture2D(p,vR).x+texture2D(p,vT).x+texture2D(p,vB).x-texture2D(d,v).x)*.25;gl_FragColor=vec4(x,0,0,1);}`,
			gradient: `precision mediump float;varying vec2 v,vL,vR,vT,vB;uniform sampler2D p,u;void main(){vec2 x=texture2D(u,v).xy-vec2(texture2D(p,vR).x-texture2D(p,vL).x,texture2D(p,vT).x-texture2D(p,vB).x);gl_FragColor=vec4(x,0,1);}`,
			display: `precision highp float;varying vec2 v,vL,vR,vT,vB;uniform sampler2D u;uniform vec2 t;void main(){vec3 c=texture2D(u,v).rgb;${config.SHADING ? "float dx=length(texture2D(u,vR).rgb)-length(texture2D(u,vL).rgb),dy=length(texture2D(u,vT).rgb)-length(texture2D(u,vB).rgb);c*=clamp(dot(normalize(vec3(dx,dy,length(t))),vec3(0,0,1))+.7,.7,1.);" : ""}gl_FragColor=vec4(c,max(c.r,max(c.g,c.b)));}`
		};
		const compile = (source) => {
			const s = gl.createShader(gl.FRAGMENT_SHADER);
			gl.shaderSource(s, source);
			gl.compileShader(s);
			return s;
		};
		const vs = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vs, vertex);
		gl.compileShader(vs);
		const program = (source) => {
			const p = gl.createProgram();
			gl.attachShader(p, vs);
			gl.attachShader(p, compile(source));
			gl.linkProgram(p);
			return p;
		};
		const programs = Object.fromEntries(Object.entries(shaders).map(([name, source]) => [name, program(source)]));
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
			-1,
			-1,
			-1,
			1,
			1,
			1,
			1,
			-1
		]), gl.STATIC_DRAW);
		const indices = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
			0,
			1,
			2,
			0,
			2,
			3
		]), gl.STATIC_DRAW);
		const fbo = (w, h, filter = linear ? gl.LINEAR : gl.NEAREST) => {
			const texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, texture);
			for (const p of [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER]) gl.texParameteri(gl.TEXTURE_2D, p, filter);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, type, null);
			const frame = gl.createFramebuffer();
			gl.bindFramebuffer(gl.FRAMEBUFFER, frame);
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
			return {
				texture,
				frame,
				w,
				h
			};
		};
		let velocity, dye, divergence, curl, pressure;
		const resolution = (n) => {
			const ar = canvas.width / canvas.height;
			return ar > 1 ? [Math.round(n * ar), n] : [n, Math.round(n / ar)];
		};
		const init = () => {
			const [sw, sh] = resolution(config.SIM_RESOLUTION), [dw, dh] = resolution(config.DYE_RESOLUTION);
			velocity = [fbo(sw, sh), fbo(sw, sh)];
			dye = [fbo(dw, dh), fbo(dw, dh)];
			divergence = fbo(sw, sh, gl.NEAREST);
			curl = fbo(sw, sh, gl.NEAREST);
			pressure = [fbo(sw, sh, gl.NEAREST), fbo(sw, sh, gl.NEAREST)];
		};
		const bindProgram = (name, target) => {
			const p = programs[name];
			gl.useProgram(p);
			gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
			const a = gl.getAttribLocation(p, "a");
			gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
			gl.enableVertexAttribArray(a);
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices);
			gl.viewport(0, 0, target?.w ?? canvas.width, target?.h ?? canvas.height);
			gl.bindFramebuffer(gl.FRAMEBUFFER, target?.frame ?? null);
			return p;
		};
		const uniform = (p, n) => gl.getUniformLocation(p, n);
		const tex = (p, n, texture, unit) => {
			gl.activeTexture(gl.TEXTURE0 + unit);
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.uniform1i(uniform(p, n), unit);
		};
		const draw = () => gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
		const swap = (a) => [a[1], a[0]];
		const bindT = (p, target) => gl.uniform2f(uniform(p, "t"), 1 / target.w, 1 / target.h);
		const rgb = () => {
			if (!config.RAINBOW_MODE) {
				const x = config.COLOR.replace("#", "");
				return [
					parseInt(x.slice(0, 2), 16) / 1700,
					parseInt(x.slice(2, 4), 16) / 1700,
					parseInt(x.slice(4, 6), 16) / 1700
				];
			}
			const h = Math.random() * 6, i = Math.floor(h), f = h - i, q = 1 - f;
			return [
				[
					1,
					f,
					0
				],
				[
					q,
					1,
					0
				],
				[
					0,
					1,
					f
				],
				[
					0,
					q,
					1
				],
				[
					f,
					0,
					1
				],
				[
					1,
					0,
					q
				]
			][i].map((x) => x * .15);
		};
		let x = 0, y = 0, px = 0, py = 0, moved = false, last = performance.now(), active = true, resize = true;
		const pixelRatio = () => Math.min(devicePixelRatio || 1, 2);
		const resizeCanvas = () => {
			const dpr = pixelRatio(), w = Math.floor(canvas.clientWidth * dpr), h = Math.floor(canvas.clientHeight * dpr);
			if (canvas.width !== w || canvas.height !== h) {
				canvas.width = w;
				canvas.height = h;
				resize = true;
			}
		};
		const onMove = (e) => {
			px = x;
			py = y;
			x = e.clientX * pixelRatio();
			y = (canvas.clientHeight - e.clientY) * pixelRatio();
			moved = true;
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		const splat = () => {
			const p = bindProgram("splat", velocity[1]);
			tex(p, "u", velocity[0].texture, 0);
			gl.uniform2f(uniform(p, "p"), x / canvas.width, y / canvas.height);
			gl.uniform1f(uniform(p, "ar"), canvas.width / canvas.height);
			gl.uniform1f(uniform(p, "r"), config.SPLAT_RADIUS / 100);
			gl.uniform3f(uniform(p, "c"), (x - px) / canvas.width * config.SPLAT_FORCE, (y - py) / canvas.height * config.SPLAT_FORCE, 0);
			draw();
			velocity = swap(velocity);
			const d = bindProgram("splat", dye[1]);
			tex(d, "u", dye[0].texture, 0);
			gl.uniform2f(uniform(d, "p"), x / canvas.width, y / canvas.height);
			gl.uniform1f(uniform(d, "ar"), canvas.width / canvas.height);
			gl.uniform1f(uniform(d, "r"), config.SPLAT_RADIUS / 100);
			const c = rgb();
			gl.uniform3f(uniform(d, "c"), c[0], c[1], c[2]);
			draw();
			dye = swap(dye);
		};
		const frame = () => {
			if (!active) return;
			resizeCanvas();
			if (resize) {
				init();
				resize = false;
			}
			const dt = Math.min((performance.now() - last) / 1e3, .0167);
			last = performance.now();
			if (moved) {
				splat();
				moved = false;
			}
			let p = bindProgram("curl", curl);
			tex(p, "u", velocity[0].texture, 0);
			bindT(p, velocity[0]);
			draw();
			p = bindProgram("vort", velocity[1]);
			tex(p, "u", velocity[0].texture, 0);
			tex(p, "c", curl.texture, 1);
			bindT(p, velocity[0]);
			gl.uniform1f(uniform(p, "dt"), dt);
			gl.uniform1f(uniform(p, "k"), config.CURL);
			draw();
			velocity = swap(velocity);
			p = bindProgram("div", divergence);
			tex(p, "u", velocity[0].texture, 0);
			bindT(p, velocity[0]);
			draw();
			p = bindProgram("clear", pressure[1]);
			tex(p, "u", pressure[0].texture, 0);
			gl.uniform1f(uniform(p, "x"), config.PRESSURE);
			draw();
			pressure = swap(pressure);
			for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
				p = bindProgram("pressure", pressure[1]);
				tex(p, "p", pressure[0].texture, 0);
				tex(p, "d", divergence.texture, 1);
				bindT(p, pressure[0]);
				draw();
				pressure = swap(pressure);
			}
			p = bindProgram("gradient", velocity[1]);
			tex(p, "p", pressure[0].texture, 0);
			tex(p, "u", velocity[0].texture, 1);
			bindT(p, velocity[0]);
			draw();
			velocity = swap(velocity);
			p = bindProgram("advect", velocity[1]);
			tex(p, "u", velocity[0].texture, 0);
			tex(p, "s", velocity[0].texture, 1);
			bindT(p, velocity[0]);
			gl.uniform1f(uniform(p, "dt"), dt);
			gl.uniform1f(uniform(p, "d"), config.VELOCITY_DISSIPATION);
			draw();
			velocity = swap(velocity);
			p = bindProgram("advect", dye[1]);
			tex(p, "u", velocity[0].texture, 0);
			tex(p, "s", dye[0].texture, 1);
			bindT(p, velocity[0]);
			gl.uniform1f(uniform(p, "dt"), dt);
			gl.uniform1f(uniform(p, "d"), config.DENSITY_DISSIPATION);
			draw();
			dye = swap(dye);
			p = bindProgram("display");
			tex(p, "u", dye[0].texture, 0);
			gl.uniform2f(uniform(p, "t"), 1 / canvas.width, 1 / canvas.height);
			draw();
			requestAnimationFrame(frame);
		};
		resizeCanvas();
		init();
		frame();
		return () => {
			active = false;
			window.removeEventListener("mousemove", onMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "splash-cursor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", { ref: canvasRef })
	});
}
var styles_default = "/assets/styles-s9bvu-PU.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "MD Asif Shah Diner — Shopify Developer" },
			{
				name: "description",
				content: "Freelance Shopify developer building high-converting, custom Shopify 2.0 stores with Liquid, metafields, and pixel-perfect theme work."
			},
			{
				name: "author",
				content: "MD Asif Shah Diner"
			},
			{
				property: "og:title",
				content: "MD Asif Shah Diner — Shopify Developer"
			},
			{
				property: "og:description",
				content: "Custom Shopify 2.0 themes, Liquid sections, and conversion-focused storefronts."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplashCursor, {
				COLOR: "#9362f4",
				RAINBOW_MODE: false,
				SIM_RESOLUTION: 64,
				DYE_RESOLUTION: 720,
				PRESSURE_ITERATIONS: 12
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClickSound, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function ClickSound() {
	(0, import_react.useEffect)(() => {
		let audioContext;
		const playClickSound = () => {
			const context = audioContext ??= new AudioContext();
			const createMechanicalClick = () => {
				const now = context.currentTime;
				const impact = context.createOscillator();
				const click = context.createOscillator();
				const resonance = context.createOscillator();
				const impactGain = context.createGain();
				const clickGain = context.createGain();
				const resonanceGain = context.createGain();
				impact.type = "triangle";
				impact.frequency.setValueAtTime(185, now);
				impact.frequency.exponentialRampToValueAtTime(105, now + .055);
				impactGain.gain.setValueAtTime(.08, now);
				impactGain.gain.exponentialRampToValueAtTime(.001, now + .065);
				click.type = "sine";
				click.frequency.setValueAtTime(1250, now);
				click.frequency.exponentialRampToValueAtTime(720, now + .022);
				clickGain.gain.setValueAtTime(.045, now);
				clickGain.gain.exponentialRampToValueAtTime(.001, now + .028);
				resonance.type = "sine";
				resonance.frequency.setValueAtTime(480, now);
				resonance.frequency.exponentialRampToValueAtTime(340, now + .11);
				resonanceGain.gain.setValueAtTime(.018, now);
				resonanceGain.gain.exponentialRampToValueAtTime(.001, now + .11);
				impact.connect(impactGain);
				impactGain.connect(context.destination);
				click.connect(clickGain);
				clickGain.connect(context.destination);
				resonance.connect(resonanceGain);
				resonanceGain.connect(context.destination);
				impact.start(now);
				click.start(now);
				resonance.start(now);
				impact.stop(now + .065);
				click.stop(now + .028);
				resonance.stop(now + .11);
			};
			if (context.state === "suspended") context.resume().then(createMechanicalClick);
			else createMechanicalClick();
		};
		document.addEventListener("click", playClickSound, { passive: true });
		return () => {
			document.removeEventListener("click", playClickSound);
			audioContext?.close();
		};
	}, []);
	return null;
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-Cp54R8zM.mjs");
var rootRouteChildren = {
	IndexRoute: createFileRoute("/")({
		head: () => ({ meta: [
			{ title: "MD Asif Shah Diner — MERN Stack & Shopify Developer" },
			{
				name: "description",
				content: "MERN stack developer and Shopify expert based in Dhaka. Custom Shopify 2.0 themes, React websites, and conversion-focused storefronts."
			},
			{
				property: "og:title",
				content: "MD Asif Shah Diner — MERN Stack & Shopify Developer"
			},
			{
				property: "og:description",
				content: "MERN stack + Shopify 2.0 themes and conversion-focused storefronts."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter, "component")
	}).update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$1
	}),
	ProjectsSlugRoute: Route.update({
		id: "/projects/$slug",
		path: "/projects/$slug",
		getParentRoute: () => Route$1
	})
};
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
