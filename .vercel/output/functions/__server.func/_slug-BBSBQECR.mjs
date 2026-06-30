import { r as __toESM } from "./_runtime.mjs";
import { t as getProjectBySlug } from "./_ssr/projects-ohaOBEnb.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { h as Link, k as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_slug-CEXLi5-5.mjs";
import { _ as ArrowLeft, c as Monitor, f as Github, h as ArrowUpRight, i as Smartphone, m as Check, p as ExternalLink } from "./_libs/lucide-react.mjs";
import { t as clsx } from "./_libs/clsx.mjs";
import { t as twMerge } from "./_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BBSBQECR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function DeviceMockup({ src, alt, variant = "desktop", className }) {
	if (variant === "mobile") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative mx-auto", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative rounded-[2.5rem] border-[6px] border-foreground bg-foreground p-2 shadow-[8px_8px_0_0_oklch(0.29_0.04_257)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-[6px] left-1/2 z-10 h-[28px] w-[120px] -translate-x-1/2 rounded-b-2xl bg-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden rounded-[2rem] bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt,
						loading: "lazy",
						decoding: "async",
						className: "h-auto w-full object-cover object-top"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-3 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-full bg-muted" })
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative mx-auto", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative rounded-t-2xl border-[6px] border-b-0 border-foreground bg-foreground p-2 pb-0 shadow-[8px_8px_0_0_oklch(0.29_0.04_257)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-t-xl bg-background pt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt,
					loading: "lazy",
					decoding: "async",
					className: "h-auto w-full object-cover object-top"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-4 rounded-b-2xl border-[6px] border-t-2 border-foreground bg-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 h-1 w-1/4 -translate-x-1/2 rounded-b bg-muted" })
		})]
	});
}
function ProjectDetails() {
	const { slug } = Route.useParams();
	const project = getProjectBySlug(slug);
	const [viewMode, setViewMode] = (0, import_react.useState)("desktop");
	if (!project) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2 font-display text-lg font-extrabold sm:text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-accent text-accent-foreground pop-shadow",
							children: "A"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Asif Shah"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-2 text-sm font-bold transition-colors hover:bg-tertiary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						}), " Back to portfolio"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative px-4 py-12 sm:px-6 sm:py-16 lg:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-foreground",
								children: "Portfolio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: project.name
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `inline-flex items-center gap-2 rounded-full border-2 border-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider ${project.accent}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.shape }), project.tag]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl",
								children: project.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: project.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-extrabold",
									children: "Key Features"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-2.5",
									children: project.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2.5 text-sm font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-5 w-5 shrink-0 place-items-center rounded-full bg-quaternary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												className: "h-3 w-3 text-foreground",
												strokeWidth: 3
											})
										}), feature]
									}, feature))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: project.url,
									target: "_blank",
									rel: "noreferrer",
									className: "group inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-accent px-5 py-3 text-sm font-bold text-accent-foreground pop-shadow transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--foreground)] sm:text-base",
									children: ["Visit live store", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
										className: "h-4 w-4",
										strokeWidth: 2.5
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: project.repo,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-5 py-3 text-sm font-bold transition-colors duration-300 hover:bg-tertiary sm:text-base",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
										className: "h-4 w-4",
										strokeWidth: 2.5
									}), " View source"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-muted px-3 py-1.5 text-xs font-bold text-foreground",
								children: ["Demo password: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "rounded bg-background px-1.5 py-0.5 font-mono",
									children: project.pw
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-secondary opacity-60",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 rotate-45 rounded-lg border-2 border-foreground bg-tertiary opacity-60",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setViewMode("desktop"),
										className: `inline-flex items-center gap-2 rounded-full border-2 border-foreground px-4 py-2 text-xs font-bold transition-all duration-300 ${viewMode === "desktop" ? "bg-accent text-accent-foreground pop-shadow" : "bg-background hover:bg-tertiary"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, {
											className: "h-3.5 w-3.5",
											strokeWidth: 2.5
										}), " Desktop"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setViewMode("mobile"),
										className: `inline-flex items-center gap-2 rounded-full border-2 border-foreground px-4 py-2 text-xs font-bold transition-all duration-300 ${viewMode === "mobile" ? "bg-accent text-accent-foreground pop-shadow" : "bg-background hover:bg-tertiary"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, {
											className: "h-3.5 w-3.5",
											strokeWidth: 2.5
										}), " Mobile"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "animate-[reveal-scale_0.7s_cubic-bezier(0.22,1,0.36,1)_both]",
									children: viewMode === "desktop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceMockup, {
										src: project.image,
										alt: `${project.name} homepage - desktop view`,
										variant: "desktop",
										className: "w-full"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto max-w-[280px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceMockup, {
											src: project.image,
											alt: `${project.name} homepage - mobile view`,
											variant: "mobile",
											className: "w-full"
										})
									})
								}, viewMode)
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative px-4 py-16 sm:px-6 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-4xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-3xl border-2 border-foreground bg-accent p-8 text-accent-foreground pop-shadow-lg sm:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-2 border-foreground bg-tertiary",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rotate-45 rounded-2xl border-2 border-foreground bg-quaternary",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl",
										children: "Want a store like this?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-xl mx-auto text-base sm:text-lg",
										children: "I can build a custom Shopify store tailored to your brand. Let's talk about your project."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap justify-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "mailto:ifas092@gmail.com",
											className: "group inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-5 py-3 text-sm font-bold text-foreground pop-shadow transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] sm:text-base",
											children: ["Start a conversation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
												className: "h-4 w-4",
												strokeWidth: 2.5
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/",
											className: "inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-transparent px-5 py-3 text-sm font-bold transition-colors duration-300 hover:bg-tertiary sm:text-base",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
												className: "h-4 w-4",
												strokeWidth: 2.5
											}), " View all projects"]
										})]
									})
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t-2 border-foreground bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm font-medium sm:flex-row sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" MD Asif Shah Diner. Built with Shopify love."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://github.com/ArnavAsif",
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "GitHub",
							className: "grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-tertiary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
								className: "h-4 w-4",
								strokeWidth: 2.5
							})
						})
					})]
				})
			})
		]
	});
}
//#endregion
export { ProjectDetails as component };
