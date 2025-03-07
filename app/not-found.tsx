import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#262626] text-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Oops! It seems like you've ventured into uncharted territory. Let's get you back to the innovation hub.
        </p>
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e18ca0] to-[#e8b8a8] rounded-full animate-pulse"></div>
          <div className="absolute inset-2 bg-[#262626] rounded-full flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
        </div>
        <Link href="/">
          <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

