import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { teamData } from "@/constants/team-data"

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-[#262626] text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-12 text-center">Our Teams</h1>
        <div className="space-y-8">
          {teamData.map((team, index) => (
            <Link href={`/teams/${team.slug}`} key={index}>
              <Card className="bg-[#303030] border-white/10 hover:border-white/20 transition-all duration-300 w-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold gradient-text mb-2">{team.name}</h2>
                  <p className="text-gray-300 mb-4">Led by {team.vp.name}</p>
                  <p className="text-gray-400">{team.project.name}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

