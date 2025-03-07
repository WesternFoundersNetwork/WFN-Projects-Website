import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

interface ProjectMilestone {
  date: string
  title: string
  description: string
}

interface Project {
  name: string
  description: string
  goals: string[]
  timeline: ProjectMilestone[]
  images: string[]
  socialImages: string[]
}

interface TeamSubPageProps {
  teamName: string
  vp: TeamMember
  directors: TeamMember[]
  project: Project
}

export default function TeamSubPage({ teamName, vp, directors, project }: TeamSubPageProps) {
  return (
    <div className="min-h-screen bg-[#262626] text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-12 py-2 text-center">{teamName}</h1>

        {/* VP Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Avatar className="w-48 h-48 border-4 border-[#e18ca0]">
              <AvatarImage src={vp.image} alt={vp.name} />
              <AvatarFallback>
                {vp.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold gradient-text mb-2">{vp.name}</h2>
              <p className="text-xl text-gray-300 mb-4">{vp.role}</p>
              <p className="text-gray-400">{vp.bio}</p>
            </div>
          </div>
        </div>

        {/* Directors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold gradient-text mb-8">Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <Card key={index} className="bg-[#303030] border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={director.image} alt={director.name} />
                      <AvatarFallback>
                        {director.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold gradient-text">{director.name}</h3>
                      <p className="text-gray-300">{director.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400">{director.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Details Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold gradient-text mb-8">Project Details: {project.name}</h2>
          <Card className="bg-[#303030] border-white/10">
            <CardContent className="p-6">
              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4 bg-[#262626]">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="goals">Goals</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <h3 className="text-2xl font-semibold gradient-text mb-4">Project Overview</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={`${project.name} main image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="goals">
                  <h3 className="text-2xl font-semibold gradient-text mb-4">Project Goals</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {project.goals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="timeline">
                  <h3 className="text-2xl font-semibold gradient-text mb-4">Project Timeline</h3>
                  <div className="space-y-4">
                    {project.timeline.map((milestone, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-[#e18ca0] rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#e18ca0]">{milestone.date}</h4>
                          <h5 className="text-white font-medium">{milestone.title}</h5>
                          <p className="text-gray-300">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="gallery">
                  <h3 className="text-2xl font-semibold gradient-text mb-4">Project Gallery</h3>
                  <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-square relative overflow-hidden rounded-lg">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${project.name} image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Social Pictures Section */}
        <div>
          <h2 className="text-3xl font-bold gradient-text mb-8">Team in Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.socialImages.map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Team social image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

