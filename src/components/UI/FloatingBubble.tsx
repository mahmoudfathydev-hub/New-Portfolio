import React from "react";

interface FloatingBubblesProps {
    count?: number;
    color?: string; // اللون الأساسي
}

const FloatingBubbles: React.FC<FloatingBubblesProps> = ({
    count = 6,
    color = "#e99b63",
}) => {
    const bubbles = Array.from({ length: count });

    return (
        <>
            <style>{`
                ${bubbles.map((_, i) => {
                const moveX1 = (Math.random() - 0.5) * 150;
                const moveY1 = (Math.random() - 0.5) * 150;
                const moveX2 = (Math.random() - 0.5) * 150;
                const moveY2 = (Math.random() - 0.5) * 150;
                const moveX3 = (Math.random() - 0.5) * 150;
                const moveY3 = (Math.random() - 0.5) * 150;
                const scale1 = 0.8 + Math.random() * 0.4;
                const scale2 = 0.8 + Math.random() * 0.4;
                const scale3 = 0.8 + Math.random() * 0.4;
                const opacity1 = 0.2 + Math.random() * 0.4;
                const opacity2 = 0.2 + Math.random() * 0.4;
                const opacity3 = 0.2 + Math.random() * 0.4;

                return `
                        @keyframes bubble-float-${i} {
                            0% { 
                                transform: translate(0px, 0px) scale(1); 
                                opacity: ${opacity1};
                            }
                            25% { 
                                transform: translate(${moveX1}px, ${moveY1}px) scale(${scale1}); 
                                opacity: ${opacity2};
                            }
                            50% { 
                                transform: translate(${moveX2}px, ${moveY2}px) scale(${scale2}); 
                                opacity: ${opacity3};
                            }
                            75% { 
                                transform: translate(${moveX3}px, ${moveY3}px) scale(${scale3}); 
                                opacity: ${opacity1};
                            }
                            100% { 
                                transform: translate(0px, 0px) scale(1); 
                                opacity: ${opacity2};
                            }
                        }
                    `;
            }).join('\n')}
            `}</style>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {bubbles.map((_, i) => {
                    const size = 60 + Math.random() * 100; // Random size
                    const top = Math.random() * 90;
                    const left = Math.random() * 90;
                    const duration = 8 + Math.random() * 12; // Random duration 8-20s
                    const delay = Math.random() * 5;
                    const initialOpacity = 0.3 + Math.random() * 0.4; // Random initial opacity

                    return (
                        <span
                            key={i}
                            className="absolute rounded-full blur-2xl"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                top: `${top}%`,
                                left: `${left}%`,
                                background: `radial-gradient(circle, ${color}80, ${color}20, transparent)`,
                                animation: `bubble-float-${i} ${duration}s ease-in-out ${delay}s infinite`,
                                opacity: initialOpacity,
                            }}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default FloatingBubbles;
