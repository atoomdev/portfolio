import { usePage } from 'context/page'
import useSWR from 'hooks/useSWR'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import clquConfig from '../../config'
import Button from 'components/Global/Button'
import Carousel from "react-multi-carousel";

export default function Home() {

  const { page } = usePage();
  const { data: $skills } = useSWR('/api/skills');
  const skills = $skills?.data;

  const { data: $repositories } = useSWR('/api/repos');
  const repositories = $repositories?.data;

  return (
    <>
      <div className="h-[40rem] flex flex-col justify-center items-center mb-72">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium sm:text-7xl text-black dark:text-white text-center">
          I'm <span className="relative whitespace-nowrap text-primary">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20" preserveAspectRatio="none">
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">Ates</span>
          </span>.
        </h1>
        <p className="mx-auto max-w-4xl font-display text-2xl text-gray-500/50 text-center">ㅤ</p>
        <p className="mx-auto max-w-4xl font-display text-2xl text-gray-500/50 text-center">Developer - Entrepreneur</p>
        <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mt-24">
          <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
            <span className="text-primary uppercase">Technologies</span>
            <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">13+</p>
          </div>
          <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
            <span className="text-primary uppercase">Years of Experience</span>
            <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">5+</p>
          </div>
          <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
            <span className="text-primary uppercase">Completed Projects</span>
            <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">30+</p>
          </div>
          <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
            <span className="text-primary uppercase">Repositories</span>
            <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">{repositories?.length}+</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl my-24">
        <h1 className="font-display text-5xl font-medium sm:text-7xl text-black dark:text-white">
          My <span className="relative whitespace-nowrap text-primary">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20 rotate-180" preserveAspectRatio="none">
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">repositories</span>
          </span>
        </h1>
        <div className="relative">
          {repositories && (
            <Carousel
              responsive={{
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 3.5
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 2
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1
                }
              }}
              containerClass="mt-12 relative"
              itemClass="flex justify-center"
            >
              {repositories.map((repo) => (
                <div key={repo.id} className="rounded-lg border border-gray-500/25 bg-gray-800 p-4">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-primary">
                    {repo.name}
                  </a>
                  <p className="text-gray-400">{repo.description || 'No description'}</p>
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl my-24">
        <h1 className="font-display text-5xl font-medium sm:text-7xl text-black dark:text-white">
          Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {skills?.map((skill, index) => (
            <div key={index} className="group flex flex-col items-center justify-center bg-gray-600/5 dark:shadow-2xl overflow-hidden border border-gray-500/25 hover:border-primary hover:shadow-xl rounded-lg p-4 transition-all duration-200">
              <img src={skill.icon} width="48" height="48" className="bg-white/5 p-2 w-12 h-12 rounded-md mb-4" />
              <h2 className="font-display text-xl font-medium text-black dark:text-white mb-2">{skill.name}</h2>
              <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2.5 relative">
                <div className={`bg-primary h-2.5 rounded-full`} style={{ width: `${skill.level || 50}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full min-h-[16rem] flex items-center justify-center mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <Button href="/contact" className="text-lg">Contact Me</Button>
        </div>
      </div>
    </>
  )
}
