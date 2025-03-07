"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import YearlyTeamSection from "@/components/yearly-team-section"
import TeamModal from "@/components/team-modal"
import Link from "next/link"
import AlumniPlacements from "@/components/alumni-placements"

export default function Home() {
  const [selectedTeam, setSelectedTeam] = useState(null)

  const closeModal = () => setSelectedTeam(null)

  return (
    <div className="min-h-screen bg-[#262626] text-white ">
      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="container relative z-10 px-4 py-24 md:py-32 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="w-full text-5xl md:text-7xl font-bold gradient-text mb-6 leading-tight relative inline-block ">
              Projects @ <br/>Western Founders'<br/> Network
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              The largest portfolio and tech community <span className="gradient-text font-semibold">business, technology and entrepreneurship</span> community in WFN
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href='https://www.foundersnetwork.ca'>
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Learn more about WFN
                </Button>
              </Link>

              <Link href='#projects'>
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">What is Projects @ WFN?</h2>
            <p className="text-gray-300 text-lg">
              We offer a range of events and initiatives from{" "}
              <span className="gradient-text font-semibold">case competitions, career panels, networking</span>, and
              more to support you along your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#303030] p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold gradient-text mb-3">Product Design Sprint</h3>
              <p className="text-gray-300">
                Our largest designathon, presenting you with the perfect way to elevate your skills in product
                management, design, and prototyping.
              </p>
            </div>

            <div className="bg-[#303030] p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold gradient-text mb-3">Technology Consulting</h3>
              <p className="text-gray-300">
                Tackle real-world business challenges by utilizing modern technologies and innovative solutions.
              </p>
            </div>

            <div className="bg-[#303030] p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold gradient-text mb-3">Pitch Competition</h3>
              <p className="text-gray-300">
                Present your innovative business strategies and solutions for emerging tech challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Placements Section */}
      <AlumniPlacements />

      {/* Teams By Year Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Teams</h2>
            <p className="text-gray-300 text-lg">
              Meet the <span className="gradient-text font-semibold">innovative minds</span> behind our success stories.
            </p>
          </div>

          <YearlyTeamSection
            year="2023-2024"
            description="Our current teams pushing the boundaries of innovation."
            teams={[
              {
                name: "Product Development",
                description: "Creating next-generation solutions for real-world challenges.",
                members: [
                  {
                    name: "Alex Johnson",
                    role: "Team Lead",
                    bio: "Alex is a senior majoring in Computer Science with a passion for user-centric design.",
                  },
                  {
                    name: "Jamie Smith",
                    role: "UX Designer",
                    bio: "Jamie brings creative flair to the team with a background in graphic design and human-computer interaction.",
                  },
                  {
                    name: "Riley Brown",
                    role: "Full-stack Developer",
                    bio: "Riley is a coding prodigy who loves turning innovative ideas into functional prototypes.",
                  },
                ],
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bnW0NVIJqr9O8LTKMncB2Czwhjo1A0.png",
              },
              {
                name: "Tech Consulting",
                description: "Providing strategic technology solutions to businesses.",
                members: [
                  {
                    name: "Taylor Wilson",
                    role: "Consulting Lead",
                    bio: "Taylor has interned at top consulting firms and brings real-world experience to the team.",
                  },
                  {
                    name: "Morgan Lee",
                    role: "Data Analyst",
                    bio: "Morgan excels at turning complex data into actionable insights for clients.",
                  },
                  {
                    name: "Casey Green",
                    role: "Business Strategist",
                    bio: "Casey combines technical knowledge with business acumen to deliver comprehensive solutions.",
                  },
                ],
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bnW0NVIJqr9O8LTKMncB2Czwhjo1A0.png",
              },
              {
                name: "AI Research",
                description: "Advancing the field of artificial intelligence and machine learning.",
                members: [
                  {
                    name: "Sam Taylor",
                    role: "AI Researcher",
                    bio: "Sam is pursuing a Ph.D. in Machine Learning and leads cutting-edge projects in NLP.",
                  },
                  {
                    name: "Alex Wong",
                    role: "Data Scientist",
                    bio: "Alex specializes in computer vision and has published papers in top AI conferences.",
                  },
                  {
                    name: "Jess Martinez",
                    role: "ML Engineer",
                    bio: "Jess excels at implementing and scaling machine learning models for real-world applications.",
                  },
                ],
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bnW0NVIJqr9O8LTKMncB2Czwhjo1A0.png",
              },
            ]}
            onTeamClick={setSelectedTeam}
          />

          <YearlyTeamSection
            year="2022-2023"
            description="The team that set new standards in innovation."
            teams={[
              {
                name: "Digital Transformation",
                description: "Led initiatives in digital transformation and tech adoption.",
                members: [
                  {
                    name: "Chris Lee",
                    role: "Project Manager",
                    bio: "Chris led the team in implementing cutting-edge digital solutions for local businesses.",
                  },
                  {
                    name: "Pat Johnson",
                    role: "Tech Architect",
                    bio: "Pat designed scalable and efficient systems that revolutionized client operations.",
                  },
                  {
                    name: "Morgan Smith",
                    role: "Change Management Specialist",
                    bio: "Morgan ensured smooth transitions for clients adopting new technologies.",
                  },
                ],
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bnW0NVIJqr9O8LTKMncB2Czwhjo1A0.png",
              },
              {
                name: "Emerging Tech",
                description: "Explored and implemented emerging technology solutions.",
                members: [
                  {
                    name: "Jamie Rodriguez",
                    role: "Innovation Scout",
                    bio: "Jamie stayed ahead of tech trends and identified promising new technologies for exploration.",
                  },
                  {
                    name: "Alex Chen",
                    role: "Prototype Developer",
                    bio: "Alex quickly turned emerging tech concepts into working prototypes for testing and demonstration.",
                  },
                  {
                    name: "Taylor Brown",
                    role: "Tech Evangelist",
                    bio: "Taylor excelled at communicating complex tech concepts to diverse audiences.",
                  },
                ],
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bnW0NVIJqr9O8LTKMncB2Czwhjo1A0.png",
              },
            ]}
            onTeamClick={setSelectedTeam}
          />

          <YearlyTeamSection
            year="2021-2022"
            description="The founding teams that established our club's foundation."
            teams={[
              {
                name: "Founding Team",
                description: "Established the Innovation Club and set its vision and mission.",
                members: [
                  {
                    name: "Alex Founder",
                    role: "Club President",
                    bio: "Alex had the initial vision for the Innovation Club and brought together the founding team.",
                  },
                  {
                    name: "Jamie Innovator",
                    role: "Events Coordinator",
                    bio: "Jamie organized our first hackathon, setting the standard for future events.",
                  },
                  {
                    name: "Taylor Tech",
                    role: "Technical Advisor",
                    bio: "Taylor provided technical guidance and established partnerships with tech companies.",
                  },
                ],
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bnW0NVIJqr9O8LTKMncB2Czwhjo1A0.png",
              },
            ]}
            onTeamClick={setSelectedTeam}
          />
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-[#262626]">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Join Our Community</h2>
            <p className="text-gray-300 text-lg mb-8">
              Be part of the largest{" "}
              <span className="gradient-text font-semibold">business, tech, and entrepreneurship</span> community.
            </p>
            <Link href='https://westernusc.store/western-founders-network/'>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {selectedTeam && <TeamModal team={selectedTeam} onClose={closeModal} />}
    </div>
  )
}

