import React, { useLayoutEffect, useRef } from "react";
import "../styles/FitText.css";

type FitTextProps = {
    text: string;
    isBig?: boolean;
};

export function FitText({ text, isBig = false }: FitTextProps) {
    const minPx = 10;
    const stepPx = 1;

    const ref = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Reset to CSS default first (e.g., x-large from below)
        el.style.fontSize = "";

        // One-line behavior
        el.style.whiteSpace = "nowrap";
        el.style.overflow = "hidden";
        el.style.textOverflow = "ellipsis";

        const fits = () => el.scrollWidth <= el.clientWidth;

        // Already fits at default size
        if (fits()) return;

        // "x-large" becomes computed pixels here (e.g., "24px")
        let size = parseFloat(getComputedStyle(el).fontSize);

        while (!fits() && size > minPx) {
            size -= stepPx;
            el.style.fontSize = `${size}px`;
        }
    }, [text]);

    return (
        <div ref={ref} className={isBig ? "fit-text-container-big" : "fit-text-container"}>
            {text}
        </div>
    );
}