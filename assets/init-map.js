(function () {
    // Apply options AFTER <gmp-map> upgrades and exposes its inner map
    function applyOptions() {
        const el = document.getElementById('map');
        if (!el) return;

        // If the element isn't upgraded yet, wait for it
        if (window.customElements?.whenDefined) {
            customElements.whenDefined('gmp-map').then(() => setOpts(el));
        } else {
            setOpts(el);
        }
    }

    function setOpts(el) {
        const map = el.innerMap || (el.getMap?.() ?? null);
        if (!map) {
            // try again shortly if innerMap isn't ready yet
            setTimeout(() => setOpts(el), 50);
            return;
        }
        // Disable all default controls
        map.setOptions({
            disableDefaultUI: true,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            rotateControl: false,
            scaleControl: false,
            tilt: 0,
            heading: 0
        });
    }

    // Run when DOM is ready
    document.addEventListener('DOMContentLoaded', applyOptions);
    // Also handle Shopify dynamic section loads (theme editor)
    document.addEventListener('shopify:section:load', applyOptions);


})();
