export function createJsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}

export function createErrorResponse(message, status = 500, error = null) {
    const errorResponse = {
        error: message,
    };

    if (error) {
        errorResponse.details = error.message;
    }

    return new Response(JSON.stringify(errorResponse), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}
