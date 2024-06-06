import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    fontFamily: {
      oswald: "var(--font-oswald)",
      roboto: "var(--font-roboto)",
    },

    backgroundImage: {
      hero: "url(/assets/img/hero/hero-pic.jpg)",
      achievements: "url(/assets/img/achieve/achieve-img-1.jpg)",
      about: "url(/assets/img/about/pic-1.jpg)",
      blog: "url(/assets/img/blog/pic-2.jpg)",
      tour: "url(/assets/img/tours/bg-pic.jpg)",
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#F5F5F5",
          100: "#FAFAFA ",
          200: "#F5F5F5",
          300: "#E5E5E5 ",
        },
        accent: "#708a5d",
      },
    },
  },
  plugins: [],
};
export default config;
