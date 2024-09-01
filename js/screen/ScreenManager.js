export class ScreenManager {
    showElement(screen, display) {
        const element = document.getElementById(screen);
        if (element)
            element.style.display = display;
    }
    hideAllElements(screens) {
        console.log("vsfdd");
        screens.forEach((screen) => {
            const element = document.getElementById(screen);
            if (element)
                element.style.display = "none";
        });
    }
}
