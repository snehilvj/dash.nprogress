import "./nprogress.css";
import NProgress from "nprogress";

(function () {
    const getColor = (type) => {
        return window
            .getComputedStyle(document.body)
            .getPropertyValue(`--nprogress-color-${type}`);
    };

    const changeColor = (color) => {
        const root = document.querySelector(":root");
        root.style.setProperty("--nprogress-color", color);
    };

    const GOOD_COLOR = getColor("good") || "#51CF66";
    const BAD_COLOR = getColor("bad") || "#FF6B6B";

    changeColor(GOOD_COLOR);

    NProgress.configure({ easing: "ease", speed: 500 });

    window.intercept = 0;

    const increment = () => {
        if (window.intercept === 0) {
            changeColor(GOOD_COLOR);
            NProgress.start();
        } else {
            NProgress.inc(0.05);
        }
        window.intercept++;
    };

    const decrement = () => {
        window.intercept--;
        if (window.intercept === 0) {
            NProgress.done();
        }
    };

    const { fetch: originalFetch } = window;

    window.fetch = async (...args) => {
        let [resource, config] = args;
        // request interceptor here
        increment();
        const response = await originalFetch(resource, config);
        // request interceptor here
        if (response.status >= 400) {
            changeColor(BAD_COLOR);
        }
        decrement();
        return response;
    };
})();
