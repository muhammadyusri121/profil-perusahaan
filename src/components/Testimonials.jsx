import React, { useRef } from 'react';

const Testimonials = () => {
    const sectionRef = useRef(null);

    return (
        <section className="testimonials" ref={sectionRef} style={{ padding: '8rem 0', background: '#f0fcfcff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span style={{ color: '#E31E24', fontWeight: 600, letterSpacing: '0.1em' }}>TESTIMONIAL</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '0.5rem' }}>Kepercayaan dari <span className="text-gradient">Mereka</span></h2>
                </div>

                <div className="testimonial-slider" style={{
                    display: 'flex',
                    gap: '2rem',
                    overflowX: 'auto',
                    paddingBottom: '2rem',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}>
                    {[
                        {
                            quote: "Rasanya beda. Ringan banget di tenggorokan. Sejak minum AGNI, badan rasanya lebih segar dan gak gampang capek. Kemasannya juga premium banget.",
                            name: "Sarah Wijaya",
                            role: "Yoga Instructor",
                            img: "https://randomuser.me/api/portraits/women/44.jpg"
                        },
                        {
                            quote: "Saya selalu selektif soal air mineral untuk keluarga. AGNI memberikan ketenangan pikiran karena transparansi prosesnya dan sertifikasinya yang lengkap.",
                            name: "Budi Santoso",
                            role: "Dokter Umum",
                            img: "https://randomuser.me/api/portraits/men/32.jpg"
                        },
                        {
                            quote: "Sebagai atlet, hidrasi itu kunci. AGNI membantu recovery saya lebih cepat. pH-nya pas banget buat netralisir asam laktat setelah latihan berat.",
                            name: "Dian Pramana",
                            role: "Atlet Renang",
                            img: "https://randomuser.me/api/portraits/women/68.jpg"
                        },
                        {
                            quote: "Desain botolnya elegan, cocok buat disajikan di meeting kantor atau acara formal. Kualitas airnya juga konsisten.",
                            name: "Andi Pratama",
                            role: "CEO Startup",
                            img: "https://randomuser.me/api/portraits/men/86.jpg"
                        }
                    ].map((item, index) => (
                        <div key={index} className="testimonial-card glass-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            style={{
                                minWidth: '350px',
                                padding: '3rem',
                                borderRadius: '24px',
                                background: 'white',
                                position: 'relative'
                            }}>
                            <div style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                fontSize: '4rem',
                                color: 'rgba(227, 30, 36, 0.1)',
                                fontFamily: 'serif',
                                lineHeight: 0.5
                            }}>❝</div>

                            <p style={{
                                fontSize: '1.1rem',
                                fontStyle: 'italic',
                                marginBottom: '2rem',
                                color: '#46505A',
                                lineHeight: 1.6
                            }}>"{item.quote}"</p>

                            <div className="user-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <img src={item.img} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                                <div>
                                    <h5 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: '#001F3F' }}>{item.name}</h5>
                                    <span style={{ fontSize: '0.9rem', color: '#888' }}>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .testimonials {
                        padding: 4rem 0 !important;
                    }
                    .testimonials h2 {
                        font-size: 2rem !important;
                    }
                    .testimonial-slider {
                        padding-left: 1rem;
                        padding-right: 1rem;
                        scroll-snap-type: x mandatory;
                    }
                    .testimonial-card {
                        min-width: 85vw !important;
                        padding: 1.5rem !important;
                        scroll-snap-align: center;
                    }
                    .testimonial-card p {
                        font-size: 0.95rem !important;
                    }
                    .testimonial-card h5 {
                        font-size: 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
