/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s ease infinite",
        "slow-spin": "slow-spin 10s linear infinite",
        "glitch-skew": "glitch-skew 1s infinite linear alternate-reverse",
        "glitch-anim1": "glitch-anim1 0.8s infinite linear alternate-reverse",
        "glitch-anim2": "glitch-anim2 1.2s infinite linear alternate-reverse",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "glitch-skew": {
          "0%": { transform: "skew(0deg)" },
          "20%": { transform: "skew(-2deg)" },
          "40%": { transform: "skew(2deg)" },
          "60%": { transform: "skew(0deg)" },
          "80%": { transform: "skew(4deg)" },
          "100%": { transform: "skew(0deg)" },
        },
        "glitch-anim1": {
          "0%": {
            clipPath: "inset(40% 0 60% 0)",
            transform: "translate(-10px, 5px)",
          },
          "20%": {
            clipPath: "inset(30% 0 58% 0)",
            transform: "translate(10px, -5px)",
          },
          "40%": {
            clipPath: "inset(65% 0 25% 0)",
            transform: "translate(-10px, 5px)",
          },
          "60%": {
            clipPath: "inset(25% 0 65% 0)",
            transform: "translate(10px, -5px)",
          },
          "80%": {
            clipPath: "inset(80% 0 15% 0)",
            transform: "translate(-10px, 5px)",
          },
          "100%": {
            clipPath: "inset(40% 0 60% 0)",
            transform: "translate(0, 0)",
          },
        },
        "glitch-anim2": {
          "0%": {
            clipPath: "inset(20% 0 40% 0)",
            transform: "translate(10px, -5px)",
          },
          "20%": {
            clipPath: "inset(50% 0 20% 0)",
            transform: "translate(-10px, 5px)",
          },
          "40%": {
            clipPath: "inset(35% 0 65% 0)",
            transform: "translate(10px, -5px)",
          },
          "60%": {
            clipPath: "inset(70% 0 35% 0)",
            transform: "translate(-10px, 5px)",
          },
          "80%": {
            clipPath: "inset(15% 0 65% 0)",
            transform: "translate(10px, -5px)",
          },
          "100%": {
            clipPath: "inset(60% 0 20% 0)",
            transform: "translate(0, 0)",
          },
        },
      },
      colors: {
        purple: {
          500: "#7964db",
        },
      },
    },
  },
  plugins: [],
};
