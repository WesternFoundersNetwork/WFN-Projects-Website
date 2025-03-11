import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { AwardYear } from "@/types";
import { awardsData } from "@/constants/awards-data";

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-[#262626] text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-12 text-center">
          Hackathon Awards
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Celebrating the innovative projects and achievements of projects directors
          at various hackathons.
        </p>

        {awardsData
          .sort((a, b) => {
            const extractYear = (yearStr: string) => {
              const match = yearStr.match(/\d{4}/); 
              return match ? parseInt(match[0], 10) : 0; 
            };

            return extractYear(b.year) - extractYear(a.year);
          })
          .map(({ year, awards }) => (
            <div key={year} className="mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-6">{year}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {awards.map((award, index) => (
                  <Card key={index} className="bg-[#303030] border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold gradient-text mb-2">
                        {award.projectName || "Untitled Project"}
                      </h3>
                      <p className="text-gray-300 mb-2">{award.hackathon}</p>
                      <p className="text-gray-400 mb-4">{award.awardTitle}</p>
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">
                          Team Members:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {award.teamMembers.map((member, i) => (
                            <Badge key={i} variant="secondary">
                              {member}{" "}
                              {Array.isArray(award?.alumni) && award.alumni.includes(member) && "(Alumni)"}
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
  );
}
