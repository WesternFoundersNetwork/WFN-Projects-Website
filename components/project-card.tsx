import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  github?: string
  demo?: string
}

export default function ProjectCard({ title, description, tags, image, github, demo }: ProjectCardProps) {
  return (
    <Card className="bg-white border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        {github && (
          <Button variant="outline" size="sm" className="border-gray-200 text-gray-600 hover:bg-gray-50" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {demo && (
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

