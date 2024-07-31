import { usePage } from 'context/page';
import useSWR from 'hooks/useSWR';
import Head from 'next/head';
import Image from 'next/image';
import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import clquConfig from '../../config';
import Button from 'components/Global/Button';
import Carousel from "react-multi-carousel";

export default function About() {
    const { page } = usePage();

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
                    <div>
                        <h1 className="text-4xl font-bold">Who Am <span className="relative whitespace-nowrap text-primary">I</span>?</h1>
                        <p className="text-xl mt-1">
                            Hey, I'm at00m. I am 16 years old.
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
