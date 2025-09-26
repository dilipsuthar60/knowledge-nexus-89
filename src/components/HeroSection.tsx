import { Search, TrendingUp, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const stats = [
  { icon: BookOpen, label: "Articles", value: "500+" },
  { icon: Users, label: "Readers", value: "10K+" },
  { icon: TrendingUp, label: "Categories", value: "6" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-display text-white leading-tight">
              Master <span className="text-yellow-300">Technical Concepts</span> Through 
              <br />Expert Articles
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Dive deep into System Design, Data Structures, Algorithms, and more. 
              Learn from comprehensive, well-structured articles written by industry experts.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="What would you like to learn today?"
                className="pl-12 pr-4 py-6 text-lg bg-white/95 backdrop-blur border-white/20 shadow-lg focus:shadow-xl transition-all"
              />
              <Button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-hover"
                size="lg"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {["System Design", "DSA", "LLD", "Database", "Networking"].map((category) => (
              <Link
                key={category}
                to={`/${category.toLowerCase().replace(' ', '-')}`}
              >
                <Button 
                  variant="secondary" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur transition-all"
                >
                  {category}
                </Button>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}