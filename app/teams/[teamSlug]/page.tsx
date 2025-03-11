import TeamSubPage from "@/components/team-sub-page"
import allTeamData from "@/constants/team-data"
import NotFound from "@/app/not-found"

export default function TeamPage({ params }: { params: { teamSlug: string } }) {
  const team = allTeamData.find((t) => t.slug === params.teamSlug)

  if (!team || !team.project) {
    return <NotFound/>
  }

  return <TeamSubPage teamName={team.name} vp={team.vp} directors={team.directors} project={team.project} />
}

export function generateStaticParams() {
  return allTeamData.map((team) => ({
    teamSlug: team.slug,
  }))
}

