import Image from "next/image";
import Link from "next/link";

// ArrowRightIcon Component
const ArrowRightIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5" {...props}>
        <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
        />
    </svg>
);

// Hero Section Component
export default function HeroSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 md:py-24 px-4 md:px-8">
            {/* Image */}
            <div className="relative order-first md:order-last">
                {/* Decorative Gradient Background */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#2A3DFB]/20 to-transparent rounded-2xl transform -rotate-3 z-0" />

                <Image
                    src="/assets/about/team.jpg"
                    alt="Team"
                    width={200}
                    height={150}
                    className="rounded-xl shadow-lg object-cover relative z-10 w-[160px] sm:w-[200px] h-auto"
                />

            </div>

            {/* Text Content */}
            <div className="text-center md:text-left order-last md:order-first">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-[#2A3DFB] via-[#BD4AD1] to-[#FC432F] bg-clip-text text-transparent">
                    Empowering the Next Generation of Gamers, Coders, and Thinkers
                </h1>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Transforming passion for gaming into real-world skills and career opportunities.
                </p>

                <div className="flex justify-center md:justify-start gap-3 mb-10 flex-wrap">
                    <span className="bg-[#2A3DFB]/10 text-[#2A3DFB] px-4 py-2 rounded-full font-semibold text-sm">Learn</span>
                    <span className="bg-[#FC432F]/10 text-[#FC432F] px-4 py-2 rounded-full font-semibold text-sm">Compete</span>
                    <span className="bg-[#BD4AD1]/10 text-[#BD4AD1] px-4 py-2 rounded-full font-semibold text-sm">Innovate</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <Link
                        href="/programs"
                        className="group inline-flex items-center justify-center bg-gradient-to-r from-[#2A3DFB] to-[#BD4AD1] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
                    >
                        Explore Programs
                        <ArrowRightIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105"
                    >
                        Join Now
                    </Link>
                </div>
            </div>
        </section>
    );
}
