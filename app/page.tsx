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
import Image from "next/image"
import { years } from "@/constants/year-data"
import { TeamYear, Team } from "@/types"


export default function Home() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null) 

  const closeModal = () => setSelectedTeam(null)

  return (
    <div className="min-h-screen bg-[#262626] text-white ">
      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="container relative z-10 px-4 py-24 md:py-32 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="w-full text-5xl md:text-7xl font-bold gradient-text mb-6 leading-tight relative inline-block ">
              Projects @ <br />Western Founders<br /> Network
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              The largest portfolio and tech community, bringing together <span className='gradient-text font-semibold'>business, technology, and entrepreneurship</span> within WFN.

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
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 pb-2">What is Projects @ WFN?</h2>
            <p className="text-gray-300 text-lg">
            We provide mentorship, industry connections, and hands-on experiences through 
              <span className="gradient-text font-semibold"> hackathons, demo days, and full-stack development </span>{" "}
                to support your journey in tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#303030] p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold gradient-text mb-3">Mentorship</h3>
              <p className="text-gray-300">
                Every VP mentors a team of 4-5 directors, guiding them in recruiting, career development, and technical skills. Directors gain hands-on experience while learning how to navigate the tech industry with structured support.
              </p>
            </div>

            <div className="bg-[#303030] p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold gradient-text mb-3">Community</h3>
              <p className="text-gray-300">
                As WFN’s largest portfolio, we connect members to FAANG alumni and top industry professionals. Our strong network fosters lasting relationships within WFN and beyond, creating opportunities for growth and collaboration.

              </p>
            </div>

            <div className="bg-[#303030] p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold gradient-text mb-3">Hands-On Experience</h3>
              <p className="text-gray-300">
                We immerse directors in full-stack and web technologies, ensuring they build strong technical skills. Through demo days and hackathons, directors gain real-world experience in the projects they build.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Placements Section */}
      <AlumniPlacements />

      {/* Teams By Year Section */}
      <section id="projects" className="py-20 bg-[#2a2a2a]">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our Teams</h2>
            <p className="text-gray-300 text-lg">
              Meet the <span className="gradient-text font-semibold">innovative minds</span> behind our projects teams.
            </p>
          </div>


          {years.map((year: TeamYear, index: number) => {
            return (
              <YearlyTeamSection
                year={year.year}
                teams={year.teams}
                executives={year.executives}
                onTeamClick={(team: Team) => setSelectedTeam(team)}
              />
            )
          })}

        </div>
      </section>

      <section className="py-20 relative">
        <div className="container px-4 mx-auto relative z-10">
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

      {selectedTeam && <TeamModal team={selectedTeam} onClose={closeModal} />}
    </div>
  )
}

