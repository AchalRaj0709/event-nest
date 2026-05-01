import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/axios';
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaRegClock, FaTicketAlt, FaShieldAlt, FaArrowRight, FaFire } from 'react-icons/fa';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchEvents();
        }, 400); // 400ms debounce
        return () => clearTimeout(timeoutId);
    }, [search]);

    const fetchEvents = async () => {
        try {
            const { data } = await api.get(`/events?search=${search}`);
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 w-full">
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center bg-dark text-white overflow-hidden w-full">
                {/* Background image & overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=3000&auto=format&fit=crop" 
                        alt="Event background" 
                        className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent"></div>
                </div>

                <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-8 animate-[bounce_3s_ease-in-out_infinite]">
                        <span className="flex h-2 w-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(79,70,229,1)]"></span>
                        <span className="text-xs font-semibold tracking-widest uppercase text-white/80">Discover Premium Events</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter drop-shadow-2xl">
                        Find Your Next <br />
                        <span className="text-gradient">Unforgettable</span> Experience
                    </h1>
                    
                    <p className="text-gray-300 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                        Discover the best tech conferences, late-night music festivals, and hands-on workshops happening directly in your area. Secure your spot today.
                    </p>

                    <div className="w-full max-w-3xl mx-auto relative flex items-center shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-full group transition-all duration-300 hover:shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:scale-[1.01]">
                        <FaSearch className="absolute left-8 text-primary-500 text-2xl" />
                        <input
                            type="text"
                            placeholder="Search for amazing events..."
                            className="w-full pl-20 pr-8 py-6 rounded-full text-xl text-white bg-white/10 backdrop-blur-md border border-white/20 focus:border-primary-500 focus:bg-white/15 focus:outline-none transition-all placeholder-gray-400 font-medium"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="absolute right-3 bg-primary-600 hover:bg-primary-500 text-white p-4 rounded-full transition-colors">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                    <span className="text-xs uppercase tracking-widest font-semibold">Scroll down</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-24">
                {/* Features row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 -mt-10 relative z-20">
                    <div className="glass p-10 rounded-3xl flex flex-col items-center text-center card-hover">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner">
                            <FaRegClock />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Fast Booking</h3>
                        <p className="text-slate-500 text-base leading-relaxed">Secure your tickets instantly with our fast streamlined booking infrastructure built for speed.</p>
                    </div>
                    <div className="glass p-10 rounded-3xl flex flex-col items-center text-center card-hover">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner">
                            <FaTicketAlt />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Seamless Access</h3>
                        <p className="text-slate-500 text-base leading-relaxed">Download tickets instantly or manage them right from your personal dashboard with ease.</p>
                    </div>
                    <div className="glass p-10 rounded-3xl flex flex-col items-center text-center card-hover">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner">
                            <FaShieldAlt />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Secure Platform</h3>
                        <p className="text-slate-500 text-base leading-relaxed">All transactions and registrations are bounded by cutting-edge security and 2FA OTP tech.</p>
                    </div>
                </div>

                {/* Events Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-6 gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-primary-600 font-bold tracking-wider uppercase text-sm mb-2">
                            <FaFire className="text-lg" /> Trending Now
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Upcoming Events</h2>
                    </div>
                    <div className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg font-bold text-sm border border-primary-100">
                        {events.length} {events.length === 1 ? 'result' : 'results'} found
                    </div>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-32">
                        <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-6"></div>
                        <div className="text-xl font-bold text-slate-600 animate-pulse">Loading amazing experiences...</div>
                    </div>
                ) : events.length === 0 ? (
                    <div className="bg-white rounded-3xl border border-slate-100 p-20 text-center shadow-sm">
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaSearch className="text-slate-300 text-4xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">No events found</h3>
                        <p className="text-slate-500">We couldn't find any events matching your search criteria.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {events.map(event => (
                            <div key={event._id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 flex flex-col card-hover group">
                                <div className="h-64 bg-slate-200 overflow-hidden relative">
                                    {event.imageUrl ? (
                                        <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-slate-400 font-black text-3xl uppercase tracking-widest">
                                            {event.category || 'Event'}
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-black shadow-lg border border-white/50">
                                        {event.ticketPrice === 0 ? <span className="text-emerald-500">FREE</span> : <span className="text-slate-900">₹{event.ticketPrice}</span>}
                                    </div>
                                    <div className="absolute top-5 left-5 bg-dark/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                                        {event.category}
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col bg-white">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors">{event.title}</h2>
                                    
                                    <div className="flex flex-col gap-3 mb-8 text-slate-600 text-sm font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                                                <FaCalendarAlt />
                                            </div>
                                            <span>{new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                                                <FaMapMarkerAlt />
                                            </div>
                                            <span className="truncate">{event.location}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-auto pt-6 border-t border-slate-100">
                                        <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                            <span>Availability</span>
                                            <span className={event.availableSeats < 10 ? 'text-rose-500' : 'text-slate-700'}>
                                                {event.availableSeats} / {event.totalSeats}
                                            </span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-2.5 mb-6 overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full transition-all duration-1000 ${event.availableSeats < 10 ? 'bg-rose-500' : 'bg-primary-500'}`}
                                                style={{ width: `${(event.availableSeats / event.totalSeats) * 100}%` }}
                                            ></div>
                                        </div>
                                        <Link 
                                            to={`/events/${event._id}`} 
                                            className="block w-full text-center bg-slate-900 hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/30 group-hover:-translate-y-1"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer Section */}
            <footer className="mt-auto pt-20 pb-10 bg-slate-900 text-center text-white border-t border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/20">
                            <FaTicketAlt className="text-white text-xl" />
                        </div>
                        <span className="text-3xl font-black tracking-tight">EventNest</span>
                    </div>
                    <p className="text-slate-400 text-base mb-10 max-w-lg mx-auto leading-relaxed">
                        The simplest, most dynamic way to manage, discover, and host world-class events in your local city. Let's make memories together.
                    </p>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest pt-10 border-t border-slate-800/50">
                        &copy; {new Date().getFullYear()} EventNest Platform. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;