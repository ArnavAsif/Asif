import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { l as Moon, n as Sun } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-toggle-DyC4xSGp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SCROLL_DURATION = 5e3;
function easeInOut(t) {
	return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
/**
* Drives a smooth translateY scroll animation on an image element
* using requestAnimationFrame for GPU-accelerated, jank-free performance.
*
* Returns refs, hover handlers, and imageAspect for the card to use.
* imageAspect is set once the image loads (naturalHeight / naturalWidth).
*/
function useHoverScroll() {
	const containerRef = (0, import_react.useRef)(null);
	const imageRef = (0, import_react.useRef)(null);
	const rafRef = (0, import_react.useRef)(0);
	const offsetRef = (0, import_react.useRef)(0);
	const startTimeRef = (0, import_react.useRef)(0);
	const loadHandlerRef = (0, import_react.useRef)(null);
	const [imageAspect, setImageAspect] = (0, import_react.useState)(null);
	const prefersReducedMotion = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	}, []);
	const getMaxOffset = (0, import_react.useCallback)(() => {
		const container = containerRef.current;
		const image = imageRef.current;
		if (!container || !image) return 0;
		return Math.max(0, image.offsetHeight - container.offsetHeight);
	}, []);
	const animate = (0, import_react.useCallback)((from, to) => {
		if (prefersReducedMotion.current) {
			offsetRef.current = to;
			if (imageRef.current) imageRef.current.style.transform = `translateY(${-to}px)`;
			return;
		}
		const maxOffset = getMaxOffset();
		const distance = Math.abs(to - from);
		const duration = Math.max(3e3, Math.min(7e3, distance / Math.max(maxOffset, 1) * SCROLL_DURATION));
		cancelAnimationFrame(rafRef.current);
		startTimeRef.current = performance.now();
		const startOff = from;
		const endOff = to;
		const step = (now) => {
			const elapsed = now - startTimeRef.current;
			const progress = Math.min(elapsed / duration, 1);
			const eased = easeInOut(progress);
			const current = startOff + (endOff - startOff) * eased;
			offsetRef.current = current;
			if (imageRef.current) imageRef.current.style.transform = `translateY(${-current}px)`;
			if (progress < 1) rafRef.current = requestAnimationFrame(step);
			else offsetRef.current = endOff;
		};
		rafRef.current = requestAnimationFrame(step);
	}, [getMaxOffset]);
	const removeLoadListener = (0, import_react.useCallback)(() => {
		if (loadHandlerRef.current && imageRef.current) {
			imageRef.current.removeEventListener("load", loadHandlerRef.current);
			loadHandlerRef.current = null;
		}
	}, []);
	const handleImageLoad = (0, import_react.useCallback)(() => {
		const img = imageRef.current;
		if (!img) return;
		setImageAspect(img.naturalHeight / img.naturalWidth);
		loadHandlerRef.current = null;
	}, []);
	const handleMouseEnter = (0, import_react.useCallback)(() => {
		removeLoadListener();
		const maxOffset = getMaxOffset();
		if (maxOffset > 0) animate(offsetRef.current, maxOffset);
		else if (imageRef.current && !imageRef.current.complete) {
			const onLoad = () => {
				handleImageLoad();
				const newMax = getMaxOffset();
				if (newMax > 0) animate(0, newMax);
			};
			loadHandlerRef.current = onLoad;
			imageRef.current.addEventListener("load", onLoad);
		}
	}, [
		animate,
		getMaxOffset,
		removeLoadListener,
		handleImageLoad
	]);
	const handleMouseLeave = (0, import_react.useCallback)(() => {
		removeLoadListener();
		animate(offsetRef.current, 0);
	}, [animate, removeLoadListener]);
	(0, import_react.useEffect)(() => {
		return () => {
			cancelAnimationFrame(rafRef.current);
			removeLoadListener();
		};
	}, [removeLoadListener]);
	return {
		containerRef,
		imageRef,
		imageAspect,
		handleImageLoad,
		handlers: {
			onMouseEnter: handleMouseEnter,
			onMouseLeave: handleMouseLeave
		}
	};
}
function LazyVideo({ src, ...props }) {
	const videoRef = (0, import_react.useRef)(null);
	const [shouldLoad, setShouldLoad] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setShouldLoad(true);
				observer.disconnect();
			}
		}, { rootMargin: "300px" });
		observer.observe(video);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		ref: videoRef,
		src: shouldLoad ? src : void 0,
		preload: "none",
		...props
	});
}
var THEME_KEY = "asif-portfolio-theme";
function ThemeToggle() {
	const [isDark, setIsDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const dark = window.localStorage.getItem(THEME_KEY) === "dark";
		document.documentElement.classList.toggle("dark", dark);
		setIsDark(dark);
	}, []);
	const toggleTheme = () => {
		setIsDark((current) => {
			const dark = !current;
			document.documentElement.classList.toggle("dark", dark);
			window.localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
			return dark;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggleTheme,
		className: "grid h-10 w-10 place-items-center rounded-full border-2 border-foreground bg-background text-foreground pop-shadow transition-[transform,box-shadow,background-color] duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-tertiary hover:shadow-[6px_6px_0_0_var(--foreground)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--foreground)]",
		"aria-label": isDark ? "Switch to light theme" : "Switch to dark theme",
		title: isDark ? "Switch to light theme" : "Switch to dark theme",
		children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
			className: "h-4 w-4",
			strokeWidth: 2.5
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
			className: "h-4 w-4",
			strokeWidth: 2.5
		})
	});
}
//#endregion
export { ThemeToggle as n, useHoverScroll as r, LazyVideo as t };
