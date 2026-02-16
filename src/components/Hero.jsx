import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroBg from '../assets/hero.jpg';
import agniBottle from '../assets/agni-bottle.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const bottleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Setup
            gsap.set('.hero-text-line', { y: 100, opacity: 0 });
            gsap.set('.hero-btn', { y: 20, opacity: 0 });
            gsap.set(bottleRef.current, { y: 100, opacity: 0, rotation: 5 });

            // Entrance Animation
            tl.to('.hero-text-line', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power4.out',
                delay: 0.2
            })
                .to(bottleRef.current, {
                    y: 0,
                    opacity: 1,
                    rotation: 0,
                    duration: 1.5,
                    ease: 'power3.out'
                }, "-=1")
                .to('.hero-btn', {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.out'
                }, "-=1");

            // Floating Bottle Animation
            gsap.to(bottleRef.current, {
                y: -15,
                rotation: 2,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Parallax Scroll Effect
            gsap.to('.hero-bg-layer', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                paddingTop: '80px', // Prevent header overlap
                background: '#f9f9f9'
            }}
        >
            {/* Background Parallax Layer */}
            <div
                className="hero-bg-layer"
                style={{
                    position: 'absolute',
                    top: -50, left: 0,
                    width: '100%', height: '120%',
                    zIndex: 0,
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.95)'
                }}
            />

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(234,244,250,0.6) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.9) 100%)',
                zIndex: 1
            }} />

            {/* Content Container */}
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', // Responsive grid
                    gap: '2rem',
                    alignItems: 'center'
                }}>

                    {/* Text Column */}
                    <div ref={textRef} style={{ maxWidth: '650px' }}>
                        <h1 className="display-text" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>
                            <div className="overflow-hidden">
                                <span className="hero-text-line" style={{ display: 'block' }}>Kemurnian</span>
                            </div>
                            <div className="overflow-hidden">
                                <span className="hero-text-line" style={{ display: 'block', fontStyle: 'italic', fontFamily: 'var(--font-display)', color: 'var(--color-primary-blue)' }}>Abadi Alam</span>
                            </div>
                        </h1>

                        <p className="hero-text-line hero-subtitle" style={{ fontSize: '1.25rem', color: '#555', lineHeight: 1.6, marginBottom: '2.5rem', opacity: 0 }}>
                            Setiap tetes AGNI adalah perjalanan 50 tahun penyaringan alami vulkanik.
                            Memberikan keseimbangan mineral yang <strong style={{ color: 'var(--color-primary-blue)' }}>menghidupkan</strong> tubuh dan jiwa Anda.
                        </p>

                        <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <button className="hero-btn btn-primary" style={{
                                padding: '1rem 2.5rem',
                                background: 'var(--color-primary-blue)',
                                color: 'white',
                                borderRadius: '50px',
                                border: 'none',
                                fontSize: '0.9rem',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                boxShadow: '0 10px 20px rgba(0,78,146,0.2)'
                            }}>
                                Discover Quality
                            </button>
                            <a href="#cerita" className="hero-btn" style={{
                                color: 'var(--color-primary-dark)',
                                textDecoration: 'none',
                                borderBottom: '2px solid currentColor',
                                paddingBottom: '4px',
                                fontSize: '0.9rem',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase'
                            }}>
                                The Story &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="hero-image-col" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        {/* Decorative Blob */}
                        <div style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120%', paddingBottom: '120%',
                            background: 'radial-gradient(circle, #E0F7FA 0%, transparent 70%)',
                            borderRadius: '50%',
                            zIndex: -1,
                            filter: 'blur(60px)',
                            opacity: 0.7
                        }} />

                        <img
                            ref={bottleRef}
                            src={agniBottle}
                            alt="Agni Mineral Water Bottle"
                            style={{
                                width: '100%',
                                maxWidth: '1200px',
                                height: 'auto',
                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
                                transformOrigin: 'center center',
                                borderRadius: '20px' // Softens the rectangular image if it's not transparent
                            }}
                        />
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '12px',
                zIndex: 20
            }}>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-primary-dark)', opacity: 0.6 }}>Scroll</span>
                <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--color-primary-dark), transparent)', opacity: 0.3 }}>
                    <div style={{ width: '100%', height: '30%', background: 'var(--color-primary-blue)', animation: 'drop 1.5s infinite' }}></div>
                </div>
            </div>

            <style>{`
                @keyframes drop {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(300%); }
                }
                @media (max-width: 900px) {
                    .container > div {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                        gap: 3rem !important;
                        padding-bottom: 4rem; /* Space for scroll indicator */
                    }
                    .hero-actions {
                        justify-content: center;
                        width: 100%;
                    }
                    h1 {
                        font-size: clamp(2.5rem, 10vw, 3.5rem) !important;
                        line-height: 1.1 !important;
                    }
                    .hero-subtitle {
                        margin: 1.5rem auto !important;
                        font-size: 1rem !important;
                    }
                    .hero-image-col {
                        display: none !important;
                    }
                    /* Ensure background covers the taller mobile content */
                    .hero-bg-layer {
                        height: 130% !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
