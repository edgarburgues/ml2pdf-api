import { serve } from "bun";
import { routeRequest } from "./src/routes.js";

const port = 3000;

serve({
    port,
    fetch(req) {
        return routeRequest(req);
    },
});

console.log(`API escuchando en http://localhost:${port}`);
