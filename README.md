# AI-Powered Portfolio

This repository contains the source code for my personal portfolio website, built with [Next.js](https://nextjs.org/). The main feature is an interactive chatbot that allows visitors (especially recruiters) to learn about my professional background in a dynamic way.

The chatbot is powered by Google's Gemini model and is configured to respond as I would, based on my resume, project history, and overall experience.

## Getting Started

First, set up your environment variables. Create a `.env.local` file in the project root and add your Gemini API key:

```
GEMINI_API_KEY="YOUR_API_KEY_HERE"
```

Next, install the dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **AI:** [Google Gemini](https://ai.google.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)

## Using This for Your Own Portfolio

Feel free to use this project for your own personal portfolio. To adapt it, you'll need to:

-   **Update the system prompt:** Change the LLM system prompt to contain your own professional experience and define the AI's personality.
-   **Change the color scheme:** Modify the Tailwind CSS theme to match your preferences.

## License

This project is open source.

## Credits

This project was created by Abderrahmane Gourragui.
