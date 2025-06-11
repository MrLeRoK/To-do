import {
    type RouteConfig,
    route,
    layout,
    index,
    prefix,
} from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;

export default [
    index("routes/home.tsx"),
    ...prefix("notes", [
        index("./routes/NotesHome.tsx"),
        layout("./layout/NotesLayout.tsx", [
            route(":id", "./routes/Notes.tsx"),
        ]),
    ]),
    layout("./layout/AuthLayout.tsx", [
        route(":id", "routes/Login.tsx"),
    ]),
] satisfies RouteConfig;
