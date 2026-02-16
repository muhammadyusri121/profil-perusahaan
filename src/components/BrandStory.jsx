import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import storyImage from '../assets/images.jpeg';

gsap.registerPlugin(ScrollTrigger);

const BrandStory = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Connector Line Animation (Div based)
            gsap.fromTo(lineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    transformOrigin: "top", // Grow from top down
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%", // Start earlier for better visibility
                        end: "bottom 70%",
                        scrub: 1
                    }
                }
            );

            // Image Parallax - REMOVED to ensure image fits perfectly without moving
            // gap to keep line numbers consistent or just remove block

            // Text Reveal
            gsap.utils.toArray('.story-text').forEach((text) => {
                gsap.from(text, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 85%",
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const sections = [
        {
            title: "Proses Alami Vulkanik",
            subtitle: "The Origin",
            desc: "Air hujan meresap jauh ke dalam lapisan batuan vulkanik selama lebih dari 50 tahun. Dalam perjalanan panjang ini, air disaring secara alami dan diperkaya dengan elektrolit dan mineral esensial yang tidak dapat direplikasi oleh mesin buatan manusia.",
            quote: "Kemurnian yang tidak diciptakan, melainkan ditemukan.",
            img: storyImage,
            align: "left"
        },
        {
            title: "Teknologi 7-Tahap",
            subtitle: "The Refinement",
            desc: "Meskipun alam telah melakukan tugasnya dengan baik, kami menyempurnakannya. Melalui proses filtrasi 7 tahap tanpa sentuhan tangan manusia, kami menjamin nol kontaminan berbahaya, sambil tetap mempertahankan struktur mineral alami yang berharga.",
            list: ['Micro-Filtration', 'UV Sterilization', 'Ozonization', 'Mineral Lock'],
            img: storyImage,
            align: "right"
        }
    ];

    return (
        <section id="cerita" ref={sectionRef} style={{ position: 'relative', padding: '8rem 0', overflow: 'hidden', background: '#f0fcfcff' }}>

            <div className="container" style={{ position: 'relative' }}>

                {/* Central Line - Desktop Only */}
                <div className="connector-line desktop-only-line" style={{
                    position: 'absolute',
                    left: '50%',
                    top: '345px', // Adjusted to start below header
                    bottom: '0px',
                    width: '3px', // Thicker for visibility
                    background: 'rgba(212, 175, 55, 0.15)', // Lighter track
                    transform: 'translateX(-50%)',
                    zIndex: 0
                }}>
                    <div ref={lineRef} style={{
                        width: '100%',
                        height: '100%',
                        background: '#D4AF37', // Fill color
                        transformOrigin: 'top'
                    }}></div>
                </div>


                {/* Section Header */}
                <div className="brand-story-header" style={{ textAlign: 'center', marginBottom: '8rem', position: 'relative', zIndex: 2 }}>
                    <span style={{
                        color: 'var(--color-primary-blue)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '1.5rem'
                    }}>
                        Filosofi Kami
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        lineHeight: 1.1,
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Lahir dari <span style={{ color: 'var(--color-primary-red)' }}>Api & Air</span>
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#666',
                        marginTop: '2rem',
                        maxWidth: '600px',
                        marginInline: 'auto',
                        lineHeight: 1.8
                    }}>
                        Harmoni antara kekuatan vulkanik yang memurnikan dan kesejukan mata air pegunungan yang menenangkan.
                    </p>
                </div>

                {/* Content Blocks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {sections.map((item, index) => (
                        <div key={index} className={`story-row ${item.align === 'right' ? 'reverse' : ''}`} style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '4rem',
                            alignItems: 'center',
                            position: 'relative'
                        }}>

                            {/* Image Side */}
                            <div className="story-img-container" style={{
                                position: 'relative',
                                height: '500px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
                            }}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0
                                    }}
                                />
                            </div>

                            {/* Text Side */}
                            <div className="story-text" style={{ padding: '2rem' }}>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1.5rem',
                                    color: 'var(--color-primary-dark)',
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.7, marginBottom: '2rem' }}>
                                    {item.desc}
                                </p>

                                {item.quote && (
                                    <blockquote style={{
                                        borderLeft: '3px solid var(--color-primary-red)',
                                        paddingLeft: '1.5rem',
                                        fontSize: '1.25rem',
                                        fontStyle: 'italic',
                                        fontFamily: 'var(--font-display)',
                                        color: '#333'
                                    }}>
                                        "{item.quote}"
                                    </blockquote>
                                )}

                                {item.list && (
                                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        {item.list.map(li => (
                                            <li key={li} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 600, color: '#444' }}>
                                                <div style={{ width: '6px', height: '6px', background: 'var(--color-primary-red)', borderRadius: '50%' }} />
                                                {li}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <style>{`
                @media (min-width: 901px) {
                    .story-row.reverse .story-img-container {
                        order: 2;
                    }
                    .story-row.reverse .story-text {
                        text-align: right;
                        padding-left: 0 !important;
                        padding-right: 2rem !important;
                    }
                    /* Adjust padding for normal rows to be symmetric */
                    .story-row:not(.reverse) .story-text {
                        padding-left: 2rem !important;
                        padding-right: 0 !important;
                    }
                }
                @media (max-width: 900px) {
                    /* Section padding adjustment */
                    #cerita {
                        padding: 2rem 0 !important;
                    }
                    .brand-story-header {
                        margin-bottom: 2rem !important; /* Further reduced gap */
                        padding: 0 1rem !important;
                    }
                    .brand-story-header h2 {
                        font-size: 2rem !important; /* Much smaller header */
                        line-height: 1.2 !important;
                    }
                    .brand-story-header p {
                        font-size: 0.9rem !important;
                        margin-top: 1rem !important;
                    }
                    
                    .connector-line {
                        display: block !important;
                        left: 20px !important; /* Restored position */
                        transform: none !important;
                        height: 100% !important;
                        top: 0 !important;
                        bottom: 0 !important;
                    }
                    .story-row {
                        grid-template-columns: 1fr !important;
                        gap: 1rem !important;
                        padding-left: 2.2rem !important; /* Reduced horizontal gap */
                        text-align: left !important;
                    }
                    /* On mobile, we always want image on top */
                    .story-row .story-img-container {
                        order: -1;
                    }
                    .story-img-container {
                        height: 200px !important; /* Slightly smaller */
                        border-radius: 12px !important;
                    }
                    .story-text {
                        padding: 0.5rem 0 0 0 !important;
                        text-align: left !important;
                    }
                    .story-text h3 {
                        font-size: 1.25rem !important;
                        margin-bottom: 0.25rem !important;
                    }
                    .story-text p {
                        font-size: 0.9rem !important;
                    }
                    .story-text blockquote {
                        padding-left: 1rem !important; /* Reduced indentation */
                        font-size: 1.1rem !important; /* Smaller quote font */
                        margin: 1.5rem 0 !important;
                        border-left-width: 2px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default BrandStory;


