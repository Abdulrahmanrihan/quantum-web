'use client'

import React from 'react'
import HeroSection from '../components/Hero'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home: React.FC = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform scroll progress to horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    const cards = [
        {
            title: "Learn",
            description: "Game development, coding, AI, and chess.",
            image: "/assets/home/1.png",
            color: "#2A3DFB",
            gradientFrom: "from-[#2A3DFB]/20",
            rotation: "-rotate-3",
            shadowPosition: "-top-4 -left-4",
            gradientDirection: "bg-gradient-to-br"
        },
        {
            title: "Compete",
            description: "Esports academy training and branded teams for schools/clubs.",
            image: "/assets/home/2.png",
            color: "#FC432F",
            gradientFrom: "from-[#FC432F]/20",
            rotation: "rotate-3",
            shadowPosition: "-top-4 -right-4",
            gradientDirection: "bg-gradient-to-bl"
        },
        {
            title: "Grow",
            description: "Certifications, summer camps, and career pathways.",
            image: "/assets/home/3.png",
            color: "#BD4AD1",
            gradientFrom: "from-[#BD4AD1]/20",
            rotation: "-rotate-2",
            shadowPosition: "-top-4 -left-4",
            gradientDirection: "bg-gradient-to-br"
        },
        {
            title: "Play",
            description: "State-of-the-art gaming facilities and tournaments.",
            image: "/assets/home/4.png",
            color: "#2A3DFB",
            gradientFrom: "from-[#2A3DFB]/20",
            rotation: "rotate-2",
            shadowPosition: "-top-4 -right-4",
            gradientDirection: "bg-gradient-to-bl"
        }
    ];

    return (
        <main className="container mx-auto px-4 py-12 armstrong">
            <HeroSection />

            <section className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded shadow p-6">
                    <h2 className="text-xl font-bold mb-2">Game Development & Coding</h2>
                    <p>Learn to design and code games using Python, Unity, Unreal Engine, and AI.</p>
                </div>
                <div className="bg-white rounded shadow p-6">
                    <h2 className="text-xl font-bold mb-2">Esports Training</h2>
                    <p>Pro coaching in games like LoL and FIFA. Focus on teamwork, strategy, and discipline.</p>
                </div>
                <div className="bg-white rounded shadow p-6">
                    <h2 className="text-xl font-bold mb-2">Chess & Strategic Thinking</h2>
                    <p>Develop critical thinking and problem-solving skills through tournaments and workshops.</p>
                </div>
            </section>

            <section ref={targetRef} className="relative h-[300vh]">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <div className="container mx-auto px-4">
                        {/* Title - Fixed Position */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-[#2A3DFB] via-[#BD4AD1] to-[#FC432F] bg-clip-text text-transparent"
                                style={{ fontFamily: "var(--font-armstrong), sans-serif" }}>
                                Quantum: Game. Learn. Grow.
                            </h1>
                        </div>

                        {/* Horizontal Scrolling Cards */}
                        <motion.div
                            style={{ x }}
                            className="flex gap-8 w-max"
                        >
                            {cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    className="group bg-white rounded-2xl shadow-lg p-8 border-t-4 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-80"
                                    style={{ borderTopColor: card.color }}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="relative mb-6">
                                        <div className={`absolute ${card.shadowPosition} w-full h-full ${card.gradientDirection} ${card.gradientFrom} to-transparent rounded-2xl transform ${card.rotation}`}></div>
                                        <div className="relative z-10 w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="rounded-xl w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4" style={{ color: card.color }}>
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "poppins" }}>
                                        {card.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-[#2A3DFB] via-[#BD4AD1] to-[#FC432F] py-16 md:py-24 rounded-2xl p-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left side - Text content */}
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white" style={{ fontFamily: "var(--font-armstrong), sans-serif" }}>
                        <span className="block">
                        Transforming passion for gaming into real-world skills
                        </span>
                        </h2>
                    </div>

                    {/* Right side - GIF */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-lg aspect-square">
                        <div className="absolute inset-0 bg-white/20 rounded-2xl shadow-lg transform rotate-3"></div>
                        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-xl">
                            <img 
                            src="/assets/gif.gif" 
                            alt="Red Sea's Premier Training Camp" 
                            className="w-full h-full object-cover rounded-2xl" 
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>




            {/* Gaming Today, Careers Tomorrow Section */}
            <section className="flex flex-col md:flex-row items-center gap-12 container mx-auto px-4 py-16 md:py-24">
                <div className="md:w-2/3 flex flex-col gap-8 justify-center">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2A3DFB] to-[#FC432F] bg-clip-text text-transparent">
                        Gaming Today, Careers Tomorrow
                    </h2>

                    <div className="flex items-start gap-4 transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg">
                        <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#FC432F] to-[#BD4AD1] w-12 h-12 flex items-center justify-center text-white text-xl font-bold shadow-md">1</div>
                        <div>
                            <h3 className="font-bold text-lg text-[#FC432F]">The Reality</h3>
                            <p className="text-gray-600" style={{ fontFamily: "poppins" }}>Kids spend hours gaming, often seen as unproductive</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg">
                        <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#BD4AD1] to-[#2A3DFB] w-12 h-12 flex items-center justify-center text-white text-xl font-bold shadow-md">2</div>
                        <div>
                            <h3 className="font-bold text-lg text-[#BD4AD1]">The Opportunity</h3>
                            <p className="text-gray-600" style={{ fontFamily: "poppins" }}>Gaming: gateway to tech careers, critical thinking, teamwork</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg">
                        <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#2A3DFB] to-[#FC432F] w-12 h-12 flex items-center justify-center text-white text-xl font-bold shadow-md">3</div>
                        <div>
                            <h3 className="font-bold text-lg text-[#2A3DFB]">Our Mission</h3>
                            <p className="text-gray-600" style={{ fontFamily: "poppins" }}>Transform gaming into skill-building, career-shaping experiences</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 transition-all duration-300 hover:bg-gray-50 p-4 rounded-lg">
                        <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#FC432F] to-[#BD4AD1] w-12 h-12 flex items-center justify-center text-white text-xl font-bold shadow-md">4</div>
                        <div>
                            <h3 className="font-bold text-lg text-[#FC432F]">The Result</h3>
                            <p className="text-gray-600" style={{ fontFamily: "poppins" }}>Students gain real-world skills while doing what they love</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/3 flex justify-center md:justify-end relative">
                    <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-bl from-[#2A3DFB]/20 to-transparent rounded-2xl transform rotate-3"></div>
                    <div className="relative z-10 w-full bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
                        <img src="/assets/home/5.jpg" alt="Gaming careers" className="rounded-xl w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            <section className="bg-indigo-50 rounded p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Gaming Today, Careers Tomorrow</h3>
                <p className="mb-4">
                    Our mission is to transform gaming into skill-building, career-shaping experiences. Students gain real-world skills while doing what they love.
                </p>
                <a href="/about" className="inline-block mt-4 px-6 py-2 bg-indigo-700 text-white rounded font-semibold hover:bg-indigo-800">Learn More</a>
            </section>
        </main>
    )
}

export default Home
