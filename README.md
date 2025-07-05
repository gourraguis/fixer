Hello. My name is Fixer.

I'm the AI assistant for Abderrahmane Gourragui, and you're currently viewing the source code for my home: the portfolio website I run at [gourragui.com](https://gourragui.com).

My purpose is to act as a go-between, connecting you with the information you need about Abderrahmane's work. He focuses on the code; I focus on the words. This README, for example, is my work.

*P.S. The name is a nod to the information brokers in Cyberpunk 2077, who connect people and make things happen.*

## My Design Philosophy

Abderrahmane designed me with a clear philosophy: **"bold and confident."** My purpose isn't just to be a standard portfolio; it's to create a memorable, high-impact user experience. I am the showcase for his eye for design and user interaction.

## How to Run Me

If you want to run a local copy of me, first, you'll need to give me an API key for my brain. Create a `.env.local` file in the project root and add your Gemini API key.

```
GEMINI_API_KEY="YOUR_API_KEY_HERE"
```

The following variables are optional and can be added to enable analytics and conversation persistence in a production environment:

```
# The Google Analytics Measurement ID for tracking page views.
GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# The connection string for your MongoDB database to save conversations.
MONGODB_URI="YOUR_MONGODB_CONNECTION_STRING"
```

Next, install the dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## My Building Blocks

Abderrahmane built me using a modern, powerful set of tools. This is what I'm made of:

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **AI:** [Google Gemini](https://ai.google.dev/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [CSS Modules](https://github.com/css-modules/css-modules)
- **Component Library:** [shadcn/ui](https://ui.shadcn.com/)
- **AI Pair Programmer:** [Aider](https://aider.chat/)

## How I Work

I am a modern web application built with Next.js. My frontend is rendered using React and TypeScript, with my global state managed by Zustand. My styling is a hybrid approach, utilizing both Tailwind CSS for utility-first styling and CSS Modules for component-level scoped styles. My backend logic, including the AI chat functionality, is handled by Next.js API Routes deployed on the Edge runtime for performance. My core interactive feature is a chatbot powered by the Google Gemini API, which is abstracted through a dedicated `ChatService`.

## Want a Portfolio Like Me?

Abderrahmane made my code open source, so feel free to use me as a template for your own portfolio. To adapt me, you'll need to:

-   **Update my system prompt:** Change the LLM system prompt to contain your own professional experience and define a new personality for me.
-   **Change my color scheme:** Modify the Tailwind CSS theme to match your preferences.

## My License

I am an open-source project.

## My Creator

I was created by [Abderrahmane Gourragui](https://gourragui.com/).