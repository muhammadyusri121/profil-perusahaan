import React, { useRef } from 'react';

const KeunggulanKami = () => {
    const sectionRef = useRef(null);

    const features = [
        { icon: "💧", title: "pH Seimbang 7.5", desc: "Tingkat keasaman yang ideal, menyeimbangkan metabolisme tubuh secara alami." },
        { icon: "✨", title: "TDS Rendah", desc: "Rasa yang ringan, murni, dan menyegarkan tanpa residu yang berat di lidah." },
        { icon: "🛡️", title: "Bebas BPA", desc: "Kemasan premium yang aman bagi kesehatan, 100% bebas bahan kimia berbahaya." },
        { icon: "🏔️", title: "Mineral Alami", desc: "Diperkaya magnesium, kalsium, dan potasium langsung dari sumber pegunungan." },
        { icon: "♻️", title: "Eco-Friendly", desc: "Botol yang didesain untuk didaur ulang sepenuhnya sebagai komitmen pada bumi." },
        { icon: "🔬", title: "Teruji Klinis", desc: "Standar keamanan pangan internasional ISO 22000 dan sertifikasi Halal MUI." }
    ];

    return (
        <section id="produk" className="product-showcase" ref={sectionRef} style={{ background: '#f0fcfcff', padding: '10rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }} data-aos="fade-up">
                    <span style={{
                        color: 'var(--color-primary-blue)',
                        fontWeight: 700,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        display: 'block',
                        marginBottom: '1.5rem'
                    }}>
                        Keunggulan Kami
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        lineHeight: 1.1,
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-primary-dark)'
                    }}>
                        Dibalik Setiap <span style={{ color: 'var(--color-primary-blue)' }}>Tetes Kesegaran</span>
                    </h2>
                </div>

                <div className="features-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)', // Default to 3 columns
                    gap: '4rem',
                    padding: '0 1rem'
                }}>
                    {features.map((item, index) => (
                        <div key={index} className="feature-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            style={{
                                textAlign: 'left',
                                padding: '2.5rem',
                                background: '#fff',
                                borderRadius: '20px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.03)';
                            }}
                        >
                            <div style={{
                                fontSize: '3.5rem',
                                marginBottom: '1.5rem',
                                color: 'var(--color-primary-blue)',
                                lineHeight: 1
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.35rem',
                                marginBottom: '1rem',
                                color: 'var(--color-primary-dark)',
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                color: '#666',
                                lineHeight: 1.7,
                                fontSize: '1rem',
                                margin: 0
                            }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .features-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 2rem !important;
                    }
                }
                @media (max-width: 600px) {
                    #produk {
                        padding: 4rem 0 !important;
                    }
                    #produk h2 {
                        font-size: 2rem !important;
                        margin-bottom: 2rem !important;
                    }
                    /* Target the div wrapping the h2 and span */
                    .container > div:first-child {
                        margin-bottom: 3rem !important;
                    }
                    
                    .features-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                        padding: 0 !important;
                    }
                    .feature-card {
                        padding: 1.5rem !important;
                        border-radius: 16px !important;
                    }
                    /* Specific card content overrides */
                    .feature-card > div:first-child { /* Icon */
                        font-size: 2.5rem !important;
                        margin-bottom: 1rem !important;
                    }
                    .feature-card h3 {
                        font-size: 1.25rem !important;
                        margin-bottom: 0.5rem !important;
                    }
                    .feature-card p {
                        font-size: 0.9rem !important;
                        line-height: 1.6 !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default KeunggulanKami;


