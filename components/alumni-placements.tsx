"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"

interface Company {
  name: string
  logo: string
}

const companies: Company[] = [
{ name: "IBM", logo: "/companies/ibm.png" },
  { name: "Amazon", logo: "/companies/amazon.png" },
  { name: "Meta", logo: "/companies/meta.png" },
  { name: "Ivey", logo: "/companies/ivey.png" },
  { name: "mark43", logo: "/companies/mark43.png" },
  { name: "Robinhood", logo: "/companies/robinhood.png" },
  { name: "RBC", logo: "/companies/rbc.png" },
  { name: "TD Bank", logo: "/companies/td.png" },
  { name: "Ontario Teacher Pension Plan", logo: "/companies/otpp.png" },
]

export default function AlumniPlacements() {
    useEffect(() => {
      const autoplay = Autoplay({ delay: 2000, stopOnInteraction: false })
      return () => {
        autoplay.stop()
      }
    }, [])
    return (
      <section className="py-20 bg-[#262626]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8 text-center">Alumni Placements</h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Our alumni have gone on to work at some of the world&apos;s leading technology companies, making significant
            impacts in their fields.
          </p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: true,
              dragFree: true,
            }}
            className="w-full max-w-5xl mx-auto"
            plugins={[
              Autoplay({
                delay: 1000,
                stopOnInteraction: false,
                playOnInit: true,
              }),
            ]}
          >
            <CarouselContent className="animate-carousel">
              {[...companies, ...companies].map((company, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 pl-4">
                  <Card className="bg-white/90 border-white/10 p-6 h-32 flex items-center justify-center">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      width={120}
                      height={60}
                      className="max-w-[120px] max-h-[60px] object-contain"
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    )
  }
  
  

