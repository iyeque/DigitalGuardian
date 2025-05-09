import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Book, Video, GamepadIcon, Crown } from "lucide-react";
import { Link } from "wouter";
import { StarRating } from "@/components/ui/star-rating";
import { ResourceCard } from "@/components/ui/resource-card";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protecting Your Family's Digital Well-being
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Digital Guardian helps parents create a safe and healthy digital environment for their children through education, resources, and support.
            </p>
            <div className="space-x-4">
              <Link href="/resources/blog">
                <Button size="lg">Explore Resources</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-gray-600">
                  Learn about online safety measures and implement effective digital boundaries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20">
              <CardContent className="pt-6">
                <Book className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                <p className="text-gray-600">
                  Access expert articles and guides on digital wellness and parenting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20">
              <CardContent className="pt-6">
                <GamepadIcon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                <p className="text-gray-600">
                  Engage with educational games and activities designed for families.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weekly Featured Resources */}
      <section className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured This Week</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog of the Week */}
            <ResourceCard
              href="/resources/blog"
              badge="Blog of the Week"
              title="Recognizing Harmful Content: Protecting Yourself and Others Online"
              description="The spread of harmful content online is a growing threat to individuals and society."
              footer="By Wilma Mwangi • 4 min read"
              featured
              className="bg-gradient-to-r from-orange-500/20 to-red-500/20"
            />

            {/* Video of the Week */}
            <ResourceCard
              href="/resources/videos"
              badge="Video of the Week"
              title="How Kids Can Stay Safe on Social Media."
              description="Learn how social media is a fun place to share, chat, and connect with friends! 🎉 But do you know how to stay safe while using it? "
              footer="1 minute • By Wilma Mwangi"
              featured
              className="bg-gradient-to-r from-orange-500/20 to-red-500/20"
            />

            {/* Game of the Week */}
            <ResourceCard
              href="/resources/games"
              badge="Game of the Week"
              title="Digital Safety Adventures"
              description="An interactive game teaching kids about online safety through fun challenges."
              footer="Ages 8-12 • 20-30 minutes"
              featured
              className="bg-gradient-to-r from-orange-500/20 to-red-500/20"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <StarRating rating={5} />
                </div>
                <p className="text-gray-600 mb-4">
                  "Digital Guardian has helped our family establish healthy digital habits. The resources are practical and easy to implement."
                </p>
                <div className="text-sm font-medium">
                  Sarah M.
                  <span className="text-gray-500 ml-2">Parent of two</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <StarRating rating={5} />
                </div>
                <p className="text-gray-600 mb-4">
                  "The educational games have made learning about online safety fun for my kids. They actually look forward to their digital wellness lessons!"
                </p>
                <div className="text-sm font-medium">
                  John D.
                  <span className="text-gray-500 ml-2">Father of three</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <StarRating rating={5} />
                </div>
                <p className="text-gray-600 mb-4">
                  "The weekly content updates keep us engaged and informed about the latest digital wellness practices. An invaluable resource for modern parents."
                </p>
                <div className="text-sm font-medium">
                  Lisa R.
                  <span className="text-gray-500 ml-2">Mother of two</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}