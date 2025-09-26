import { Calendar, Clock, Tag, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  tags: string[];
  featured?: boolean;
  imageUrl?: string;
}

export function ArticleCard({
  id,
  title,
  excerpt,
  category,
  readTime,
  publishDate,
  tags,
  featured = false,
  imageUrl,
}: ArticleCardProps) {
  return (
    <Link to={`/article/${id}`}>
      <Card className={`card-interactive h-full transition-all duration-300 hover:shadow-card-hover ${
        featured ? "ring-2 ring-primary/20" : ""
      }`}>
        {imageUrl && (
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={imageUrl}
              alt={title}
              className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {featured && (
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  Featured
                </Badge>
              </div>
            )}
          </div>
        )}
        
        <CardContent className="p-6 space-y-4">
          {/* Category and Meta */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <Badge variant="outline" className="text-primary border-primary/20">
              <Tag className="mr-1 h-3 w-3" />
              {category}
            </Badge>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {publishDate}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {readTime}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-title line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-body text-muted-foreground line-clamp-3">
            {excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-secondary hover:bg-secondary-hover transition-colors"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{tags.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}