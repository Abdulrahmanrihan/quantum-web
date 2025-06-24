import React from 'react'
import HeroSection from '../components/Hero'
const Home: React.FC = () => (
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

    {/* 1. Quantum: Game. Learn. Grow. Section */}
    <section className="container mx-auto px-4 py-16 md:py-24 space-y-16">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-[#2A3DFB] via-[#BD4AD1] to-[#FC432F] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-armstrong), sans-serif" }}>
                Quantum: Game. Learn. Grow.
            </h1>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Learn Card */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#2A3DFB] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <div className="relative mb-6">
                    <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#2A3DFB]/20 to-transparent rounded-2xl transform -rotate-3"></div>
                    <div className="relative z-10 w-full h-38 bg-gray-200 rounded-xl flex items-center justify-center">
                        <img src="/assets/home/1.png" alt="Learn" className="rounded-xl w-full h-full object-cover" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2A3DFB]">Learn</h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "poppins" }}>
                    Game development, coding, AI, and chess.
                </p>
            </div>

            {/* Compete Card */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#FC432F] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <div className="relative mb-6">
                    <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-bl from-[#FC432F]/20 to-transparent rounded-2xl transform rotate-3"></div>
                    <div className="relative z-10 w-full h-38 bg-gray-200 rounded-xl flex items-center justify-center">
                        <img src="/assets/home/2.png" alt="Learn" className="rounded-xl w-full h-full object-cover" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#FC432F]">Compete</h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "poppins" }}>
                    Esports academy training and branded teams for schools/clubs.
                </p>
            </div>

            {/* Grow Card */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#BD4AD1] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <div className="relative mb-6">
                    <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#BD4AD1]/20 to-transparent rounded-2xl transform -rotate-2"></div>
                    <div className="relative z-10 w-full h-38 bg-gray-200 rounded-xl flex items-center justify-center">
                    <img src="/assets/home/3.png" alt="Learn" className="rounded-xl w-full h-full object-cover" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#BD4AD1]">Grow</h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "poppins" }}>
                    Certifications, summer camps, and career pathways.
                </p>
            </div>

            {/* Play Card */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#2A3DFB] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <div className="relative mb-6">
                    <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-bl from-[#2A3DFB]/20 to-transparent rounded-2xl transform rotate-2"></div>
                    <div className="relative z-10 w-full h-38 bg-gray-200 rounded-xl flex items-center justify-center">
                        <img src="/assets/home/4.png" alt="Learn" className="rounded-xl w-full h-full object-cover" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2A3DFB]">Play</h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "poppins" }}>
                    State-of-the-art gaming facilities and tournaments.
                </p>
            </div>
        </div>
    </section>

    {/* 2. Gaming Today, Careers Tomorrow Section */}
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
                <img src="/assets/home/5.jpg" alt="Learn" className="rounded-xl w-full h-full object-cover" />
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

export default Home
