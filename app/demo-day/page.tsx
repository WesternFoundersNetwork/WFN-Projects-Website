"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import UnderConstructionPage from "../_utils/page";

interface DemoProject {
  teamName: string
  projectName: string
  description: string
  images: string[]
  videoUrl?: string
}

interface YearlyDemoProjects {
  year: number
  projects: DemoProject[]
}

const demoProjectsByYear: YearlyDemoProjects[] = [
  {
    year: 2023,
    projects: [
      {
        teamName: "Team Alpha",
        projectName: "SmartCity Solutions",
        description: "An IoT-based system for optimizing urban infrastructure and reducing energy consumption.",
        images: ["/demo-day/smartcity1.jpg", "/demo-day/smartcity2.jpg"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        teamName: "Team Beta",
        projectName: "HealthTrack AI",
        description: "An AI-powered health monitoring app that provides personalized wellness recommendations.",
        images: ["/demo-day/healthtrack1.jpg", "/demo-day/healthtrack2.jpg"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  },
  {
    year: 2022,
    projects: [
      {
        teamName: "Team Gamma",
        projectName: "EcoFarm",
        description: "A sustainable farming solution using vertical gardening and automated irrigation systems.",
        images: ["/demo-day/ecofarm1.jpg", "/demo-day/ecofarm2.jpg"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  },
  // Add more years and projects as needed
]

export default function DemoDayPage() {
  const [selectedYear, setSelectedYear] = useState(demoProjectsByYear[0].year)

  const currentYearProjects = demoProjectsByYear.find((y) => y.year === selectedYear)?.projects || []
  
  return <UnderConstructionPage/>

  return (
    <div className="min-h-screen bg-[#262626] text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text pb-3 mb-12 text-center">Demo Day Showcase</h1>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-gray-300 mb-6 text-center">
            Demo Day is the culmination of WFN project's hard work and creativity. It's an opportunity for our
            teams to showcase their innovative projects to peers, mentors, and industry professionals.
          </p>
          <p className="text-lg text-gray-400 text-center mb-8">
            Each team presents their project, demonstrating working prototypes, explaining their development process,
            and discussing potential real-world applications.
          </p>

          <Select onValueChange={(value) => setSelectedYear(Number(value))}>
            <SelectTrigger className="w-[180px] mx-auto">
              <SelectValue placeholder="Select a year" />
            </SelectTrigger>

            <SelectContent className="max-h-[200px] overflow-y-auto ">
              {demoProjectsByYear.map((yearData) => (
                <SelectItem key={yearData.year} value={yearData.year.toString()}>
                  {yearData.year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

        </div>

        <Tabs defaultValue={currentYearProjects[0]?.teamName} className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto border overflow-y-hidden">
            {currentYearProjects.map((project, index) => (
              <TabsTrigger key={index} value={project.teamName} className="text-lg">
                {project.teamName}
              </TabsTrigger>
            ))}
          </TabsList>

          {currentYearProjects.map((project, index) => (
            <TabsContent key={index} value={project.teamName}>
              <Card className="bg-[#303030] border-white/10">
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold gradient-text mb-4">{project.projectName}</h2>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {project.images.map((image, i) => (
                      <AspectRatio key={i} ratio={16 / 9} className="bg-muted">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.projectName} image ${i + 1}`}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </AspectRatio>
                    ))}
                  </div>

                  {project.videoUrl && (
                    <div className="mt-6">
                      <h3 className="text-2xl font-semibold mb-4">Project Demo</h3>
                      <AspectRatio ratio={16 / 9} className="bg-muted">
                        <iframe
                          src={project.videoUrl}
                          title={`${project.projectName} demo video`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-lg"
                        ></iframe>
                      </AspectRatio>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

