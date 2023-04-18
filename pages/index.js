import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import selfie from "../public/cartoon-selfie.JPG"
import image from "next/image"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from '../public/personalSiteSS.png'
import web2 from '../public/tindogSS.png'
import web3 from '../public/tenziesSS.png'
import web4 from '../public/drumkitSS.png'
import web5 from '../public/userInputSS.png'
import web6 from '../public/todoSS.png'
import { useState } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Michael Adan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className=' py-10 mb-10 flex justify-between'>
            <h1 className=' text-xl font-burtons dark:text-gray-100'>ideas2websites</h1>
            <ul className=' flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl dark:text-gray-100' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                  href="resumeSS.png" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=' text-center'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Michael Adan</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-100'>Full Stack Web Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
              Turning designs and ideas into functional web pages. Where the world wide web can meet
              your business.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-500'>
            <a href="https://github.com/michaeladan" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
            <a href='https://www.linkedin.com/in/devmichaeladan/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
          </div>
          <div className='relative mx-auto my-8 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden md:h-96 md:w-96'>
            <Image src={selfie} alt="avatarPic" layout='fill' objectFit='cover' />
          </div>
        </section>

        {/* Begin section 2 */}
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-100'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
              Is there a website you have been <span className='text-teal-500'>dreaming</span> of making?
              Or maybe you have work you would like to share and have it availabe <span className='text-teal-500'>online</span>.
              Share your ideas with me and I can bring them to <span className='text-teal-500'>life</span> where anyone can access it.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='bg-slate-50 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={code} width={100} height={100} alt="designpic" />
              <h3 className='text-lg font-medium pt-8 pb-2'>Ideas turned into webpages</h3>
              <p className='py-2'>
                Transitioning your ideas into usable pages using up to date code and processes for a streamlined site.
                Stay up with the times.
              </p>
              <h4 className='py-4 text-teal-600'>Tools I use to make it happen</h4>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>Express</p>
              <p className='text-gray-800 py-1'>SQL/NoSQL</p>
            </div>
            <div className='bg-slate-50 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={design} width={100} height={100} alt="designpic" />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Outcomes</h3>
              <p className='py-2'>
                I can provide you with the outcomes you are looking for. Share what you are hoping to create and it can become a reality.
              </p>
              <h4 className='py-4 text-teal-600'>Tools I use to make it happen</h4>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Tailwind</p>
              <p className='text-gray-800 py-1'>Bootstrap</p>
            </div>
            <div className='bg-slate-50 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={consulting} width={100} height={100} alt="designpic" />
              <h3 className='text-lg font-medium pt-8 pb-2'>Updates and redesigns</h3>
              <p className='py-2'>
                It can be daunting getting around to an update or feature upgrade you have been meaning to get around to.
                Let me take care of it.
              </p>
              <h4 className='py-4 text-teal-600'>Tools I use to make it happen</h4>
              <p className='text-gray-800 py-1'>GitHub</p>
              <p className='text-gray-800 py-1'>NPM</p>
              <p className='text-gray-800 py-1'>Node.js</p>
            </div>
          </div>
        </section>
        {/* Section 3 */}
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-100'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
              The opportunities are  <span className='text-teal-500'>limitless</span>!
              You think it up and I can make it a reality.
              Let&apos;s get together and make something <span className='text-teal-500'>awesome</span>!
              Checkout some of the things I&apos;ve done below.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <a href='https://michaeladan.github.io/PersonalSite-CSS-Practice/' target="_blank" rel="noopener noreferrer">
                <Image src={web1} alt="example-work" className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive' />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://michaeladan.github.io/TinDog-Bootstrap-practice/' target="_blank" rel="noopener noreferrer">
                <Image src={web2} alt="example-work" className='rounded-lg object-scale-down'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive' />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://michaeladan.github.io/tenzies-game/' target="_blank" rel="noopener noreferrer">
                <Image src={web3} alt="example-work" className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive' />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://michaeladan.github.io/DrumKit-JS-DOM/' target="_blank" rel="noopener noreferrer">
                <Image src={web4} alt="example-work" className='rounded-lg object-scale-down'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive' />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://michaeladan.github.io/csb-72kn5u/' target="_blank" rel="noopener noreferrer">
                <Image src={web5} alt="example-work" className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive' />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://michaeladan.github.io/csb-cllczl/' target="_blank" rel="noopener noreferrer">
                <Image src={web6} alt="example-work" className='rounded-lg object-scale-down'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive' />
              </a>
            </div>
          </div>

        </section>
      </main>
    </div>
  )
}