(function() {
    document.addEventListener('DOMContentLoaded', async (e) => {
        await customElements.whenDefined("gmp-map");
        const mapEl = document.querySelector("gmp-map");
        const map = mapEl.innerMap;
        console.log("MAP", map);
        map.addListener("idle", () => console.log("Map is loaded"));
        window.__map__ = map;
        window.__chips__ = [];
    });
})();

export function waitForMap(onExecuteAfterLoad) {
    if (window.google && window.__map__ && window.__chips__) {
        onExecuteAfterLoad(window.__map__, window.__chips__);
    } else {
        setTimeout(() => waitForMap(onExecuteAfterLoad), 100);
    }
}