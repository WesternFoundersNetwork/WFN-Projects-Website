import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Construction } from "lucide-react"

export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen bg-[#262626] text-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <Construction size={64} className="mx-auto mb-6 text-[#e18ca0]" />
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Under Construction</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          We&apos;re working hard to bring you something amazing. Please check back soon!
        </p>
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e18ca0] to-[#e8b8a8] rounded-full animate-pulse"></div>
          <div className="absolute inset-2 bg-[#262626] rounded-full flex items-center justify-center">
            <span className="text-6xl">🚧</span>
          </div>
        </div>
        <Link href="/">
          <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}

