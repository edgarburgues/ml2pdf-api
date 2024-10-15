import { fetchUids, fetchUnitsFromUrl } from "../utils/fetchUtils.js";

export async function generateCertificationLinks(mainUrl) {
    const uidsWithUrls = await fetchUids(mainUrl);
    const result = {};

    for (const { id, url } of uidsWithUrls) {
        const units = await fetchUnitsFromUrl(url);
        result[url] = units.map((unit) => ({
            title: unit.title,
            url: unit.url,
        }));
    }

    return result;
}
