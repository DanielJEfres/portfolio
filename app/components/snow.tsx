"use client";

import { useEffect } from "react";

export default function Snow() {
    useEffect(() => {
        const canvas = document.getElementById("snow-canvas") as HTMLCanvasElement | null;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        const flakes = Array.from({ length: 120 }).map(() => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 3 + 1,
            d: Math.random() + 1
        }));

        function drawSnow() {
            if (!ctx) return;
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "white";
            ctx.beginPath();
            for (const f of flakes) {
                ctx.moveTo(f.x, f.y);
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
            }
            ctx.fill();
            moveSnow();
        }

        let angle = 0;
        function moveSnow() {
            angle += 0.01;
            for (let i = 0; i < flakes.length; i++) {
                const f = flakes[i];
                f.y += Math.pow(f.d, 2) + 1;
                f.x += Math.sin(angle) * 0.5;

                if (f.y > h) {
                    flakes[i] = { x: Math.random() * w, y: 0, r: f.r, d: f.d };
                }
            }
        }

        function animate() {
            drawSnow();
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener("resize", () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        });
    }, []);

    return (
        <canvas
            id="snow-canvas"
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
        ></canvas>
    );
}
