import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Menu, Upload, Plus, X, Trash2 } from "lucide-react"

export default function AddCoursePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">M</span>
                </div>
                <span className="font-bold text-xl">MusicLearn Admin</span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </a>
                <a href="/admin/courses/add" className="text-foreground font-medium">
                  Add Course
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Add New Course</h1>
            <p className="text-muted-foreground">Create a new course for your music learning platform</p>
          </div>

          <Tabs defaultValue="basic" className="space-y-6">
            <TabsList>
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="content">Course Content</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Course Title</Label>
                      <Input id="title" placeholder="e.g., Advanced Jazz Theory" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instructor">Instructor</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select instructor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dr-taylor">Dr. Robert Taylor</SelectItem>
                          <SelectItem value="thomas-evans">Thomas Evans</SelectItem>
                          <SelectItem value="david-lee">David Lee</SelectItem>
                          <SelectItem value="lisa-anderson">Lisa Anderson</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Course Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a detailed description of what students will learn..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="music-theory">Music Theory</SelectItem>
                          <SelectItem value="instruments">Instruments</SelectItem>
                          <SelectItem value="production">Music Production</SelectItem>
                          <SelectItem value="vocals">Vocals</SelectItem>
                          <SelectItem value="dj">DJ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="level">Difficulty Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (hours)</Label>
                      <Input id="duration" type="number" placeholder="e.g., 8" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Course Image</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-2">Drop your course image here, or click to browse</p>
                      <Button variant="outline">Choose File</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary">
                        Music Theory
                        <Button variant="ghost" size="icon" className="w-4 h-4 ml-1">
                          <X className="w-3 h-3" />
                        </Button>
                      </Badge>
                      <Badge variant="secondary">
                        Jazz
                        <Button variant="ghost" size="icon" className="w-4 h-4 ml-1">
                          <X className="w-3 h-3" />
                        </Button>
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Add a tag..." className="flex-1" />
                      <Button variant="outline">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Sections</h3>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Section
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {[
                        { title: "Introduction to Jazz Theory", lessons: 3 },
                        { title: "Chord Progressions", lessons: 4 },
                        { title: "Improvisation Techniques", lessons: 5 },
                      ].map((section, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h4 className="font-semibold">{section.title}</h4>
                                <p className="text-sm text-muted-foreground">{section.lessons} lessons</p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Plus className="w-4 h-4 mr-2" />
                              Add Lesson
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Course Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="List any prerequisites or requirements for this course..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="outcomes">Learning Outcomes</Label>
                    <Textarea
                      id="outcomes"
                      placeholder="What will students be able to do after completing this course?"
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Pricing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Course Price ($)</Label>
                      <Input id="price" type="number" placeholder="99.99" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="discount">Discount Price ($)</Label>
                      <Input id="discount" type="number" placeholder="79.99" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Pricing Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pricing type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-time">One-time Purchase</SelectItem>
                        <SelectItem value="subscription">Subscription Only</SelectItem>
                        <SelectItem value="both">Both Options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="free-preview" className="rounded" />
                    <Label htmlFor="free-preview">Offer free preview lessons</Label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Publication Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="certificate" className="rounded" defaultChecked />
                      <Label htmlFor="certificate">Provide certificate upon completion</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="subtitles" className="rounded" defaultChecked />
                      <Label htmlFor="subtitles">Include subtitles</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="downloadable" className="rounded" />
                      <Label htmlFor="downloadable">Allow downloadable resources</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="discussion" className="rounded" defaultChecked />
                      <Label htmlFor="discussion">Enable course discussions</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-4 mt-8">
            <Button variant="outline">Save as Draft</Button>
            <Button>Publish Course</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
