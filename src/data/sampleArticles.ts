// Sample data for development - replace with real backend when Supabase is connected
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishDate: string;
  tags: string[];
  featured?: boolean;
  imageUrl?: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const sampleArticles: Article[] = [
  {
    id: "1",
    title: "Understanding Microservices Architecture: A Complete Guide",
    excerpt: "Learn the fundamentals of microservices architecture, its benefits, challenges, and best practices for implementation in modern applications.",
    content: "Microservices architecture has become increasingly popular...",
    category: "System Design",
    readTime: "12 min read",
    publishDate: "Dec 20, 2024",
    tags: ["microservices", "architecture", "scalability", "distributed-systems"],
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332bf04?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: "2",
    title: "Binary Search Trees: Implementation and Applications",
    excerpt: "Deep dive into Binary Search Trees, covering implementation details, time complexities, and real-world applications.",
    content: "Binary Search Trees are fundamental data structures...",
    category: "DSA",
    readTime: "8 min read",
    publishDate: "Dec 18, 2024",
    tags: ["binary-tree", "data-structures", "algorithms", "search"],
    imageUrl: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=800&h=400&fit=crop",
    author: {
      name: "Alex Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: "3",
    title: "Database Sharding Strategies for High-Scale Applications",
    excerpt: "Explore different database sharding techniques, their trade-offs, and how to choose the right strategy for your application.",
    content: "Database sharding is a technique used to horizontally partition data...",
    category: "Database",
    readTime: "15 min read",
    publishDate: "Dec 15, 2024",
    tags: ["database", "sharding", "scalability", "performance"],
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: "4",
    title: "Design Patterns in Low-Level Design: Observer Pattern",
    excerpt: "Learn how to implement the Observer pattern effectively in your low-level design interviews and real applications.",
    content: "The Observer pattern is one of the most important behavioral design patterns...",
    category: "LLD",
    readTime: "10 min read",
    publishDate: "Dec 12, 2024",
    tags: ["design-patterns", "observer", "oop", "low-level-design"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    author: {
      name: "Emma Watson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: "5",
    title: "TCP vs UDP: When to Use Which Protocol",
    excerpt: "Understanding the differences between TCP and UDP protocols and making the right choice for your network applications.",
    content: "Network protocols are the backbone of internet communication...",
    category: "Networking",
    readTime: "6 min read",
    publishDate: "Dec 10, 2024",
    tags: ["tcp", "udp", "networking", "protocols"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  },
  {
    id: "6",
    title: "Dynamic Programming: From Recursion to Optimization",
    excerpt: "Master dynamic programming with step-by-step examples, from basic recursion to optimal substructure and memoization.",
    content: "Dynamic programming is a powerful algorithmic technique...",
    category: "Algorithms",
    readTime: "14 min read",
    publishDate: "Dec 8, 2024",
    tags: ["dynamic-programming", "algorithms", "optimization", "recursion"],
    imageUrl: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=800&h=400&fit=crop",
    author: {
      name: "Lisa Zhang",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332bf04?w=150&h=150&fit=crop&crop=face"
    }
  }
];

// Helper functions
export const getFeaturedArticles = () => sampleArticles.filter(article => article.featured);
export const getArticlesByCategory = (category: string) => 
  category === "All" ? sampleArticles : sampleArticles.filter(article => article.category === category);
export const getArticleById = (id: string) => sampleArticles.find(article => article.id === id);