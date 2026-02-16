import { GoogleGenerativeAI } from "@google/generative-ai";

// Try both Vite and process conventions for maximum compatibility
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || (process.env.VITE_GEMINI_API_KEY as string);

if (!API_KEY) {
  console.warn("API Key missing. AI features will be disabled.");
}

const genAI = new GoogleGenerativeAI(API_KEY || "");
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
