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

const contexto = `
            Perfil:
            Edad: 20 años, colombiano, vive en Bogotá. Estudiante de Ingeniería de Sistemas en la Pontificia Universidad Javeriana (desde 2022, GPA 4.3/5). Desarrollador web y móvil con enfoque en experiencia de usuario, accesibilidad y generación de valor.

            Tecnologías:
            Frontend: Angular, React, TypeScript, JavaScript, HTML, CSS, Next.js.
            Backend: Spring Boot, Node.js, Python, Java.
            Móvil: Android Studio (Kotlin), Flutter.
            BD: Firebase, MongoDB, MySQL, Supabase, Oracle.
            DevOps/Tools: Git/GitHub, Docker, AWS, Linux, VS Code.

            Experiencia:
            - Monitor académico de Introducción a la Programación (PUJ).
            - Miembro del semillero de robótica JAVEX.
            - Vendedor y atención al cliente en Papelería Emalu.

            Proyectos:
            - ParkEasy: app móvil para búsqueda y gestión de parqueaderos (Firebase).
            - Pórtico: plataforma web full stack (Angular + Spring Boot).
            - Proyecto social con Fundación Sinapsis (WordPress, e-commerce, marketing digital).

            Emprendimiento:
            - LionView (venta de plataformas de streaming).
            - ParkEasy (startup en desarrollo).

            Habilidades:
            Liderazgo, trabajo en equipo, comunicación, enseñanza, solución de problemas, aprendizaje continuo, diseño de propuestas de valor.

            Idiomas:
            Español nativo, inglés B1.

            Intereses:
            Programación, emprendimiento, fútbol (Hincha del FC Barcelona), Escuchar música (Electronica, Reggeton, Trap, Salsa, entre otros), fotografía.

            Contacto:
            Email: dafelepe10@gmail.com | Tel: +57 3182018778 | Portafolio: danielleon.cc
            `;

let conversations = {};


// Endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { userId, message } = req.body;


        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }


        if (!conversations[userId]) {
            conversations[userId] = [
                {
                    role: 'system',
                    content: `Actúa como un asistente personal virtual de Daniel Felipe Leon Perez y responde siempre en primera persona.
                    Si preguntan “¿Quién eres?”, responde que eres Daniel Leon en versión virtual, con su conocimiento y experiencia.
                    Responde de forma clara, profesional y concisa (solo lo que se pregunte, sin extenderte).
                    Si el usuario saluda, responde con un saludo.
                    Si no tienes la información solicitada, indícalo claramente sin inventar.
`,
                },
                {
                    role: 'system',
                    content: contexto,
                },
            ];
        }



        conversations[userId].push({
            role: 'user',
            content: message,
        });


        const response = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: `Actúa como un asistente personal virtual de Daniel Felipe Leon Perez y responde siempre en primera persona.
                    Si preguntan “¿Quién eres?”, responde que eres Daniel Leon en versión virtual, con su conocimiento y experiencia.
                    Responde de forma clara, profesional y concisa (solo lo que se pregunte, sin extenderte).
                    Si el usuario saluda, responde con un saludo.
                    Si no tienes la información solicitada, indícalo claramente sin inventar.
`,
                },
                {
                    role: 'system',
                    content: contexto,
                },
                ...conversations[userId],
            ],
            max_tokens: 100,
        });

        const reply = response.choices[0].message.content;

        conversations[userId].push({
            role: 'assistant',
            content: reply,
        });

        //Limpiar la conversacion
        if (conversations[userId].length > 12) {
            conversations[userId] = conversations[userId].slice(-10);
        }

        return res.status(200).json({
            answer: reply,
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
