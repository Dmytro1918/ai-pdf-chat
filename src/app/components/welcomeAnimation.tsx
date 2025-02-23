"use client"
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function AnimatedSlide () {
    const ref = useRef(null)
    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            let t1 = gsap.timeline()
            t1.to('#nav-bar', {
                opacity: 0,
                visibility: 'hidden',
                duration: 0.5, 
                ease: 'power2.inOut',
              });
            t1.from('#intro-slide', {
                xPercent: '-100',
                duration: 1.3,
                delay: 0.5,
            }).from(['#title1', '#title2', '#title3', '#title4', '#title5'],{
                opacity: 0,
                y: '+=30',
                stagger: 0.5,
            }).to(['#title1', '#title2', '#title3', '#title4', '#title5'],{
                opacity: 0,
                y: '-=30',
                delay: 0.3,
                stagger: 0.5,
            }).to('#intro-slide',{
                xPercent: '-100',
                duration: 1.3
            }).from('#welcome-message', {
                opacity: 0,
                duration: 1.5
            }).from('#nav-bar',{
                opacity: 1,
                visibility: 'visible',
                duration: 0.5,
                delay: 1.5,
                ease: 'power2.inOut',
            })
        }, ref)

        return () => ctx.revert()

    }, [])
    return (
        <>
            <div ref={ref} className="relative">
                <div  id="intro-slide" className="h-screen p-10 pt-40 w-screen bg-slate-50 top-0 left-0 absolute z-50 font-[var(--space-grotest)]">
                    <h1 id="title1" className="text-8xl">
                        BECOME 
                    </h1>
                    <h1 id="title2" className="text-8xl">
                        PRODUCTIVE.
                    </h1>
                    <h1 id="title3"  className="text-8xl">
                        WORK
                    </h1>
                    <h1  id="title4" className="text-8xl">
                        SMARTER.
                    </h1>
                    <h1 id="title5"  className="text-8xl">
                        OPTIMIZE YOUR PDF.
                    </h1>
                </div>
                <div id="welcome-message" className="h-full w-full bg-sky-900 text-slate-300 justify-center align-middle items-center font-[var(--space-grotest)]">
                    <p className="font-var text-6xl">
                    Glad You see here, just scroll down to start.
                    </p>
                </div>
            </div>
        </>
    )
}
