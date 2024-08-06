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

    const handleCommand = (e) => {
        e.preventDefault();
        if (command.toLowerCase() === 'age') {
            setOutput([...output, { command, response: '16' }]);
        } else {
            setOutput([...output, { command, response: 'Command not found' }]);
        }
        setCommand('');
    };

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
                    <div>
                        <h1 className="text-4xl font-bold">Who Am <span className="relative whitespace-nowrap text-primary">I</span>?</h1>
                        <p className="text-xl mt-1">
                            Hey, I'm Ates (atom) Altinkaynak. I am 16 years old.
                            I am a 3rd year high school student, entrepreneur, developer, hybrid athlete and investor. I have been dealing with software for about 5 years.
                            I started with QBasic, developed QBasic programs and made my biggest improvement with Python & AI.
                            I will post my repositories and projects here on my portfolio.
                            Thank you for reading. <i className="fa fa-terminal" />
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
                        <Terminal command={command} setCommand={setCommand} handleCommand={handleCommand} output={output} />
                    </div>
                    <div className="relative flex-shrink-0">
                        <img src="https://avatars.githubusercontent.com/u/79448212?v=4" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64" />
                        <div className="-right-3 top-3 absolute w-full h-full top-0 right-0 border-4 rounded-full lg:rounded-lg border-primary bg-gradient-to-t from-primary" />
                    </div>
                </div>
            </div>
        </>
    );
}

function Terminal({ command, setCommand, handleCommand, output }) {
    return (
        <div className="terminal bg-black text-white p-4 rounded-md mt-8">
            <div className="output">
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
                        className="bg-black text-white outline-none"
                    />
                </label>
            </form>
        </div>
    );
}
