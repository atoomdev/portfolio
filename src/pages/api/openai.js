import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: "sk-proj-EE0umSWxMEOFEu9ooOGnT3BlbkFJs4WUmcMl9ugRcfL0m7i3", // API anahtarınızı doğrudan buraya ekleyin
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const { command } = req.body;
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003", // Doğru model ismini kullanın
            prompt: command,
            max_tokens: 150,
        });
        res.status(200).json({ reply: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error('OpenAI API error:', error); // Hata ayıklama amacıyla konsola yazdır
        res.status(500).json({ error: 'Could not get a response' });
    }
}
