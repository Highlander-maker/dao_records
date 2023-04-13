import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--juno-pink":"#FF7B7C",
    "--my-red": "#db4437",
    "--my-sand": "#f4b400",
    "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--juno-pink"],

    /* Brand */
    "--brand-primary": props["--juno-pink"],

    // Default button 
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--juno-pink"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-sand"],
    "--default-button-danger-color": props["--my-red"],

    /* State */
    "--state-info-color": props["--my-black"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-sand"],
    "--state-danger-color": props["--my-red"],

    /* Navbar */
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--juno-pink"],


});