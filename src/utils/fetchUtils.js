export async function fetchUids(mainUrl) {
    const apiUrl = mainUrl
        .replace(
            "/es-es/credentials/certifications/exams/",
            "/api/lists/studyguide/exam/exam."
        )
        .replace("es-es/", "")
        .replace(/\/$/, "") + "?locale=es-es";

    const baseUrl = "https://learn.microsoft.com/api/hierarchy/modules/";

    try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        const uids = jsonData.items.map((item) => ({
            id: item.id,
            url: `${baseUrl}${item.id}?locale=es-es`,
        }));

        return uids;
    } catch (error) {
        throw new Error(`Error al acceder a la API principal ${apiUrl}: ${error.message}`);
    }
}

export async function fetchUnitsFromUrl(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            return [];
        }

        const jsonData = await response.json();

        if (!jsonData.units) {
            return [];
        }

        const units = jsonData.units.map((unit) => ({
            title: unit.title,
            url: `https://learn.microsoft.com${unit.url}`,
        }));

        return units;
    } catch (error) {
        throw new Error(`Error procesando la URL: ${url}: ${error.message}`);
    }
}

