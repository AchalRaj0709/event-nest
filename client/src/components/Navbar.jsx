import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaTicketAlt } from 'react-icons/fa';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    // Only apply transparent behavior on the home page hero section
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'glass-dark py-3 border-b border-white/5' : 'bg-transparent py-5'
    }`;

    return (
        <nav className={navClasses}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center gap-4">
                <Link to="/" className="text-white text-2xl font-black tracking-tighter flex items-center gap-3 hover:scale-105 transition-transform origin-left">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                        <FaTicketAlt className="text-white text-lg" />
                    </div>
                    EventNest
                </Link>
                <div className="flex items-center gap-6 md:gap-8">
                    <Link to="/" className="text-white/80 hover:text-white font-medium transition text-sm uppercase tracking-wider hidden sm:block">Explore</Link>
                    {user ? (
                        <>
                            <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} className="text-white/80 hover:text-white font-medium transition text-sm uppercase tracking-wider">Dashboard</Link>
                            <button onClick={handleLogout} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-full font-medium transition backdrop-blur-sm text-sm shadow-lg">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-white/80 hover:text-white font-medium transition text-sm uppercase tracking-wider hidden sm:block">Login</Link>
                            <Link to="/register" className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-6 py-2.5 rounded-full font-bold shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:-translate-y-0.5 text-sm">
                                Sign Up Free
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;