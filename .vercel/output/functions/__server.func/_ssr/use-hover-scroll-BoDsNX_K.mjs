import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-hover-scroll-BoDsNX_K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
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
		setIsHovered(true);
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
		setIsHovered(false);
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
		isHovered,
		imageAspect,
		handleImageLoad,
		handlers: {
			onMouseEnter: handleMouseEnter,
			onMouseLeave: handleMouseLeave
		}
	};
}
//#endregion
export { useHoverScroll as t };
