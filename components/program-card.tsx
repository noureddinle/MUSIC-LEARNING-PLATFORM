import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, Loader2 } from "lucide-react"
import { MusicProgram } from "@/lib/types"
import { fetchMusicPrograms } from "@/lib/api"
import { useEffect, useState } from "react"

export function PathwayCards() {
  const [pathways, setPathways] = useState<MusicProgram[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const limit = 6

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await fetchMusicPrograms(page, limit)
        setPathways(data.programs)
        setTotal(data.total)
      } catch (error) {
        console.error('Error fetching music programs:', error)
        setError('Failed to load music programs')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [page])

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} mins`
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes > 0 ? `${remainingMinutes}m` : ''}`
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-red-500">
        {error}
      </div>
    )
  }

  return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Music Learning Pathways</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your musical journey with our expertly crafted learning pathways designed to take you from beginner
              to professional.
            </p>
          </div>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          ) : pathways.length === 0 ? (
            <div className="text-center text-muted-foreground">No music programs available</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-none">
                {pathways.map((program) => (
                  <Card
                    key={program._id}
                    className="border-none border-0 group hover:shadow-xl transition-all duration-300 overflow-hidden relative h-96 group-hover:scale-105 transform"
                  >
                    <div
                      className="absolute inset-0 border-none bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundImage: `url(${program.media?.thumbnail || "/placeholder.svg"})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge variant="secondary" className="bg-black/70 text-white backdrop-blur-sm">
                        {program.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CardTitle className="text-xl font-heading font-bold mb-2 text-white group-hover:text-primary-foreground transition-colors">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-gray-200 mb-4 line-clamp-2">{program.description}</CardDescription>
                      <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{formatDuration(program.duration)}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors backdrop-blur-sm">
                        Start Learning
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              {total > pathways.length && (
                <div className="flex justify-center mt-12 gap-4">
                  <Button
                    variant="outline"
                    disabled={page === 1}
                    onClick={() => setPage((prev) => prev - 1)}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    disabled={page * limit >= total}
                    onClick={() => setPage((prev) => prev + 1)}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="font-semibold bg-transparent">
              View All Pathways
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
  )
}