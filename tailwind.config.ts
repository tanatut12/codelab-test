import type { Config } from "tailwindcss";

export const themeConfig = {
  fontFamily: {
    FCIconic: ["FC Iconic", "sans-serif"],
  },
  fontSize: {
    base: "1.25rem",
    "2sm": "16px",
    "fix-23": "23px",
    "3.5xl": "2rem",
    "4.5xl": "2.875rem",
    "5.5xl": "3.625rem",
    "3xxl": "2rem",
    "7.5xl": "5.125rem",
  },
  color: {
    primary: {
      100: "#221692",
      200: "#1A1354",
      900: "#282C49",
    },
    secondary: {
      500: "#F47B10",
    },
    thirdinary: {
      500: "#13C19F",
    },
    dark: {
      "000": "#000000",
      "100": "#171717",
      "200": "#2B2F32",
      500: "#6F6753",
    },
    light: {
      300: "#F4F6F8",
      400: "#F4EDDB",
      500: "#E2DBC4",
    },
    gray: {
      300: "#EBEBEB",
    },
    "app-neutral": {
      600: "#F9FAFB",
      700: "#8C8C8C",
      800: "#595959",
    },
    darker: "#595959",
    darkGreen: "#466F6D",
    grayGreen: "#354646",
    brown: "#705519",
    text: "#1D1E1E",
    white: "#FFFFFF",
    whiteNormal: "#CCCCCC",
    error: "#F5222D",
    description: "#545555",
    accessibilityYellow: "#FEFF03",
    overlay: {
      tertiary: "rgba(0, 0, 0, 0.45)",
    },
  },
  screens: {
    form: "640px",
    app: "1214px",
    "app-lg": "1264px",
    "app-extra": "1440px",
    content: "1008px",
    ultra: "3440px",
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: themeConfig.fontFamily,
      fontSize: themeConfig.fontSize,
      colors: {
        primary: themeConfig.color.primary,
        secondary: themeConfig.color.secondary,
        thirdinary: themeConfig.color.thirdinary,
        dark: themeConfig.color.dark,
        light: themeConfig.color.light,
        gray: themeConfig.color.gray,
        "app-neutral": themeConfig.color["app-neutral"],
        darker: themeConfig.color.darker,
        darkGreen: themeConfig.color.darkGreen,
        grayGreen: themeConfig.color.grayGreen,
        brown: themeConfig.color.brown,
        text: themeConfig.color.text,
        whiteNormal: themeConfig.color.whiteNormal,
        error: themeConfig.color.error,
        description: themeConfig.color.description,
        overlay: themeConfig.color.overlay,
        accessibilityYellow: themeConfig.color.accessibilityYellow,
      },
      screens: themeConfig.screens,
      backgroundImage: {
        "primary-gradient-1":
          "linear-gradient(90deg, #221692 50%, #1A1354 60%)",
        leaf: "url('/svgs/leaf.svg')",
        aboutPlantneryMobile:
          "url('/images/about-plantnery-footage-mobile.png')",
        aboutPlantneryTablet:
          "url('/images/about-plantnery-footage-tablet.png')",
        aboutPlantneryDesktop:
          "url('/images/about-plantnery-footage-desktop.png')",
        innovation: "url('/images/innovation-background.png')",
        innovationSolution1:
          "linear-gradient(rgba(0, 0, 0, 0.4)), url('/images/innovation-solution-1.png')",
        innovationSolution2:
          "linear-gradient(rgba(0, 0, 0, 0.4)), url('/images/innovation-solution-2.png')",
        innovationSolution3:
          "linear-gradient(rgba(0, 0, 0, 0.4)), url('/images/innovation-solution-3.png')",
        innovationSolution4:
          "linear-gradient(rgba(0, 0, 0, 0.4)), url('/images/innovation-solution-4.png')",
        innovationSolution5:
          "linear-gradient(rgba(0, 0, 0, 0.4)), url('/images/innovation-solution-5.png')",
        lineDashed: "url('/images/line-dashed.png')",
        lineCurveMobile: "url('/images/line-curve-mobile.png')",
        lineCurveTablet: "url('/images/line-curve-tablet.png')",
        lineCurveDesktop: "url('/images/line-curve-desktop.png')",
      },
      backgroundPosition: {
        positionLineDashed: "0 50px",
        positionLineCurveMobile: "bottom 133px left 0",
        positionLineCurveTablet: "bottom left",
        positionLineCurveDesktop: "top left",
      },
      backgroundSize: {
        "zoom-sm": "24.25rem",
        "zoom-md": "57rem",
        "zoom-lg": "74rem",
        sizelineCurveMobile: "100% 2340px",
        sizelineCurveTablet: "100% 2340px",
        sizelineCurveDesktop: "100% 1463px",
      },
      borderRadius: {
        10: "10px",
        20: "20px",
        100: "100px",
        sectionCard: "120px 0px 0px 0px",
      },
      boxShadow: {
        button:
          "0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);",
      },
      lineHeight: {
        7.5: "30px",
        11: "48px",
        13: "69px",
      },
      filter: {
        accessibilityYellow: "grayscale(1)",
      },
      gap: {
        4.5: "18px",
        18: "72px",
      },
      padding: {
        7.5: "30px",
        20.5: "88px",
      },
      margin: {
        7.5: "30px",
        18: "72px",
      },
    },
  },
  plugins: [],
};
export default config;
