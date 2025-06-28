'use client'
// Make sure you have the proper imports and setup
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Your component
export default function ScrollingCards() {
    const containerRef = useRef(null);

    // This is crucial - make sure scrollYProgress is tied to the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"] // Changed offset for more intuitive range [0, 1]
    });

    const cards = [
        {
            image: "/assets/about/creation.png",
            title: "Team Creation",
            description: "Build esports and chess teams",
            color: "#2A3DFB"
        },
        {
            image: "/assets/about/coach.png",
            title: "Training",
            description: "Pro coaching for competitions",
            color: "#BD4AD1"
        },
        {
            image: "/assets/about/competitions.png",
            title: "Competitions",
            description: "National and regional championships",
            color: "#FC432F"
        }
    ];

    return (
        <section className="relative md:py-24">
            {/* Title */}
            <div className="text-center">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2A3DFB] to-[#BD4AD1] bg-clip-text text-transparent">
                    Represent Your Institution
                </h2>
            </div>

            {/* Cards container - fanned out like holding cards */}
            <div className="flex items-end justify-center  px-4 min-h-[400px]">
                {cards.map((card, index) => {
                    // Fan the cards out by rotating and offsetting each one
                    const rotation = (index - (cards.length - 1) / 2) * 16; // 16 degrees between cards
                    const yOffset = Math.abs(index - (cards.length - 1) / 2) * 15; // Create slight arc

                    return (
                        <div
                            key={index}
                            className="flex-shrink-0"
                            style={{
                                transform: `translateY(${yOffset}px) rotate(${rotation}deg)`,
                                transformOrigin: 'bottom center',
                                zIndex: cards.length - Math.abs(index - (cards.length - 1) / 2) // Center card has highest z-index
                            }}
                        >
                            <div
                                className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center w-80 border-4"
                                style={{ borderColor: card.color }}
                            >
                                <div className="relative mb-6">
                                    <div
                                        className="absolute -inset-2 rounded-2xl opacity-20"
                                        style={{ backgroundColor: card.color }}
                                    ></div>
                                    <Image
                                        src={card.image}
                                        width={200}
                                        height={200}
                                        alt={card.title}
                                        className="relative z-10"
                                    />
                                </div>
                                <h3
                                    className="text-2xl font-bold mb-4"
                                    style={{ color: card.color }}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    className="text-gray-700 text-md leading-relaxed"
                                    style={{ fontFamily: "poppins" }}
                                >
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}