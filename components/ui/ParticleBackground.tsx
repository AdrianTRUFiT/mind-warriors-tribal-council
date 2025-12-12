import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedY: number;
      speedX: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = canvas.height + Math.random() * 100; // Start below screen
      const radius = Math.random() * 2 + 0.5;
      const opacity = Math.random() * 0.5 + 0.1;
      const speedY = Math.random() * 1 + 0.2; // Slow upward drift
      const speedX = (Math.random() - 0.5) * 0.5; // Slight horizontal drift
      
      // Fire colors: Amber, Orange, Gold
      const colors = [
        `rgba(251, 191, 36, ${opacity})`, // Amber-400
        `rgba(245, 158, 11, ${opacity})`, // Amber-500
        `rgba(234, 88, 12, ${opacity})`,  // Orange-600
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return { x, y, radius, color, speedY, speedX, opacity };
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000); // Density
      for (let i = 0; i < particleCount; i++) {
        const p = createParticle();
        p.y = Math.random() * canvas.height; // Scatter initially
        particles.push(p);
      }
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p, index) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity -= 0.001; // Fade out slowly

        // Reset if off screen or fully faded
        if (p.y < -50 || p.opacity <= 0) {
          particles[index] = createParticle();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
};

export default ParticleBackground;