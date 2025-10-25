export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  author: string;
  categories: string[];
  isBanner?: boolean;
}

type BlogCardVariant = "home" | "newsroom";

export interface BlogCardProps {
  blog: BlogPost;
  variant?: BlogCardVariant;
  height?: string;
}

export interface BlogBannerCardProps {
  blog: BlogPost;
}
