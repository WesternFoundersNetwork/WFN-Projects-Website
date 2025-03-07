import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  github?: string
  linkedin?: string
}

export default function TeamMember({ name, role, image, github, linkedin }: TeamMemberProps) {
  return (
    <Card className="bg-white border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative h-64 w-full overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 mb-4">{role}</p>
        <div className="flex justify-center gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

