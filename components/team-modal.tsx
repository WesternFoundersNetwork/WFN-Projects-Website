import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

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

interface TeamModalProps {
  team: Team
  onClose: () => void
}

export default function TeamModal({ team, onClose }: TeamModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-[#303030] border-white/10 text-white max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">{team.name}</DialogTitle>
          <DialogDescription className="text-gray-300">{team.description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-4 max-h-[60vh]">
          {team.members.map((member, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-lg font-semibold gradient-text">{member.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{member.role}</p>
              <p className="text-gray-300">{member.bio}</p>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

