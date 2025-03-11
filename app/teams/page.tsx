import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { years } from "@/constants/year-data"


export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-[#262626] text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-12 text-center">Our Teams</h1>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Discover the innovative minds behind our projects. Each team brings unique skills and passion to drive our
          club's success.
        </p>
        <div className="space-y-16">
          {years.map((yearData, yearIndex) => {
            const teamsWithSlugs = yearData.teams.filter((team) => team.slug)
            if (teamsWithSlugs.length === 0) return null

            return (
              <div key={yearIndex} className="mb-20">
                <h2 className="text-3xl font-bold gradient-text mb-8">{yearData.year}</h2>
                <div className="space-y-16">
                  {teamsWithSlugs.map((team, teamIndex: number) => (
                    <Card
                      key={teamIndex}
                      className="bg-[#303030] border-white/10 hover:border-white/20 hover:scale-[102%] transition-all duration-300 overflow-hidden"
                    >
                      <Link href={`/teams/${team.slug}`}>
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 relative h-64 md:h-auto">
                              <Image
                                src={team.image || "/placeholder.svg"}
                                alt={`${team.name} team`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="md:w-2/3 p-6 md:p-8">
                              <h3 className="text-3xl font-bold gradient-text mb-4">{team.name}</h3>
                              <p className="text-gray-300 mb-4">{team.description}</p>
                              {team.project && (
                                <div className="mb-6">
                                  <h4 className="text-xl font-semibold mb-2">Current Project</h4>
                                  <p className="text-gray-300">{team.project.name}</p>
                                </div>
                              )}
                              {team.vp && (
                                <div className="mb-6">
                                  <h4 className="text-xl font-semibold mb-2">Team Lead</h4>
                                  <p className="text-gray-300">
                                    {team.vp.name} - {team.vp.role}
                                  </p>
                                </div>
                              )}

                              <p className="inline-flex items-center text-[#e18ca0] hover:text-[#e8b8a8] transition-colors">
                                Learn more about {team.name} <ArrowRight className="ml-2 h-4 w-4" />
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

