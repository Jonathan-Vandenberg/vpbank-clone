import axios from "axios";

const OPENAI_API_BASE_URL = "https://api.openai.com/v1";

export async function generateResponse(
  prompt: string,
  conversation: { role: string; content: string }[]
): Promise<string> {
  const response = await axios.post(
    `${OPENAI_API_BASE_URL}/chat/completions`,
    {
      max_tokens: 1024,
      model: "gpt-3.5-turbo",
      messages: conversation.concat([
        {
          role: "user",
          content: prompt,
        },
        // {
        //   role: "system",
        //   content: "",
        // },
      ]),
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.OPENAI_API_KEY
          ? process.env.OPENAI_API_KEY
          : "",
      },
    }
  );
  console.log(response);
  return response.data.choices[0].message.content;
}
