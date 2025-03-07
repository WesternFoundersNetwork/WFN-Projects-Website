import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github } from "lucide-react"
import Image from "next/image"

interface AlumniMember {
  name: string
  graduationYear: number
  currentRole: string
  company: string
  image: string
  linkedin?: string
  github?: string
  achievements: string[]
}

const alumniData: AlumniMember[] = [
  {
    name: "Alex Johnson",
    graduationYear: 2022,
    currentRole: "Software Engineer",
    company: "Google",
    image: "/alumni/alex-johnson.jpg",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    achievements: ["Led the Product Development team", "Winner of University Hackathon 2021"],
  },
  {
    name: "Sarah Lee",
    graduationYear: 2021,
    currentRole: "UX Designer",
    company: "Apple",
    image: "/alumni/sarah-lee.jpg",
    linkedin: "https://linkedin.com/in/sarahlee",
    achievements: ["Designed award-winning app interface", "Mentored junior club members"],
  },
  // Add more alumni data as needed
]

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-[#262626] text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-12 text-center">Our Alumni</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Innovation Club is proud to boast a network of alumni spanning a range of leading firms and industries.
          Through hands-on experience, mentorship programs, and exclusive networking events, Innovation Club empowers
          students to build foundational skills and connect with top institutions.
        </p>

        <h2 className="text-3xl font-bold gradient-text mb-6">Global Representation</h2>
        <p className="text-lg text-gray-300 mb-8">
          Our alumni have built thriving careers in New York, Toronto, Los Angeles, Boston, Chicago, Vancouver, San
          Francisco, Austin, and Montreal.
        </p>
        <p className="text-lg text-gray-300 mb-12">
          Internationally, Innovation Club is represented in global financial centers including London, Hong Kong, and
          Singapore.
        </p>

        <div className="relative w-full h-[400px] md:h-[600px]">
          <Image
            src="/alumni-map.svg"
            alt="Global representation of Innovation Club alumni"
            fill
            className="object-contain"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniData.map((alumni, index) => (
            <Card key={index} className="bg-[#303030] border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={alumni.image} alt={alumni.name} />
                    <AvatarFallback>
                      {alumni.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold gradient-text">{alumni.name}</h2>
                    <p className="text-gray-300">
                      {alumni.currentRole} at {alumni.company}
                    </p>
                    <p className="text-gray-400">Class of {alumni.graduationYear}</p>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  {alumni.linkedin && (
                    <a
                      href={alumni.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {alumni.github && (
                    <a
                      href={alumni.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
                <div className="space-y-2">
                  {alumni.achievements.map((achievement, i) => (
                    <Badge key={i} variant="secondary" className="mr-2">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

