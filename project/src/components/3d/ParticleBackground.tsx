import React, { useEffect, useRef } from 'react';
import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesInstance = useRef<any>(null);

  useEffect(() => {
    const initParticles = async () => {
      if (!containerRef.current) return;

      try {
        await loadSlim(tsParticles);
        
        particlesInstance.current = await tsParticles.load({
          id: "hero-particles",
          element: containerRef.current,
          options: {
            background: {
              color: "transparent",
            },
            fullScreen: {
              enable: false, // Critical - makes particles respect container bounds
              zIndex: -1 // Ensures particles stay behind content
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "connect",
                },
              },
              modes: {
                connect: {
                  distance: 150,
                  links: {
                    opacity: 0.7,
                    color: "#10b981",
                  },
                  radius: 150,
                },
              },
            },
            particles: {
              color: {
                value: "#10b981",
              },
              links: {
                color: "#10b981",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.5,
              },
              opacity: {
                value: { min: 0.3, max: 0.7 },
              },
              size: {
                value: { min: 1, max: 3 },
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
            },
          },
        });

        // Handle scroll to destroy particles when hero section is not visible
        const handleScroll = () => {
          if (!containerRef.current) return;
          
          const heroSection = containerRef.current.closest('section');
          if (!heroSection) return;

          const rect = heroSection.getBoundingClientRect();
          const isInView = rect.top >= -rect.height && rect.top <= window.innerHeight;
          
          if (!isInView && particlesInstance.current) {
            particlesInstance.current.destroy();
            particlesInstance.current = null;
          }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
          if (particlesInstance.current) {
            particlesInstance.current.destroy();
          }
        };
      } catch (error) {
        console.error("Error loading particles:", error);
      }
    };

    initParticles();
  }, []);

  return (
    <div 
      ref={containerRef}
      id="hero-particles"
      className="absolute inset-0 z-0 pointer-events-none" 
    />
  );
};