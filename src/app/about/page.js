// app/about/page.js

import React from "react";
import Image from "next/image";
import Checkmark from "../../components/Checkmark";

// A simple arrow icon for the CTA button, can be in the same file for simplicity
const ArrowRightIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" {...props}>
        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
);


export default function About() {
    return (
        // Increased vertical spacing for better rhythm
        <main className="container mx-auto px-4 py-16 md:py-24 space-y-28 md:space-y-36 overflow-x-hidden">

            {/* 1. Mission Section: Added text shadow for readability */}
            <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2A3DFB] via-[#BD4AD1] to-[#FC432F] opacity-95" />
                <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{ backgroundImage: "url('/assets/pattern-white.jpg')" }} />
                <div className="relative z-10 flex flex-col items-center text-center justify-center py-24 px-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-armstrong), sans-serif", textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}>
                        Our Mission
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 max-w-3xl leading-relaxed" style={{ fontFamily: "poppins" }}>
                        Transform gaming into skill-building, career-shaping experiences.<br className="hidden sm:block" />
                        We empower students to gain real-world skills while doing what they love.
                    </p>
                </div>
            </section>

            {/* 2. Who We Are: Added decorative element behind image for depth */}
            <section className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 flex justify-center md:justify-end relative">
                    <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#2A3DFB]/20 to-transparent rounded-2xl transform -rotate-3"></div>
                    <Image
                        src="/assets/about/team.jpg"
                        alt="Quantum Club Team"
                        width={520}
                        height={400}
                        className="rounded-2xl shadow-lg object-cover relative z-10"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col items-start space-y-6">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2A3DFB] to-[#BD4AD1] bg-clip-text text-transparent">
                        Who We Are
                    </h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                        <p>
                            <span className="font-bold text-[#FC432F]">Gaming Platform:</span>
                            <span className="ml-2" style={{ fontFamily: "poppins" }}>
                                A leading hub for competitive gaming, creative coding, and strategic thinking.
                            </span>
                        </p>
                        <p>
                            <span className="font-bold text-[#BD4AD1]">Partnerships:</span>
                            <span className="ml-2" style={{ fontFamily: "poppins" }}>
                                Collaborating with schools and clubs to deliver enriching educational programs.
                            </span>
                        </p>
                        <p>
                            <span className="font-bold text-[#2A3DFB]">Mission:</span>
                            <span className="ml-2" style={{ fontFamily: "poppins" }}>
                                To develop well-rounded individuals by merging the worlds of gaming, tech, and strategy.
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. What We Provide: Added group-hover effects and smoother transitions */}
            <section>
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#2A3DFB] to-[#BD4AD1] bg-clip-text text-transparent">
                    What We Provide
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Game Development Card */}
                    <div className="group flex items-start gap-6 bg-white rounded-2xl shadow-lg p-8 border-l-8 border-[#2A3DFB] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#2A3DFB]/10 transition-transform duration-300 group-hover:scale-110">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="5" y="10" width="26" height="14" rx="2" fill="#2A3DFB" opacity="0.15" /><rect x="5" y="10" width="26" height="14" rx="2" stroke="#2A3DFB" strokeWidth="2" /><rect x="9" y="14" width="6" height="2" rx="1" fill="#2A3DFB" /><rect x="15" y="18" width="6" height="2" rx="1" fill="#2A3DFB" /><rect x="21" y="14" width="6" height="2" rx="1" fill="#2A3DFB" /></svg>
                        </span>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Game Development & Coding</h3>
                            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "poppins" }}>Design and code games. Skills: Python, Unity, Unreal Engine, AI.</p>
                        </div>
                    </div>
                    {/* Esports Training Card */}
                    <div className="group flex items-start gap-6 bg-white rounded-2xl shadow-lg p-8 border-r-8 border-[#FC432F] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#FC432F]/10 transition-transform duration-300 group-hover:scale-110">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="7" y="13" width="22" height="10" rx="5" fill="#FC432F" opacity="0.15" /><rect x="7" y="13" width="22" height="10" rx="5" stroke="#FC432F" strokeWidth="2" /><circle cx="13" cy="18" r="1.5" fill="#FC432F" /><circle cx="23" cy="18" r="1.5" fill="#FC432F" /><rect x="17" y="16" width="2" height="4" rx="1" fill="#FC432F" /></svg>
                        </span>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Esports Training</h3>
                            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "poppins" }}>Pro coaching: LoL, FIFA. Focus: Teamwork, strategy, discipline.</p>
                        </div>
                    </div>
                    {/* Chess Card */}
                    <div className="group flex items-start gap-6 bg-white rounded-2xl shadow-lg p-8 border-l-8 border-[#BD4AD1] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#BD4AD1]/10 transition-transform duration-300 group-hover:scale-110">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M24 28H12v-2a6 6 0 0 1 6-6h2V12l-6 2V8a4 4 0 0 1 8 0v20z" fill="#BD4AD1" opacity="0.15" /><path d="M24 28H12v-2a6 6 0 0 1 6-6h2V12l-6 2V8a4 4 0 0 1 8 0v20z" stroke="#BD4AD1" strokeWidth="2" /><circle cx="18" cy="10" r="1" fill="#BD4AD1" /></svg>
                        </span>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Chess & Strategic Thinking</h3>
                            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "poppins" }}>Critical thinking, problem-solving. Host tournaments.</p>
                        </div>
                    </div>
                    {/* AI Workshops Card */}
                    <div className="group flex items-start gap-6 bg-white rounded-2xl shadow-lg p-8 border-r-8 border-[#2A3DFB] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                        <span className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#2A3DFB]/10 transition-transform duration-300 group-hover:scale-110">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><ellipse cx="18" cy="18" rx="10" ry="8" fill="#2A3DFB" opacity="0.15" /><ellipse cx="18" cy="18" rx="10" ry="8" stroke="#2A3DFB" strokeWidth="2" /><circle cx="13" cy="18" r="1.5" fill="#2A3DFB" /><circle cx="23" cy="18" r="1.5" fill="#2A3DFB" /><rect x="17" y="17" width="2" height="2" rx="1" fill="#2A3DFB" /><path d="M13 18L17 18M19 18L23 18" stroke="#2A3DFB" strokeWidth="1.2" /></svg>
                        </span>
                        <div>
                            <h3 className="text-xl font-bold mb-1">AI & Technology Workshops</h3>
                            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "poppins" }}>Intro to AI, ML. Hands-on: Build simple AI models.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Recognized Learning Outcomes: Improved card styling and layout */}
            <section className="relative pt-16 md:pt-24">
                <div className="absolute inset-0 -skew-y-3 bg-gray-50/70"></div>
                <div className="relative">
                    <h2 className="relative z-10 text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#2A3DFB] to-[#BD4AD1] bg-clip-text text-transparent">
                        Recognized Learning Outcomes
                    </h2>
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 px-4">
                        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                            <h3 className="text-2xl font-bold mb-6 text-black flex items-center gap-3"><Checkmark color="#2A3DFB" />Certifications</h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <span className="px-4 py-2 rounded-full bg-[#2A3DFB]/10 text-[#2A3DFB] font-semibold" style={{ fontFamily: "poppins" }}>Game Development Basics</span>
                                <span className="px-4 py-2 rounded-full bg-[#2A3DFB]/10 text-[#2A3DFB] font-semibold" style={{ fontFamily: "poppins" }}>Coding Fundamentals</span>
                                <span className="px-4 py-2 rounded-full bg-[#2A3DFB]/10 text-[#2A3DFB] font-semibold" style={{ fontFamily: "poppins" }}>AI & ML Essentials</span>
                                <span className="px-4 py-2 rounded-full bg-[#2A3DFB]/10 text-[#2A3DFB] font-semibold" style={{ fontFamily: "poppins" }}>Esports Strategy</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                            <h3 className="text-2xl font-bold mb-6 text-black flex items-center gap-3"><Checkmark color="#FC432F" />Tangible Benefits</h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <span className="px-4 py-2 rounded-full bg-[#FC432F]/10 text-[#FC432F] font-semibold" style={{ fontFamily: "poppins" }}>Student Portfolios</span>
                                <span className="px-4 py-2 rounded-full bg-[#FC432F]/10 text-[#FC432F] font-semibold" style={{ fontFamily: "poppins" }}>Prep for Tech Careers</span>
                                <span className="px-4 py-2 rounded-full bg-[#FC432F]/10 text-[#FC432F] font-semibold" style={{ fontFamily: "poppins" }}>Boosts Institutional Reputation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Intensive Learning Experiences: Added image treatment and refined item layout */}
            <section className="flex flex-col md:flex-row items-center gap-12 pt-12 md:pt-24">
                <div className="md:w-1/2 flex justify-center md:justify-start relative">
                    <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-bl from-[#FC432F]/20 to-transparent rounded-2xl transform rotate-3"></div>
                    <Image src="/assets/about/intensive.jpg" width={520} height={420} alt="Intensive Learning Experiences" className="rounded-2xl shadow-lg object-cover relative z-10" />
                </div>
                <div className="md:w-1/2 flex flex-col gap-6 justify-center">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FC432F] to-[#BD4AD1] bg-clip-text text-transparent">
                        Intensive Learning Experiences
                    </h2>
                    <div className="flex items-start gap-4 transition-all duration-300 hover:bg-gray-50 p-3 rounded-lg">
                        <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#2A3DFB] to-[#FC432F] w-12 h-12 flex items-center justify-center text-white text-xl font-bold shadow-md">1</div>
                        <div>
                            <h3 className="font-bold text-lg">Week-long Camps</h3>
                            <p className="ml-2 text-gray-600" style={{ fontFamily: "poppins" }}>Focus on game dev, coding, and esports.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 transition-all duration-300 hover:bg-gray-50 p-3 rounded-lg">
                        <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#FC432F] to-[#BD4AD1] w-12 h-12 flex items-center justify-center text-white text-xl font-bold shadow-md">2</div>
                        <div>
                            <h3 className="font-bold text-lg">Daily Activities</h3>
                            <p className="ml-2 text-gray-600" style={{ fontFamily: "poppins" }}>Workshops, team projects, competitions.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 transition-all duration-300 hover:bg-gray-50 p-3 rounded-lg">
                        <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#BD4AD1] to-[#2A3DFB] w-12 h-12 flex items-center justify-center text-white text-xl font-bold shadow-md">3</div>
                        <div>
                            <h3 className="font-bold text-lg">Key Benefits</h3>
                            <p className="ml-2 text-gray-600" style={{ fontFamily: "poppins" }}>Engagement, skill acceleration, friendships.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Quantum Club: Added hover effects and gradient heading */}
            <section className="py-12 md:py-24">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#2A3DFB] to-[#BD4AD1] bg-clip-text text-transparent">
                    Why Quantum Club?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border-t-4 border-[#2A3DFB] flex flex-col items-start p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                        <span className="mb-3"><Checkmark color="#2A3DFB" /></span>
                        <h3 className="text-xl font-bold mb-2">Skill Development</h3>
                        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "poppins" }}>Coding, game design, and strategic thinking.</p>
                    </div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border-t-4 border-[#FC432F] flex flex-col items-start p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                        <span className="mb-3"><Checkmark color="#FC432F" /></span>
                        <h3 className="text-xl font-bold mb-2">Safe, Engaging Environment</h3>
                        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "poppins" }}>Supervised, structured, and fun.</p>
                    </div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border-t-4 border-[#BD4AD1] flex flex-col items-start p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                        <span className="mb-3"><Checkmark color="#BD4AD1" /></span>
                        <h3 className="text-xl font-bold mb-2">Competitive Edge</h3>
                        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "poppins" }}>Tournaments, team representation, and leadership.</p>
                    </div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border-t-4 border-[#2A3DFB] flex flex-col items-start p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                        <span className="mb-3"><Checkmark color="#2A3DFB" /></span>
                        <h3 className="text-xl font-bold mb-2">Career Pathways</h3>
                        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "poppins" }}>Skills for tech, gaming, and AI careers.</p>
                    </div>
                </div>
            </section>

            {/* 7. What Makes Quantum a Trusted Choice for Parents: Polished list items and image treatment */}
            <section className="flex flex-col md:flex-row items-center gap-12 bg-gray-50/70 rounded-2xl shadow-lg p-10">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2A3DFB] to-[#FC432F] bg-clip-text text-transparent">
                        A Trusted Choice for Parents
                    </h2>
                    <ul className="space-y-2 text-lg">
                        <li className="flex items-start gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/50 hover:translate-x-1">
                            <Checkmark color="#2A3DFB" />
                            <div>
                                <span className="font-bold">Educational Value</span>
                                <div className="text-gray-700" style={{ fontFamily: "poppins" }}>Complements STEM learning</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/50 hover:translate-x-1">
                            <Checkmark color="#FC432F" />
                            <div>
                                <span className="font-bold">Safe Environment</span>
                                <div className="text-gray-700" style={{ fontFamily: "poppins" }}>Supervised, structured activities</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/50 hover:translate-x-1">
                            <Checkmark color="#BD4AD1" />
                            <div>
                                <span className="font-bold">Life Skills</span>
                                <div className="text-gray-700" style={{ fontFamily: "poppins" }}>Teamwork, discipline, problem-solving</div>
                            </div>
                        </li>
                        <li className="flex items-start gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-white/50 hover:translate-x-1">
                            <Checkmark color="#2A3DFB" />
                            <div>
                                <span className="font-bold">Career Prep</span>
                                <div className="text-gray-700" style={{ fontFamily: "poppins" }}>Ready for future tech-driven careers</div>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="flex-1 flex justify-center md:justify-end relative">
                    <div className="absolute top-4 w-full h-full bg-gradient-to-br from-[#BD4AD1]/20 to-transparent rounded-2xl transform rotate-1"></div>
                    <Image src="/assets/about/parents.jpg" width={320} height={320} alt="Parents" className="rounded-xl relative z-10" />
                </div>
            </section>

            {/* 8. Why Partner with Quantum: Added group-hover effects */}
            <section className="pt-12 md:pt-24">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#2A3DFB] to-[#BD4AD1] bg-clip-text text-transparent">
                    Why Partner with Quantum?
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        { color: "#2A3DFB", title: "Enhanced Reputation", desc: "Forward-thinking institution" },
                        { color: "#FC432F", title: "Student Engagement", desc: "Attract with cutting-edge programs" },
                        { color: "#BD4AD1", title: "Revenue Opportunities", desc: "Share fees and winnings" },
                        { color: "#2A3DFB", title: "Community Building", desc: "Foster pride with branded teams" },
                        { color: "#FC432F", title: "Parent Satisfaction", desc: "Align with educational goals" }
                    ].map(({ color, title, desc }) => (
                        <div key={title} className="group flex flex-col  bg-white rounded-xl shadow-lg p-6 w-56 border-b-4 border-[#2A3DFB] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                            <h3 className="text-lg font-bold mb-1 flex flex-row"><Checkmark/>{title}</h3>
                            <p className="text-gray-700 text-left leading-relaxed" style={{ fontFamily: "poppins" }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 9. The Quantum Experience: Redesigned stepper */}
            <section className="pt-12 md:pt-24">
                <h2 className="text-4xl font-bold text-center mb-16 md:mb-20 bg-gradient-to-r from-[#2A3DFB] to-[#BD4AD1] bg-clip-text text-transparent">The Quantum Experience</h2>
                <div className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto">
                    {/* Connecting line for desktop */}
                    <div className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-[#2A3DFB] via-[#BD4AD1] to-[#FC432F] hidden md:block"></div>
                    {[
                        { title: "Consultation", desc: "Understand goals and needs" },
                        { title: "Customization", desc: "Tailor to your institution" },
                        { title: "Setup & Training", desc: "Onboard staff & students" },
                        { title: "Ongoing Support", desc: "Coaching and management" },
                        { title: "Performance", desc: "Track progress, celebrate wins" }
                    ].map(({ title, desc }, idx) => (
                        <div key={title} className="relative z-10 flex-1 flex flex-col items-center text-center mb-12 md:mb-0">
                            <div className="rounded-full bg-white border-4 border-[#2A3DFB] w-24 h-24 flex items-center justify-center mb-4 shadow-lg text-[#2A3DFB] text-4xl font-bold transition-all duration-300 ease-in-out hover:border-[#FC432F] hover:text-[#FC432F] hover:scale-110">{idx + 1}</div>
                            <h3 className="text-lg font-bold mb-1">{title}</h3>
                            <p className="text-gray-700 leading-snug" style={{ fontFamily: "poppins" }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 10. Represent Your Institution: Enhanced with card layout */}
            <section className="pt-12 md:pt-24">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#2A3DFB] to-[#BD4AD1] bg-clip-text text-transparent">Represent Your Institution</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                        <Image src="/assets/about/creation.png" width={256} height={256} alt="Team Creation" className="mb-4 transition-transform duration-300 group-hover:scale-105" />
                        <h3 className="text-2xl font-bold">Team Creation</h3>
                        <p className="text-gray-700 text-md leading-relaxed" style={{ fontFamily: "poppins" }}>Build esports and chess teams</p>
                    </div>
                    <div className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                        <Image src="/assets/about/coach.png" width={256} height={256} alt="Training" className="mb-4 transition-transform duration-300 group-hover:scale-105" />
                        <h3 className="text-2xl font-bold">Training</h3>
                        <p className="text-gray-700 text-md leading-relaxed" style={{ fontFamily: "poppins" }}>Pro coaching for competitions</p>
                    </div>
                    <div className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                        <Image src="/assets/about/competitions.png" width={256} height={256} alt="Competitions" className="mb-4 transition-transform duration-300 group-hover:scale-105" />
                        <h3 className="text-2xl font-bold">Competitions</h3>
                        <p className="text-gray-700 text-md leading-relaxed" style={{ fontFamily: "poppins" }}>National and regional championships</p>
                    </div>
                </div>
            </section>

            {/* 11. Join the Quantum Movement: CTA Banner with improved button */}
            <section className="relative mt-20 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#2A3DFB] via-[#BD4AD1] to-[#FC432F] py-14 px-8">
                <div className="absolute -bottom-1/2 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-1/2 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Join the Quantum Movement
                        </h2>
                        <ul className="flex flex-col md:flex-row gap-x-6 gap-y-2 text-lg text-white justify-center md:justify-start" style={{ fontFamily: "poppins" }}>
                            <li className="flex items-center gap-2"><Checkmark color="white" />Schedule Consultation</li>
                            <li className="flex items-center gap-2"><Checkmark color="white" />Customize Program</li>
                            <li className="flex items-center gap-2"><Checkmark color="white" />Launch Quantum</li>
                        </ul>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
                        <a
                            href="mailto:contact@quantum.eg"
                            className="group inline-flex items-center justify-center bg-white text-[#2A3DFB] font-bold py-4 px-8 rounded-xl shadow-lg text-xl transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-[#FC432F] hover:shadow-2xl hover:scale-105"

                        >
                            <span>Contact Us</span>
                            <ArrowRightIcon className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}