import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";
import { sampleArticles, getFeaturedArticles } from "@/data/sampleArticles";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredArticles = getFeaturedArticles();
  const recentArticles = sampleArticles.slice(0, 6);
  const categories = [
    { name: "System Design", count: 25, color: "bg-blue-500" },
    { name: "DSA", count: 30, color: "bg-green-500" },
    { name: "LLD", count: 20, color: "bg-purple-500" },
    { name: "Database", count: 15, color: "bg-orange-500" },
    { name: "Algorithms", count: 22, color: "bg-red-500" },
    { name: "Networking", count: 12, color: "bg-teal-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-headline mb-2">Featured Articles</h2>
              <p className="text-body text-muted-foreground">
                Hand-picked articles covering the most important concepts
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/featured">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-headline mb-4">Explore Categories</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Discover articles organized by topics to help you learn and grow in your technical journey
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/${category.name.toLowerCase().replace(' ', '-')}`}
                className="group"
              >
                <div className="card-interactive bg-card p-6 text-center space-y-3">
                  <div className={`w-12 h-12 ${category.color} rounded-lg mx-auto flex items-center justify-center text-white font-bold text-xl`}>
                    {category.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} articles
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-headline mb-2">Recent Articles</h2>
              <p className="text-body text-muted-foreground">
                Latest technical insights and deep dives
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/all">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-headline mb-4">Join Our Growing Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Learn from comprehensive technical articles and advance your career
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-primary-foreground/80">Readers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Topics</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
