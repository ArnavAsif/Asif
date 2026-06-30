import { n as projects } from "./projects-ohaOBEnb.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as CodeXml, a as Phone, c as Mail, f as Check, g as Sparkles, i as Rocket, l as Linkedin, m as ArrowRight, n as Store, o as Palette, p as ArrowUpRight, r as Star, s as MapPin, t as Zap, u as Github } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bl__ZX2D.js
var import_jsx_runtime = require_jsx_runtime();
var skills = [
	{
		label: "Shopify",
		items: [
			"Liquid",
			"Shopify 2.0",
			"Theme Dev",
			"Metafields",
			"Metaobjects",
			"Shopify CLI"
		],
		color: "bg-accent text-accent-foreground",
		icon: Store
	},
	{
		label: "Front-End",
		items: [
			"HTML5",
			"CSS3",
			"JavaScript ES6+",
			"Responsive Design"
		],
		color: "bg-secondary text-foreground",
		icon: CodeXml
	},
	{
		label: "Tools",
		items: [
			"Git",
			"GitHub",
			"VS Code",
			"Figma",
			"Chrome DevTools"
		],
		color: "bg-tertiary text-foreground",
		icon: Palette
	},
	{
		label: "E-commerce",
		items: [
			"CRO",
			"SEO",
			"Performance",
			"App Integration"
		],
		color: "bg-quaternary text-foreground",
		icon: Rocket
	}
];
var headshot = "https://i.ibb.co.com/LXr0YqGS/Chat-GPT-Image-Jun-30-2026-04-35-36-PM.png";
var marqueeWords = [
	"Liquid",
	"✦",
	"Shopify 2.0",
	"●",
	"Metafields",
	"△",
	"Theme Dev",
	"◆",
	"Sections",
	"✿",
	"CRO",
	"▲"
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 font-display text-lg font-extrabold sm:text-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-accent text-accent-foreground pop-shadow",
						children: "A"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Asif Shah"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 text-sm font-semibold md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#projects",
							className: "hover:text-accent",
							children: "Projects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#skills",
							className: "hover:text-accent",
							children: "Skills"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#about",
							className: "hover:text-accent",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "hover:text-accent",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "group inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-accent px-4 py-2 text-sm font-bold text-accent-foreground pop-shadow transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--foreground)]",
					children: ["Hire me", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-5 w-5 place-items-center rounded-full bg-background text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-3 w-3",
							strokeWidth: 2.5
						})
					})]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -left-24 top-24 hidden h-72 w-72 rounded-full bg-tertiary md:block",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute right-10 top-8 hidden h-16 w-16 rotate-12 rounded-md border-2 border-foreground bg-quaternary md:block",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Squiggle, { className: "pointer-events-none absolute right-1/4 top-40 hidden h-8 w-32 text-secondary md:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-bold uppercase tracking-wider pop-shadow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-quaternary" }), " Available for freelance"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl lg:text-7xl",
							children: [
								"I build ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative z-10",
										children: "Shopify"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute inset-x-0 bottom-1 -z-0 h-4 bg-tertiary sm:h-5",
										"aria-hidden": true
									})]
								}),
								" ",
								"stores that ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "convert"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-lg text-base text-muted-foreground sm:text-lg",
							children: [
								"Hey, I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "MD Asif Shah Diner"
								}),
								"—a freelance Shopify developer in Dhaka building custom 2.0 themes, Liquid sections, and pixel-honest storefronts."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#projects",
								className: "group inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-accent px-5 py-3 text-sm font-bold text-accent-foreground pop-shadow transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--foreground)] sm:text-base",
								children: ["See my work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-6 w-6 place-items-center rounded-full bg-background text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "h-3.5 w-3.5",
										strokeWidth: 2.5
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-transparent px-5 py-3 text-sm font-bold transition-colors duration-300 hover:bg-tertiary sm:text-base",
								children: "Let's talk"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid grid-cols-3 gap-3 sm:max-w-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: "60+",
									label: "Shopify stores"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: "2.0",
									label: "Theme expert"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: "100%",
									label: "Responsive"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-secondary",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute -bottom-6 -left-6 h-20 w-20 rotate-45 rounded-lg border-2 border-foreground bg-tertiary",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-square rounded-[50%_50%_30%_70%_/_60%_40%_60%_40%] border-2 border-foreground bg-accent pop-shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: headshot,
								alt: "MD Asif Shah Diner",
								loading: "eager",
								className: "absolute inset-0 h-full w-full rounded-[50%_50%_30%_70%_/_60%_40%_60%_40%] object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-bold text-foreground pop-shadow whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									className: "h-3 w-3",
									strokeWidth: 2.5
								}), " Shopify Dev"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingTag, {
							className: "-left-6 top-10 -rotate-6 bg-quaternary",
							children: "Liquid"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingTag, {
							className: "-right-2 top-1/2 rotate-6 bg-tertiary",
							children: "2.0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingTag, {
							className: "bottom-2 left-10 -rotate-3 bg-background",
							children: "Metafields"
						})
					]
				})]
			})
		]
	});
}
function Stat({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border-2 border-foreground bg-card p-3 pop-shadow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-2xl font-extrabold",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		})]
	});
}
function FloatingTag({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `absolute rounded-full border-2 border-foreground px-3 py-1 text-xs font-bold pop-shadow ${className}`,
		children
	});
}
function Squiggle({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 120 20",
		fill: "none",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M2 10 Q 17 0 32 10 T 62 10 T 92 10 T 118 10",
			stroke: "currentColor",
			strokeWidth: "3",
			strokeLinecap: "round"
		})
	});
}
function Marquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y-2 border-foreground bg-accent text-accent-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex animate-marquee gap-8 whitespace-nowrap py-4 font-display text-2xl font-extrabold sm:text-3xl",
			children: [...marqueeWords, ...marqueeWords].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex items-center gap-8",
				children: w
			}, i))
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative px-4 py-20 sm:px-6 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "About" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl",
				children: "A developer who treats every store like a product launch."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm a Shopify developer with hands-on experience building and customizing Shopify 2.0 stores using Liquid, HTML, CSS, JavaScript, metafields, and theme customization." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I care about responsive layouts, conversion details, and reusable sections so brands can keep editing long after I ship. When something feels slow, I make it fast. When something feels rough, I sand it down." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 pt-2",
						children: [
							"Problem solving",
							"Communication",
							"Teamwork",
							"Time management",
							"Attention to detail"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border-2 border-foreground bg-background px-3 py-1 text-sm font-semibold text-foreground",
							children: s
						}, s))
					})
				]
			})]
		})
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-tertiary px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-foreground" }), children]
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "skills",
		className: "relative px-4 py-20 sm:px-6 sm:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute right-6 top-10 hidden h-20 w-20 rounded-full border-2 border-foreground bg-secondary md:block",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Toolbox" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl",
					children: "The kit I reach for."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: skills.map((s, i) => {
					const Icon = s.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `group relative rounded-xl border-2 border-foreground bg-card p-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-rotate-1 hover:scale-[1.02] ${[
							"pop-shadow-pink",
							"pop-shadow-amber",
							"pop-shadow-mint",
							"pop-shadow"
						][i]}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `absolute -top-5 left-5 grid h-10 w-10 place-items-center rounded-full border-2 border-foreground ${s.color}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5",
									strokeWidth: 2.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl font-extrabold",
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1.5",
								children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 text-sm font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-4 w-4 shrink-0 place-items-center rounded-full bg-quaternary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "h-3 w-3 text-foreground",
											strokeWidth: 3
										})
									}), it]
								}, it))
							})
						]
					}, s.label);
				})
			})]
		})]
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative px-4 py-20 sm:px-6 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-6 sm:grid-cols-[1fr_auto]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Selected work" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl",
							children: "Stores I've shipped."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-muted-foreground",
							children: [
								"Each store is custom-built on Shopify 2.0. Demo passwords are ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "rounded bg-muted px-1.5 py-0.5 font-mono text-sm",
									children: "1"
								}),
								"."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://github.com/ArnavAsif",
					target: "_blank",
					rel: "noreferrer",
					className: "hidden items-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-2 text-sm font-bold transition-colors hover:bg-tertiary sm:inline-flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
						className: "h-4 w-4",
						strokeWidth: 2.5
					}), " All repos"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: projects.map((p, i) => {
					const shadows = [
						"pop-shadow-pink",
						"pop-shadow-amber",
						"pop-shadow-mint",
						"pop-shadow-pink",
						"pop-shadow-amber",
						"pop-shadow-mint"
					];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/projects/$slug",
						params: { slug: p.slug },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-foreground bg-card transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:rotate-[-0.5deg] ${shadows[i % shadows.length]}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative h-48 border-b-2 border-foreground ${p.accent} overflow-hidden`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: `${p.name} — ${p.tag}`,
									loading: "lazy",
									className: "absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border-2 border-foreground bg-background text-xl font-black",
									children: p.shape
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-4 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl font-extrabold",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border-2 border-foreground bg-background px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
											children: "Shopify 2.0"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: p.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-auto flex flex-wrap gap-2 pt-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground transition-all group-hover:-translate-y-0.5",
												children: ["View details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
													className: "h-3 w-3",
													strokeWidth: 2.5
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: p.repo,
												target: "_blank",
												rel: "noreferrer",
												onClick: (e) => e.stopPropagation(),
												className: "inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-background px-3 py-1.5 text-xs font-bold transition-colors hover:bg-tertiary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
													className: "h-3 w-3",
													strokeWidth: 2.5
												}), " Code"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "ml-auto self-center text-[10px] font-bold uppercase tracking-wide text-muted-foreground",
												children: ["pw: ", p.pw]
											})
										]
									})
								]
							})]
						})
					}, p.name);
				})
			})]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative px-4 py-20 sm:px-6 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Experience" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl",
						children: "Building since 2024."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl border-2 border-foreground bg-card p-6 pop-shadow-amber",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-extrabold",
								children: "Freelance Shopify Developer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-muted-foreground",
								children: "2024 — Present"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-full border-2 border-foreground bg-quaternary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
									className: "h-5 w-5",
									strokeWidth: 2.5
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm text-muted-foreground sm:text-base",
							children: [
								"Developed and customized multiple Shopify stores from scratch",
								"Built custom sections, product pages, and landing pages",
								"Optimized site speed, UX, and integrated third-party apps"
							].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-3 w-3 text-foreground",
										strokeWidth: 3
									})
								}), it]
							}, it))
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Education" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl",
						children: "Curious by training."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-4",
						children: [
							{
								title: "B.S.S. in Economics",
								school: "National University",
								year: "2019",
								color: "bg-accent text-accent-foreground"
							},
							{
								title: "HSC (Science)",
								school: "Higher Secondary",
								year: "",
								color: "bg-secondary text-foreground"
							},
							{
								title: "SSC (Science)",
								school: "Secondary",
								year: "",
								color: "bg-tertiary text-foreground"
							}
						].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 rounded-xl border-2 border-foreground bg-card p-4 pop-shadow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-foreground ${e.color} font-display text-lg font-extrabold`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: "h-5 w-5",
									strokeWidth: 2.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate font-display font-extrabold",
									children: e.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "truncate text-sm text-muted-foreground",
									children: [
										e.school,
										" ",
										e.year && `· ${e.year}`
									]
								})]
							})]
						}, e.title))
					})
				] })]
			})
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative px-4 py-20 sm:px-6 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl",
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
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground",
								children: "Let's build"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl",
								children: "Got a store to ship?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-base sm:text-lg",
								children: "I'm taking on new Shopify projects. Send a brief, a screenshot, or just say hi."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
										icon: Mail,
										label: "Email",
										value: "ifas092@gmail.com",
										href: "mailto:ifas092@gmail.com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
										icon: Phone,
										label: "Phone",
										value: "+880 1600-018734",
										href: "tel:+8801600018734"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
										icon: Linkedin,
										label: "LinkedIn",
										value: "arnav-asif",
										href: "https://linkedin.com/in/arnav-asif-a74894259"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
										icon: Github,
										label: "GitHub",
										value: "ArnavAsif",
										href: "https://github.com/ArnavAsif"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-3 py-1.5 text-xs font-bold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "h-3.5 w-3.5",
									strokeWidth: 2.5
								}), " Khilkhet, Dhaka, Bangladesh"]
							})
						]
					})
				]
			})
		})
	});
}
function ContactRow({ icon: Icon, label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: "noreferrer",
		className: "group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border-2 border-foreground bg-background p-3 text-foreground transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--foreground)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-foreground bg-tertiary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-4 w-4",
					strokeWidth: 2.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate font-semibold",
					children: value
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: "h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
				strokeWidth: 2.5
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t-2 border-foreground bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm font-medium sm:flex-row sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" MD Asif Shah Diner. Built with Shopify love."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/ArnavAsif",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "GitHub",
						className: "grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-tertiary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://linkedin.com/in/arnav-asif-a74894259",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "LinkedIn",
						className: "grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-tertiary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:ifas092@gmail.com",
						"aria-label": "Email",
						className: "grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-background transition-colors hover:bg-tertiary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							className: "h-4 w-4",
							strokeWidth: 2.5
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { Index as component };
