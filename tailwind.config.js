/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-50": "#EFF4FE",
        "primary-100": "#E1ECFE",
        "primary-200": "#C9DBFC",
        "primary-300": "#A8C2F9",
        "primary-400": "#859FF4",
        "primary-500": "#687DEC",
        "primary-600": "#525FE1",
        "primary-700": "#3D47C5",
        "primary-800": "#343E9F",
        "primary-900": "#31397E",
        "primary-950": "#1D2149",
        "secondary-50": "#fff3f1",
        "secondary-100": "#ffe6e1",
        "secondary-200": "#ffd0c7",
        "secondary-300": "#ffb0a0",
        "secondary-400": "#ff937d",
        "secondary-500": "#f85b3b",
        "secondary-600": "#e53f1d",
        "secondary-700": "#c13114",
        "secondary-800": "#a02c14",
        "secondary-900": "#842a18",
        "secondary-950": "#481207",
        "light-100": "#212121",
        "light-80": "#4d4d4d",
        "light-50": "#909090",
        "light-30": "#BCBCBC",
        "light-10": "#E8E8E8",
        "dark-100": "#FFFFFF",
        "dark-90": "#E6E6E6",
        "dark-70": "#B3B3B3",
        "dark-50": "#7F7F7F",
        "light-bg": "#F1F0F4",
        "light-bg-2": "#FDFCFC",
        "dark-bg": "#181925",
        "dark-bg-2": "#292A36",
        wpu: "#BC66FF",
        "kelas-terbuka": "#FF9D65",
        pzn: "#5196FF",
        html: "#EF652A",
        "html-alt": "#f28045",
        css: "#2965f1",
        "css-alt": "#5ca3fe",
        javascript: "#F7DF1E",
        "javascript-alt": "#c79a07",
        php: "#777BB4",
        "php-alt": "#a6afd3",
        "python-1": "#ffde57",
        "python-2": "#4584b6",
        bootstrap: "#712CF9",
        "bootstrap-alt": "#beb0ff",
        laravel: "#FF2D20",
        "laravel-alt": "#ff6d64",
        tailwind: "#38BDF8",
        figma: "#FF7237",
        ui: "#FE74A7",
        ux: "#874FFF",
        "ux-alt": "#c3b1ff",
        mysql: "#00758F",
        "mysql-alt": "#00fffb",
        vue: "#42B883",
        keras: "#D00000",
        "keras-alt": "#ff5959",
        tensorflow: "#FF6F00",
        postgresql: "#336791",
        "postgresql-alt": "#69a0c7",
        sass: "#CC6699",
        sqlite: "#003B57",
        "sqlite-alt": "#89D0F2",
        git: "#F05133",
        jquery: "#0769AD",
        "jquery-alt": "#3cb1f4",
        vite: "#646CFF",
        "vite-alt": "#bcc0ff",
        cv: "#3777FF",
        "cv-alt": "#599aff",
        responsive: "#FF8080",
        ai: "#b280cc",
        "ai-alt": "#e5d4ef",
        "deep-learning": "#4a7f4d",
        "deep-learning-alt": "#92ba92",
        numpy: "#4DABCF",
        "numpy-alt": "#7fc8e1",
        pandas: "#150458",
        "pandas-alt": "#8c7dff",
        "image-classification": "#47857e",
        "image-classification-alt": "#b6d9d2",
        nlp: "#f99107",
        "nlp-alt": "#ffe088",
        "sentiment-analysis": "#0a71eb",
        "sentiment-analysis-alt": "#50c5ff",
        sklearn: "#F89939",
        matplotlib: "#11557C",
        "matplotlib-alt": "#65BAEA",
      },
      screens: {
        xs: "425px",
      },
      dropShadow: {
        "custom-primary": "0 0 5px #859FF4",
        "custom-wpu": "0 0 5px #BC66FF",
        "custom-kelas-terbuka": "0 0 5px #FF9D65",
        "custom-pzn": "0 0 5px #5196FF",
      },
      keyframes: {
        "smooth-motion": {
          "0%": { transform: "translateX(0px)", opacity: "100%" },
          "33.3%": { transform: "translateX(15px)", opacity: "75%" },
          "66.6%": { transform: "translateX(-30px)", opacity: "75%" },
          "100%": { transform: "translateX(0px)", opacity: "100%" },
        },
        startrise: {
          from: {
            opacity: "0%",
            transform: "translateY(16px)",
          },
          to: {
            opacity: "100%",
            transform: "translateY(0)",
          },
        },
        zoomin: {
          from: {
            opacity: "0",
            transform: "scale(0)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        zoomout: {
          from: {
            opacity: "1",
            transform: "scale(1)",
          },
          to: {
            opacity: "0",
            transform: "scale(0)",
          },
        },
        navMobileShow: {
          from: {
            visibility: "hidden",
            transform: "translateX(100%)",
          },
          to: {
            visibility: "visible",
            transform: "translateX(0)",
          },
        },
        navMobileHide: {
          from: {
            visibility: "visible",
            transform: "translateX(0)",
          },
          to: {
            visibility: "hidden",
            transform: "translateX(100%)",
          },
        },
        slideUpIn: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideUpOut: {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
        },
      },
      animation: {
        "smooth-motion": "smooth-motion 6s ease-in-out infinite alternate",
        startrise: "startrise 1300ms ease-in",
        "zoom-in": "zoomin 500ms ease-in",
        "zoom-out": "zoomout 500ms ease-out",
        "nav-mobile-show": "navMobileShow 700ms ease-in-out",
        "nav-mobile-hide": "navMobileHide 700ms ease-in-out",
        "slide-up-in": "slideUpIn 500ms ease-in",
        "slide-up-out": "slideUpOut 500ms ease-out",
      },
    },
  },
  plugins: [],
};
