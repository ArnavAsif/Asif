import { t as getProjectBySlug } from "./_ssr/projects-CCdRUMI3.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BmTQwt8S.js
var $$splitComponentImporter = () => import("./_slug-BtpE8dQk.mjs");
var Route = createFileRoute("/projects/$slug")({
	head: ({ params }) => {
		const project = getProjectBySlug(params.slug);
		return { meta: [{ title: project ? `${project.name} — Project Details` : "Project Not Found" }, {
			name: "description",
			content: project?.description ?? ""
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
