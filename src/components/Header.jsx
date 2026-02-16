import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Kisah Kami', href: '#cerita' },
        { name: 'Produk', href: '#produk' },
        { name: 'Kualitas', href: '#kualitas' },
        { name: 'Hubungi Kami', href: '#kontak' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: scrolled ? '1rem 0' : '2rem 0',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
                zIndex: 1000
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                {/* Logo */}
                <a href="#" style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)',
                    letterSpacing: '-0.02em',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    zIndex: 102
                }}>
                    AGNI<span style={{ color: 'var(--color-primary-red)', fontSize: '2rem', lineHeight: 0 }}>.</span>
                </a>

                {/* Mobile Toggle */}
                <button
                    className="nav-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        zIndex: 102,
                        color: 'var(--color-primary-dark)',
                        display: 'none' // Hidden by default, shown in media query
                    }}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                {/* Desktop Nav */}
                <div className="nav-menu-desktop" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                    {navLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="nav-link"
                            style={{
                                color: 'var(--color-primary-dark)',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                position: 'relative',
                                transition: 'opacity 0.3s'
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="nav-cta">
                    <a href="#pesan" style={{
                        padding: '0.8rem 2rem',
                        backgroundColor: 'var(--color-primary-dark)',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '100px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0, 31, 63, 0.2)'
                    }}>
                        Pesan Sekarang
                    </a>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`nav-menu-mobile ${menuOpen ? 'active' : ''}`}
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        height: '100vh',
                        width: '100%',
                        maxWidth: '300px',
                        background: 'white',
                        padding: '6rem 2rem',
                        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                        transition: 'transform 0.4s ease',
                        boxShadow: '-10px 0 40px rgba(0,0,0,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        zIndex: 101
                    }}
                >
                    {navLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                color: 'var(--color-primary-dark)',
                                fontWeight: 500,
                                fontSize: '1.2rem',
                                textDecoration: 'none',
                                borderBottom: '1px solid #eee',
                                paddingBottom: '1rem'
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            <style>{`
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: var(--color-primary-dark);
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                
                @media (max-width: 992px) {
                    .nav-toggle { display: block !important; }
                    .nav-menu-desktop, .nav-cta { display: none !important; }
                }
            `}</style>
        </nav>
    );
};

export default Header;
