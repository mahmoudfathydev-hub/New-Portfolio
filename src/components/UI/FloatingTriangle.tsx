import React, { useEffect, useRef, useState } from 'react';

interface Triangle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    size: number;
    rotation: number;
    rotationSpeed: number;
}

interface FloatingTriangleProps {
    count?: number;
    speed?: number;
}

const FloatingTriangle: React.FC<FloatingTriangleProps> = ({ count = 3, speed = 1 }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [triangles, setTriangles] = useState<Triangle[]>([]);

    useEffect(() => {
        const initialTriangles: Triangle[] = Array.from({ length: count }).map(() => ({
            x: Math.random() * (containerRef.current?.clientWidth ?? 800),
            y: Math.random() * (containerRef.current?.clientHeight ?? 600),
            dx: (Math.random() - 0.5) * 2 * speed, // Use speed prop
            dy: (Math.random() - 0.5) * 2 * speed, // Use speed prop
            size: 30 + Math.random() * 20,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 2,
        }));
        setTriangles(initialTriangles);
    }, [count, speed]);


    useEffect(() => {
        let animationFrameId: number;

        const updateTriangles = () => {
            setTriangles((prevTriangles) => {
                const container = containerRef.current;
                const width = container?.clientWidth ?? 800;
                const height = container?.clientHeight ?? 600;

                return prevTriangles.map((triangle) => {
                    let { x, y, dx, dy, size, rotation, rotationSpeed } = triangle;

                    x += dx;
                    y += dy;
                    rotation += rotationSpeed;

                    if (x - size < 0 || x + size > width) dx = -dx;
                    if (y - size < 0 || y + size > height) dy = -dy;

                    return { ...triangle, x, y, dx, dy, rotation };
                });
            });

            animationFrameId = requestAnimationFrame(updateTriangles);
        };

        updateTriangles();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div
            ref={containerRef}
            className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
        >
            {triangles.map((triangle, index) => (
                <div
                    key={index}
                    className="absolute opacity-30"
                    style={{
                        left: triangle.x - triangle.size / 2,
                        top: triangle.y - triangle.size / 2,
                        width: 0,
                        height: 0,
                        borderLeft: `${triangle.size / 2}px solid transparent`,
                        borderRight: `${triangle.size / 2}px solid transparent`,
                        borderBottom: `${triangle.size}px solid rgba(233, 155, 99, 0.6)`,
                        transform: `rotate(${triangle.rotation}deg)`,
                        filter: 'blur(0.5px)',
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingTriangle;
