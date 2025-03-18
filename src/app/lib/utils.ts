import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const  generateRandomText = (length: number, charSet: string): string => {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return result;
}

export const  scrambleTextWithProgress = (original: string, charSet: string, progress: number): string => {
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
