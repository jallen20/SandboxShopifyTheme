export const initNav = (event, onNavEvent) => {
    console.log("INIT NAV")
    let activeNav = document.querySelector('.active')
    console.log("activeNav", activeNav)
    if (activeNav && [activeNav]?.length) {
        [activeNav].forEach(n => n.classList.remove('active'));
        const selectedNav = event.target;
        selectedNav.classList.add('active');
        onNavEvent(selectedNav);
    } else {
        activeNav = document.getElementById("nav_home");
        activeNav.classList.add('active');
    }


}