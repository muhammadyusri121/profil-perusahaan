import React, { useRef } from 'react';

const PurityStats = () => {
    const sectionRef = useRef(null);

    const stats = [
        { val: "99.9", label: "Tingkat Kemurnian", unit: "%" },
        { val: "7.5", label: "pH Seimbang", unit: "+" },
        { val: "7", label: "Tahap Filtrasi", unit: "" },
        { val: "100", label: "Terjamin Aman", unit: "%" }
    ];

    return (
        <section id="kualitas" className="purity-section" ref={sectionRef} style={{
            background: 'var(--color-primary-dark)',
            color: 'white',
            padding: '6rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Texture */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.03) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(0,91,159,0.1) 0%, transparent 20%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <h2 className="display-text" style={{
                        color: 'white',
                        fontSize: '2.5rem', // Reduced size
                        fontFamily: 'var(--font-display)',
                        marginBottom: '1rem'
                    }}>
                        Standar Kemurnian Tertinggi
                    </h2>
                    <p style={{
                        color: 'rgba(255,255,255,0.7)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: '1rem',
                        lineHeight: 1.6
                    }}>
                        Setiap tetes AGNI melewati kontrol kualitas ketat untuk memastikan hanya yang terbaik yang sampai kepada Anda.
                    </p>
                </div>

                <div className="stats-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '2rem'
                }}>
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-item"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                            style={{
                                textAlign: 'center',
                                position: 'relative',
                                padding: '1rem 0'
                            }}>
                            <div style={{
                                fontSize: '3.5rem', // Reduced size
                                fontWeight: 300,
                                color: 'white',
                                fontFamily: 'var(--font-display)',
                                lineHeight: 1,
                                marginBottom: '0.5rem'
                            }}>
                                {stat.val}<span style={{ fontSize: '0.5em', verticalAlign: 'top', opacity: 0.7 }}>{stat.unit}</span>
                            </div>
                            <div style={{
                                fontSize: '0.85rem',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.6)',
                                fontFamily: 'var(--font-body)',
                                fontWeight: 600
                            }}>
                                {stat.label}
                            </div>
                            {/* Decorative line below */}
                            <div style={{
                                width: '30px',
                                height: '1px',
                                background: 'rgba(255,255,255,0.2)',
                                margin: '1.5rem auto 0'
                            }} />
                        </div>
                    ))}
                </div>

                <div className="badges"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        marginTop: '4rem',
                        opacity: 0.8
                    }}>
                    {['BPOM RI', 'SNI', 'HALAL MUI', 'ISO 22000'].map(badge => (
                        <div key={badge} style={{
                            border: '1px solid rgba(255,255,255,0.3)',
                            padding: '0.6rem 1.5rem',
                            borderRadius: '100px',
                            fontSize: '0.8rem',
                            letterSpacing: '0.1em',
                            fontWeight: 600,
                            background: 'rgba(255,255,255,0.05)'
                        }}>
                            {badge}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .purity-section {
                        padding: 4rem 0 !important;
                    }
                    .purity-section h2 {
                        font-size: 1.75rem !important;
                    }
                    .stats-grid {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 3rem 1rem !important;
                    }
                    .stat-item > div:first-child { /* The number */
                        font-size: 2.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default PurityStats;


