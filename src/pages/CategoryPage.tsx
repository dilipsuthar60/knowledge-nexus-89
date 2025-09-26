import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, SortAsc } from "lucide-react";
import { getArticlesByCategory } from "@/data/sampleArticles";
import { useParams } from "react-router-dom";

const categoryMap: { [key: string]: string } = {
  "system-design": "System Design",
  "low-level-design": "LLD",
  "data-structures": "DSA",
  "algorithms": "Algorithms",
  "database": "Database",
  "networking": "Networking",
};

export default function CategoryPage() {
  const { category } = useParams();
  const categoryName = category ? categoryMap[category] || "All" : "All";
  const articles = getArticlesByCategory(categoryName);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              {articles.length} Articles
            </Badge>
            <h1 className="text-display mb-4">{categoryName} Articles</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {categoryName === "System Design" && "Learn how to design scalable, reliable, and maintainable systems used by millions of users."}
              {categoryName === "DSA" && "Master fundamental data structures and algorithms essential for technical interviews and problem-solving."}
              {categoryName === "LLD" && "Understand object-oriented design principles and patterns for building robust software applications."}
              {categoryName === "Database" && "Explore database concepts, optimization techniques, and modern data storage solutions."}
              {categoryName === "Algorithms" && "Deep dive into algorithmic thinking, complexity analysis, and optimization strategies."}
              {categoryName === "Networking" && "Understand network protocols, distributed systems, and communication patterns."}
              {categoryName === "All" && "Explore our complete collection of technical articles covering all topics."}
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="py-6 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <SortAsc className="mr-2 h-4 w-4" />
                Sort by Latest
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {articles.length} articles
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-title mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Articles for this category will be available soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}