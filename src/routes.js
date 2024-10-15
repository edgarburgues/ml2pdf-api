import { handleCertificationExamUrl } from "./controllers/certificationController.js";
import { handleTrainingPathUrl } from "./controllers/trainingPathController.js";

export function routeRequest(req) {
    const url = new URL(req.url);

    if (url.pathname === "/api") {
        if (url.searchParams.get("url").includes("/credentials/certifications/")) {
            return handleCertificationExamUrl(req);
        } else if (url.searchParams.get("url").includes("/training/paths/")) {
            return handleTrainingPathUrl(req);
        }
    }

    return new Response("Ruta no encontrada", { status: 404 });
}
