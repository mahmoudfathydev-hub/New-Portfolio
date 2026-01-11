import React, { useEffect, useRef, useState } from "react";

interface Ball {
    x: number;
    y: number;
    dx: number;
    dy: number;
    radius: number;
}



const FloatingShapes: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [balls, setBalls] = useState<Ball[]>([
        { x: 100, y: 100, dx: 1, dy: 1, radius: 30 },
        { x: 300, y: 200, dx: -1, dy: 1, radius: 30 },
        { x: 500, y: 150, dx: 1, dy: -1, radius: 30 },
    ]);

    useEffect(() => {
        let animationFrameId: number;

        const updateBalls = () => {
            setBalls((prevBalls) => {
                const container = containerRef.current;
                const width = container?.clientWidth ?? 800;
                const height = container?.clientHeight ?? 600;

                const newBalls = prevBalls.map((ball) => {
                    let { x, y, dx, dy, radius } = ball;

                    x += dx * 2;
                    y += dy * 2;

                    if (x - radius < 0 || x + radius > width) dx = -dx;
                    if (y - radius < 0 || y + radius > height) dy = -dy;

                    return { ...ball, x, y, dx, dy };
                });

                // التفاعل بين الكرات
                for (let i = 0; i < newBalls.length; i++) {
                    for (let j = i + 1; j < newBalls.length; j++) {
                        const b1 = newBalls[i];
                        const b2 = newBalls[j];
                        const dist = Math.hypot(b1.x - b2.x, b1.y - b2.y);
                        if (dist < b1.radius + b2.radius) {
                            newBalls[i].dx = -newBalls[i].dx;
                            newBalls[i].dy = -newBalls[i].dy;
                            newBalls[j].dx = -newBalls[j].dx;
                            newBalls[j].dy = -newBalls[j].dy;
                        }
                    }
                }

                return newBalls;
            });

            animationFrameId = requestAnimationFrame(updateBalls);
        };

        updateBalls();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div
            ref={containerRef}
            style={{ width: "100%", height: "70vh", position: "relative", overflow: "hidden" }}
        >
            {balls.map((ball, index) => (
                <div
                    key={index}
                    style={{
                        position: "absolute",
                        width: ball.radius * 3,
                        height: ball.radius * 3,
                        borderRadius: "50%",
                        backgroundColor: "#e99b63",
                        left: ball.x - ball.radius,
                        top: ball.y - ball.radius,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingShapes;
