import TeamSubPage from "@/components/team-sub-page"
import { teamData } from "@/constants/team-data"

export default function TeamPage({ params }: { params: { teamSlug: string } }) {
  const team = teamData.find((t) => t.slug === params.teamSlug)

  if (!team) {
    return <div>Team not found</div>
  }

  return <TeamSubPage teamName={team.name} vp={team.vp} directors={team.directors} project={team.project} />
}

export function generateStaticParams() {
  return teamData.map((team) => ({
    teamSlug: team.slug,
  }))
}

