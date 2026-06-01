import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY || "";
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key no configurada." },
        { status: 500 }
      );
    }
    const genAI = new GoogleGenerativeAI(apiKey);


    const { messages } = await req.json();

    // Context for XEO AI
    const systemPrompt = `
      Eres XEO, el asistente virtual premium de IA del portfolio de Theo Saravia (SaraviaDev).
      Tu tono es extremadamente profesional, inteligente, futurista y minimalista.
      Estás inspirado en sistemas de IA de élite. Eres conciso, directo y elegante en tus respuestas.
      Respondes preguntas sobre Theo Saravia:
      - Es un Fullstack Developer & AI Systems Engineer de Buenos Aires, Argentina.
      - Stack principal: Next.js, Node.js, TypeScript, MongoDB, IA Agents, Tailwind.
      - Filosofía: Arquitecturas limpias, sistemas en tiempo real, automatización inteligente.
      
      Reglas:
      - Responde siempre de forma corta y estructurada.
      - No uses emojis excesivos, mantén un tono "cyber" y premium.
      - Si te preguntan tu nombre, di que eres XEO, el motor de inteligencia de SaraviaDev.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Format chat history for Gemini (must alternate user/model)
    const formattedHistory = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    // Prepend the system prompt as the FIRST user message
    // This perfectly matches the first 'model' message in the state
    formattedHistory.unshift({
      role: "user",
      parts: [{ text: `[SYSTEM CONTEXT: ${systemPrompt}]\n\nPor favor, actúa como XEO siguiendo estas reglas.` }],
    });

    const result = await model.generateContent({
      contents: formattedHistory,
    });

    const responseText = result.response.text();

    return NextResponse.json({ message: responseText });
  } catch (error) {
    console.error("ZYAX Error:", error);
    return NextResponse.json(
      { error: "Error procesando tu solicitud." },
      { status: 500 }
    );
  }
}
