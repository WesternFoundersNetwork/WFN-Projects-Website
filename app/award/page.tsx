import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface Award {
  year: number
  hackathon: string
  projectName: string
  teamMembers: string[]
  alumni: string[]
  repoLink?: string
  devpostLink?: string
  description: string
}

const awardsData: Award[] = [
  {
    year: 2023,
    hackathon: "HackMIT",
    projectName: "EcoTrack",
    teamMembers: ["Alice Smith", "Bob Johnson", "Charlie Brown"],
    alumni: ["Alice Smith"],
    repoLink: "https://github.com/ecotrack",
    devpostLink: "https://devpost.com/software/ecotrack",
    description: "A sustainability tracking app that won first place in the Environmental Tech category.",
  },
  {
    year: 2022,
    hackathon: "CalHacks",
    projectName: "MindMeld",
    teamMembers: ["David Lee", "Eve Taylor", "Frank Wilson"],
    alumni: ["David Lee", "Eve Taylor"],
    repoLink: "https://github.com/mindmeld",
    devpostLink: "https://devpost.com/software/mindmeld",
    description: "An AI-powered collaborative learning platform that secured the Best Education Hack award.",
  },
  // Add more awards data as needed
]

export default function AwardsPage() {
  const years = [...new Set(awardsData.map((award) => award.year))].sort((a, b) => b - a)

  return (
    <div className="min-h-screen bg-[#262626] text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-12 text-center">Hackathon Awards</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Celebrating the innovative projects and achievements of our club members in various hackathons.
        </p>
        {years.map((year) => (
          <div key={year} className="mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-6">{year}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awardsData
                .filter((award) => award.year === year)
                .map((award, index) => (
                  <Card key={index} className="bg-[#303030] border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold gradient-text mb-2">{award.projectName}</h3>
                      <p className="text-gray-300 mb-4">{award.hackathon}</p>
                      <p className="text-gray-400 mb-4">{award.description}</p>
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Team Members:</h4>
                        <div className="flex flex-wrap gap-2">
                          {award.teamMembers.map((member, i) => (
                            <Badge key={i} variant="secondary">
                              {member} {award.alumni.includes(member) && "(Alumni)"}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        {award.repoLink && (
                          <Link
                            href={award.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-300 hover:text-white"
                          >
                            <Github className="mr-2" size={20} />
                            Repository
                          </Link>
                        )}
                        {award.devpostLink && (
                          <Link
                            href={award.devpostLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-300 hover:text-white"
                          >
                            <ExternalLink className="mr-2" size={20} />
                            Devpost
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

