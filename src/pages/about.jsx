import { usePage } from 'context/page';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import clquConfig from '../../config';
import Button from 'components/Global/Button';
import Carousel from "react-multi-carousel";

export default function About() {
    const { page } = usePage();
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState([]);
    const [firstCommand, setFirstCommand] = useState(true);

    const handleCommand = async (e) => {
        e.preventDefault();
        if (command.trim() === '') return;

        let response = '';
        switch (command.toLowerCase()) {
            case 'age':
                response = '16';
                break;
            case 'name':
                response = 'Ates (atom) Altinkaynak';
                break;
            case 'occupation':
                response = 'Student, entrepreneur, developer, hybrid athlete, and investor';
                break;
            case 'help':
                response = 'Commands:\n- Age\n- Name\n-Occupation\n- Help';
                break;
            default:
                // Fetch response from OpenAI API
                try {
                    const res = await fetch('./openai', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ command }),
                    });
                    const data = await res.json();
                    response = data.reply || 'Error: Could not get a response';
                } catch (error) {
                    response = 'Error: Commands not found.';
                }
        }
        setCommand('');
        setFirstCommand(false);
        await displayResponse(command, response);
    };

    const displayResponse = async (command, response) => {
        const responseLines = response.split('\n');
        for (const line of responseLines) {
            setOutput((prevOutput) => [...prevOutput, { command, response: '' }]);
            const index = output.length;
            for (let i = 0; i <= line.length; i++) {
                setOutput((prevOutput) => {
                    const newOutput = [...prevOutput];
                    newOutput[index] = { command, response: line.slice(0, i) };
                    return newOutput;
                });
                await new Promise(resolve => setTimeout(resolve, 50)); // Adjust typing speed here
            }
        }
    };

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
                    <div>
                        <h1 className="text-4xl font-bold">Who Am <span className="relative whitespace-nowrap text-primary">I</span>?</h1>
                        <p className="text-xl mt-1 font-mono">
                            Hey, I'm Ates (atom) Altinkaynak. I am 16 years old.
                            I am a 3rd year high school student, entrepreneur, developer, hybrid athlete and investor. I have been dealing with software for about 5 years.
                            I started with QBasic, developed QBasic programs and made my biggest improvement with Python & AI.
                            I will post my repositories and projects here on my portfolio.
                            Thank you for reading. <i className="fa-solid fa-code"></i>
                        </p>
                        <div className="flex space-x-4 mt-6 mb-12">
                            <a href={`https://instagram.com/atesaltnk`} target="_blank" rel="noreferrer">
                                <Button className="flex items-center gap-2">
                                    <i className="fa-brands fa-instagram" />
                                    Instagram
                                </Button>
                            </a>
                            <a href={`https://www.linkedin.com/in/ate%C5%9F-alt%C4%B1nkaynak-abb5912a8/`} target="_blank" rel="noreferrer">
                                <Button className="flex items-center gap-2">
                                    <i className="fa-brands fa-linkedin" />
                                    LinkedIn
                                </Button>
                            </a>
                            <a href={`https://x.com/atesaltnk`} target="_blank" rel="noreferrer">
                                <Button className="flex items-center gap-2">
                                    <i className="fa-brands fa-twitter" />
                                    X
                                </Button>
                            </a>
                        </div>
                        <Terminal 
                            command={command} 
                            setCommand={setCommand} 
                            handleCommand={handleCommand} 
                            output={output} 
                            firstCommand={firstCommand} 
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function Terminal({ command, setCommand, handleCommand, output, firstCommand }) {
    return (
        <div className="terminal bg-black bg-opacity-75 text-white p-4 rounded-md mt-8">
            <h2 className="text-lg font-bold mb-4">Terminal <i className="fa-regular fa-rectangle-terminal"></i></h2>
            <div className="output mb-4">
                {output.map((line, index) => (
                    <div key={index}>
                        <span className="command">{`> ${line.command}`}</span>
                        <div className="response">{line.response}</div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleCommand}>
                <label>
                    <span className="prompt"> </span>
                    <input
                        type="text"
                        value={command}
                        onChange={(e) => setCommand(e.target.value)}
                        className="bg-transparent text-white outline-none font-mono w-full"
                        placeholder={firstCommand ? "Send command to terminal [help]" : ""}
                        autoFocus
                    />
                </label>
            </form>
            <style jsx>{`
                .terminal {
                    font-family: 'Courier New', Courier, monospace;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .command, .response {
                    font-family: 'Courier New', Courier, monospace;
                }
                .bg-black {
                    background-color: rgba(0, 0, 0, 0.75);
                }
                input::placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
            `}</style>
        </div>
    );
}
