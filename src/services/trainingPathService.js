export async function generateTrainingPathLinks(mainUrl) {

    if (!mainUrl.endsWith("/")) {
        mainUrl += "/";
    }


    const apiUrl = mainUrl.replace(
        /https:\/\/learn\.microsoft\.com\/([^\/]+)\/training\/paths\/(.*)\/$/,
        "https://learn.microsoft.com/api/hierarchy/paths/learn-bizapps.wwl.$2?locale=$1"
    );

    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    const result = {};

    for (const module of jsonData.modules) {
        const moduleKey = `https://learn.microsoft.com${module.units[0].url.split('/').slice(0, -2).join('/')}/`;

        if (!result[moduleKey]) {
            result[moduleKey] = [];
        }

        for (const unit of module.units) {
            result[moduleKey].push({
                title: unit.title,
                url: `https://learn.microsoft.com${unit.url}`,
            });
        }
    }

    return result;
}
