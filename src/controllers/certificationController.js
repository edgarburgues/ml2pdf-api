import { generateCertificationLinks } from "../services/certificationService.js";
import { createJsonResponse, createErrorResponse } from "../utils/responseUtils.js";

export async function handleCertificationExamUrl(req) {
    try {
        const url = new URL(req.url);
        const mainUrl = url.searchParams.get("url");

        if (!mainUrl) {
            return createErrorResponse("No se proporcionó la URL principal", 400);
        }

        if (!mainUrl.includes("/credentials/certifications/exams/")) {
            return createErrorResponse("Tipo de URL no soportada", 400);
        }

        const result = await generateCertificationLinks(mainUrl);
        return createJsonResponse(result);
    } catch (error) {
        return createErrorResponse("Ocurrió un error al generar los enlaces.", 500, error);
    }
}
