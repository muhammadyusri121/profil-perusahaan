import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.cta-content', {
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="pesan" style={{
            padding: '10rem 0',
            background: '#f0fcfc',
            textAlign: 'center',
            color: 'var(--color-primary-dark)',
            position: 'relative',
            overflow: 'hidden'
        }} ref={sectionRef}>

            {/* Decorative circles - Adjusted for light background */}
            <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,31,63,0.05) 0%, transparent 70%)' }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(227,30,36,0.05) 0%, transparent 70%)' }}></div>

            <div className="container cta-content" style={{ position: 'relative', zIndex: 10 }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>
                    Saatnya Rasakan <br />Perbedaan <span className="text-gradient" style={{ background: 'linear-gradient(90deg, #001F3F, #005B9F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AGNI</span>
                </h2>
                <p style={{
                    fontSize: '1.3rem',
                    marginBottom: '3.5rem',
                    maxWidth: '700px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    color: '#555',
                    lineHeight: 1.6
                }}>
                    Jangan kompromi soal kesehatan. Beralihlah ke AGNI sekarang dan rasakan kemurnian alam dalam setiap tegukan.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <a href="#" className="btn btn-primary" style={{
                        background: 'var(--color-primary-dark)',
                        color: 'white',
                        padding: '1.2rem 3.5rem',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        boxShadow: '0 20px 40px rgba(0,31,63,0.2)',
                        borderRadius: '50px'
                    }}>
                        Pesan Lewat WhatsApp
                    </a>
                    <a href="#" className="btn" style={{
                        border: '2px solid var(--color-primary-dark)',
                        color: 'var(--color-primary-dark)',
                        padding: '1.2rem 3.5rem',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: '50px'
                    }}>
                        Lihat Lokasi Toko
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
