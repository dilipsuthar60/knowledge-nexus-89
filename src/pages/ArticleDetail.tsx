import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, Tag, Share2, Bookmark, Heart } from "lucide-react";
import { getArticleById } from "@/data/sampleArticles";
import { useParams, Link } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = id ? getArticleById(id) : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <article className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>

          {/* Article Meta */}
          <div className="mb-6">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              <Tag className="mr-1 h-3 w-3" />
              {article.category}
            </Badge>
            <h1 className="text-display mb-6 leading-tight">{article.title}</h1>
            
            {/* Author and Meta Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{article.author.name}</div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {article.publishDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {article.imageUrl && (
            <div className="mb-8">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-muted-foreground mb-8 font-medium leading-relaxed">
              {article.excerpt}
            </div>
            
            <Separator className="my-8" />
            
            {/* Article Body */}
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                {article.content} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Understanding the Fundamentals</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Key Concepts</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Scalability and performance considerations</li>
                <li>Best practices and design patterns</li>
                <li>Common pitfalls and how to avoid them</li>
                <li>Real-world implementation examples</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Topics</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              
              <div className="bg-primary-muted p-6 rounded-lg border-l-4 border-primary my-8">
                <h4 className="font-semibold mb-2">💡 Pro Tip</h4>
                <p>
                  Always consider the trade-offs between different approaches and choose 
                  the solution that best fits your specific use case and constraints.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                excepturi sint occaecati cupiditate non provident.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="hover:bg-secondary-hover transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}