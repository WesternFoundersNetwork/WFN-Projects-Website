import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  bio: string
}

interface Team {
  name: string
  description: string
  members: TeamMember[]
  image: string
}

interface YearlyTeamSectionProps {
  year: string
  description: string
  teams: Team[]
  onTeamClick: (team: Team) => void
}

export default function YearlyTeamSection({ year, description, teams, onTeamClick }: YearlyTeamSectionProps) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="border-l-4 border-[#e18ca0] pl-4 mb-8">
        <h3 className="text-2xl font-bold gradient-text">{year}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teams.map((team, index) => (
          <Card
            key={index}
            className="bg-[#303030] border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image src={team.image || "/placeholder.svg"} alt={team.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold gradient-text mb-2">{team.name}</h4>
              <p className="text-gray-300 mb-4">{team.description}</p>
              <Button
                onClick={() => onTeamClick(team)}
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                Meet the Team
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

