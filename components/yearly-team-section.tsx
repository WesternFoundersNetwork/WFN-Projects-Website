import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Team, TeamMember } from "@/types";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface YearlyTeamSectionProps {
  year: string;
  teams: Team[];
  executives: TeamMember[];
  onTeamClick: (team: Team) => void;
}

export default function YearlyTeamSection({ year, teams, executives, onTeamClick }: YearlyTeamSectionProps) {
  return (
    <div className="mb-20 last:mb-0">
      {/* Year Header */}
      <div className="border-l-4 border-[#e18ca0] pl-4 mb-8">
        <h3 className="text-2xl font-bold gradient-text">{year}</h3>
      </div>

      {/* Teams Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

      {/* Executives Section */}
      {executives.length > 0 && (
        <div className="text-center">
          <h4 className="text-2xl font-bold gradient-text mb-4">Executive Team</h4>
          <p className="text-gray-300 mb-6">Meet the leadership team guiding this year.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executives.map((executive, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="bg-[#303030] border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 cursor-pointer">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src={executive.image || "/placeholder.svg"} alt={executive.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h4 className="text-xl font-bold gradient-text mb-2">{executive.name}</h4>
                      <p className="text-gray-300">{executive.role}</p>
                      <Button className="mt-4 bg-[#e18ca0] hover:bg-[#e8b8a8] text-white w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="bg-[#222] text-white p-6 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image src={executive.image || "/placeholder.svg"} alt={executive.name} fill className="object-cover" />
                    </div>
                    <DialogTitle className="text-2xl font-bold">{executive.name}</DialogTitle>
                    <p className="text-gray-400">{executive.role}</p>
                    {executive.bio && <p className="text-gray-300 text-sm mt-4">{executive.bio}</p>}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
