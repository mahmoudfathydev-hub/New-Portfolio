import { useMemo } from "react";

type LineConfig = {
    top: number;
    duration: number;
    delay: number;
    opacity: number;
};

interface BackgroundLightLinesProps {
    count?: number;
    length?: number;
    rotate?: number;
    direction?: "left" | "right";
}

const BackgroundLightLines = ({
    count = 4,
    length = 1400,
    rotate = 90,
    direction = "left",
}: BackgroundLightLinesProps) => {
    const lines = useMemo<LineConfig[]>(() => {
        return Array.from({ length: count }).map(() => ({
            top: Math.random() * 100,
            duration: 5 + Math.random() * 3,
            delay: Math.random() * 3,
            opacity: 0.4 + Math.random() * 0.6,
        }));
    }, [count]);

    const isRight = direction === "right";

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
            {lines.map((line, i) => (
                <div
                    key={i}
                    className="absolute h-[3px] blur-[0.5px]"
                    style={{
                        top: `${line.top}%`,
                        left: isRight ? "auto" : "-20%",
                        right: isRight ? "-20%" : "auto",
                        width: `${length}px`,
                        opacity: line.opacity,
                        transform: `rotate(${rotate}deg) scaleX(var(--scale))`,
                        transformOrigin: isRight ? "right" : "left",
                        background:
                            "linear-gradient(90deg, transparent, rgba(233,155,99,0.9), transparent)",
                        animation: `light-line ${line.duration}s ease-in-out ${line.delay}s infinite`,
                    }}
                />
            ))}

            <style>
                {`
                @keyframes light-line {
                    0% {
                        --scale: 0;
                        opacity: 0;
                    }
                    50% {
                        --scale: 1;
                        opacity: 1;
                    }
                    100% {
                        --scale: 0;
                        opacity: 0;
                    }
                }
            `}  
            </style>
        </div>
    );
};

export default BackgroundLightLines;
