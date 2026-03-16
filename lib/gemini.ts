import { GoogleGenerativeAI } from "@google/generative-ai";

export function getGeminiClient() {
  const keysString = process.env.GEMINI_API_KEYS || process.env.GEMINI_API_KEY || "";
  
  if (!keysString) {
    console.warn("No Gemini API keys found in environment variables.");
    return new GoogleGenerativeAI("");
  }

  // Split by comma and remove empty/whitespace keys
  const keys = keysString.split(",").map(k => k.trim()).filter(Boolean);
  
  if (keys.length === 0) {
    return new GoogleGenerativeAI("");
  }

  // Pick a random key
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  
  console.log(`Using Gemini API Key ending in ...${randomKey.slice(-4)}`);
  
  return new GoogleGenerativeAI(randomKey);
}
