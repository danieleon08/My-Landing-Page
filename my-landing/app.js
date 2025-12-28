import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// OpenAI client
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const response = await client.responses.create({
            model: 'gpt-4.1-mini',
            input: [
                {
                    role: 'system',
                    content: 'Eres un secretario que responde a los usuarios de manera profesional y educada',
                },
                {
                    role: 'user',
                    content: message,
                },
            ],
        });

        return res.status(200).json({
            answer: response.output_text,
        });

    } catch (error) {
        console.error('OpenAI error:', error);
        return res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
