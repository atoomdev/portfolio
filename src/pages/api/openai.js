import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: "sk-proj-EE0umSWxMEOFEu9ooOGnT3BlbkFJs4WUmcMl9ugRcfL0m7i3", // API anahtarınızı .env dosyasına ekleyin
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const { command } = req.body;
    try {
        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo-instruct", // Veya istediğiniz başka bir model
            prompt: command,
            max_tokens: 150,
        });
        res.status(200).json({ reply: response.data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
