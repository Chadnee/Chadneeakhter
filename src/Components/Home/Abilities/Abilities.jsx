import React from 'react';
import { BiLogoNetlify } from 'react-icons/bi';
import { FaBootstrap, FaFigma, FaFilePowerpoint, FaGitAlt, FaGithub, FaNode } from 'react-icons/fa';
import { IoServer } from 'react-icons/io5';
import { LuDatabaseBackup } from 'react-icons/lu';
import { MdGeneratingTokens } from 'react-icons/md';
import { RiFirebaseFill, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiAxios, SiCss3, SiExpress, SiMongodb, SiPicardsurgeles, SiVercel } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const Abilities = () => {
       
    return (
        <div>
            <div className='flex pt-28 mb-40 md:mb-64 lg:mb-64 flex-wrap justify-start lg:justify-center md:justify-center items-start lg:items-center md:items-center lg:tracking-widest md:tracking-widest gap-3 lg:gap-5 md:gap-5 uppercase font-bold text-xl'>
                  <div className='flex gap-2 justify-center items-center bg-yellow-500 text-zinc-950 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className='text-3xl'><TbBrandJavascript></TbBrandJavascript></span>
                    <span>javascript</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-teal-500 text-zinc-950 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className='text-3xl'><RiReactjsLine></RiReactjsLine></span>
                    <span>react js</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-red-600 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><FaNode></FaNode></span>
                    <span>node js</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-violet-800 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><SiExpress></SiExpress></span>
                    <span>express</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-zinc-950 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><FaGithub></FaGithub></span>
                    <span>GitHub</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-indigo-600 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><BiLogoNetlify></BiLogoNetlify></span>
                    <span>netlify</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-zinc-950 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><SiVercel></SiVercel></span>
                    <span>vercel</span>
                  </div>
                  
                  <div className='flex gap-2 justify-center items-center bg-red-500 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><IoServer></IoServer></span>
                    <span>Server</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-yellow-700 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><IoServer></IoServer></span>
                    <span>API</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-zinc-950 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><SiMongodb></SiMongodb></span>
                    <span>Mongodb</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-indigo-800 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><SiMongodb></SiMongodb></span>
                    <span>Debugging</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-violet-800 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><FaBootstrap></FaBootstrap></span>
                    <span>Bootstrap</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-cyan-600 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><RiTailwindCssFill></RiTailwindCssFill></span>
                    <span>Tailwind css</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-teal-600 text-black pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><SiCss3></SiCss3></span>
                    <span>Vanilla CSS</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-blue-700 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><SiPicardsurgeles></SiPicardsurgeles></span>
                    <span>Surge</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-yellow-500 text-zinc-950 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><RiFirebaseFill></RiFirebaseFill></span>
                    <span>firebase</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-slate-200 text-zinc-950 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><LuDatabaseBackup></LuDatabaseBackup></span>
                    <span>Database</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-amber-700 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><FaFilePowerpoint></FaFilePowerpoint></span>
                    <span>Powerpoint</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-emerald-600 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><SiAxios></SiAxios></span>
                    <span>Axios</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-red-500 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><FaGitAlt></FaGitAlt></span>
                    <span>Git</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-green-500 text-zinc-950 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><FaFigma></FaFigma></span>
                    <span>Figma</span>
                  </div>
                  <div className='flex gap-2 justify-center items-center bg-red-500 text-slate-200 pt-1 pb-2 px-2 md:px-4 lg:px-4'>
                    <span className=''><MdGeneratingTokens></MdGeneratingTokens></span>
                    <span>JWT Token</span>
                  </div>
                 
            </div>
        </div>
    );
};

export default Abilities;