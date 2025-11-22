export async function initMap({
    id,
    mapId,
    lat,
    lng,
    zoom
}) {
    const { Map } = await google.maps.importLibrary("maps");
    const { ColorScheme } = await google.maps.importLibrary("core"); // Import ColorScheme

    const mapOptions = {
        center: { lat, lng },
        zoom,
        mapId, // Ensure this Map ID has both light and dark styles associated
        colorScheme: ColorScheme.DARK, // Set the color scheme here during initialization
        disableDefaultUI: true,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        rotateControl: false,
        scaleControl: false,
        tilt: 0,
        heading: 0
    };

    const map = new Map(document.getElementById(id), mapOptions);
    map.addListener("idle", () => console.log("Map is loaded"));
    window.__map__ = map;
    window.__chips__ = [];
}

export function waitForMap(onExecuteAfterLoad) {
    if (window.google && window.__map__ && window.__chips__) {
        onExecuteAfterLoad(window.__map__, window.__chips__);
    } else {
        setTimeout(() => waitForMap(onExecuteAfterLoad), 100);
    }
}