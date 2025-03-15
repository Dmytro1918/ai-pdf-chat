'use client'
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

interface ScrumbleTextProps {
    duration?: number,
    className: string,
    text: string,
    chars?: string,
    speed?: number,
    revealDelay?: number
}

const ScrumbleText: React.FC<ScrumbleTextProps> = ({
    text,
    className,
    duration = 1,
    chars = "XO",
    speed = 0.3,
    revealDelay = 0
}) => {
    const textRef = useRef<HTMLSpanElement>(null);
    const [currentText, setCurrentText] = useState("");
    
    const generateRandomText = (length: number, charSet: string): string => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        return result;
    };
    useLayoutEffect(() => {
        if (!textRef.current) return;
        
        gsap.killTweensOf(textRef.current);
        
        const randomText = generateRandomText(text.length, chars);
        setCurrentText(randomText);
        
        const timeline = gsap.timeline();
        
        if (revealDelay > 0) {
            timeline.delay(revealDelay);
        }
        
        const steps = Math.max(3, Math.floor(10 / speed));
        const stepDuration = duration / steps;
        
        for (let i = 0; i < steps - 1; i++) {
            const progress = i / (steps - 1);
            timeline.to(textRef.current, {
                duration: stepDuration,
                text: {
                    value: scrambleTextWithProgress(text, chars, progress),
                    delimiter: ""
                },
                ease: "none"
            });
        }
        
        timeline.to(textRef.current, {
            duration: stepDuration,
            text: {
                value: text,
                delimiter: ""
            },
            ease: "power3.in"
        });
        
    }, [text, className, chars, speed, revealDelay, duration]);
    
    
    const scrambleTextWithProgress = (original: string, charSet: string, progress: number): string => {
        let result = '';
        for (let i = 0; i < original.length; i++) {
            if (Math.random() < progress) {
                result += original.charAt(i);
            } else {
                result += charSet.charAt(Math.floor(Math.random() * charSet.length));
            }
        }
        return result;
    };
    
    return <span ref={textRef} className={className}>{currentText}</span>;
};

export default ScrumbleText;