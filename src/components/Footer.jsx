import React from 'react';

const Footer = () => {
    return (
        <footer id="kontak" style={{ background: '#0A1929', color: 'white', paddingTop: '6rem', position: 'relative' }}>
            <div className="container">
                <div className="footer-grid" data-aos="fade-up">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            AGNI<span style={{ color: '#00A8E8' }}>.</span> {/* Changed dot to blue for freshness */}
                        </a>
                        <p className="footer-desc">
                            Air mineral premium dari sumber mata air terpilih Indonesia. Dipersembahkan untuk kesegaran tubuh dan ketenangan jiwa Anda.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <h4>Perusahaan</h4>
                        <ul>
                            <li><a href="#">Tentang Kami</a></li>
                            <li><a href="#">Proses Produksi</a></li>
                            <li><a href="#">Keberlanjutan</a></li>
                            <li><a href="#">Karir</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4>Bantuan</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Hubungi Kami</a></li>
                            <li><a href="#">Lokasi Toko</a></li>
                            <li><a href="#">Kebijakan Privasi</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Hubungi Kami</h4>
                        <ul>
                            <li>info@agni.co.id</li>
                            <li>+62 812-3456-7890</li>
                            <li className="address">SCBD District 8, Jakarta Selatan,<br />Indonesia</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">&copy; {new Date().getFullYear()} AGNI Mineral Water by PT AGNI Indonesia. All rights reserved.</div>
                    <div className="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1.5fr; /* Spacious layout */
                    gap: 4rem;
                    padding-bottom: 4rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }
                
                .footer-logo {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: white;
                    letter-spacing: -1px;
                    display: block;
                    margin-bottom: 1.5rem;
                    font-family: var(--font-display);
                    text-decoration: none;
                }
                
                .footer-desc {
                    color: #889096;
                    line-height: 1.8;
                    font-size: 1rem;
                    max-width: 300px;
                }
                
                .footer-links-group h4, .footer-contact h4 {
                    font-size: 1.1rem;
                    margin-bottom: 1.5rem;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                }
                
                .footer-links-group ul, .footer-contact ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-links-group li, .footer-contact li {
                    margin-bottom: 1rem;
                }
                
                .footer-links-group a {
                    color: #889096;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-links-group a:hover {
                    color: #00A8E8; /* Blue accent on hover */
                }
                
                .footer-contact li {
                    color: #889096;
                    line-height: 1.6;
                }
                
                .footer-bottom {
                    padding: 2rem 0 3rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #556066;
                    font-size: 0.9rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .social-links a {
                    color: #556066;
                    text-decoration: none;
                    transition: color 0.3s ease;
                    font-weight: 500;
                }
                
                .social-links a:hover {
                    color: white;
                }
                
                /* Mobile Responsiveness */
                @media (max-width: 900px) {
                    footer {
                        padding-top: 4rem !important;
                    }
                    .footer-grid {
                        grid-template-columns: 1fr; /* Stack vertically */
                        gap: 3rem;
                        text-align: center; /* Center align on mobile */
                    }
                    .footer-desc {
                        margin: 0 auto; /* Center logo desc */
                    }
                    .footer-bottom {
                        flex-direction: column;
                        gap: 1.5rem;
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
