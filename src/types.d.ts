interface Article {
  source?: {
    id: string;
    name: string;
  };
  author?: string | null;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string | null;
  publishedAt?: Date;
  content?: string;
}

interface ResponseProps {
  status?: string;
  totalResults?: number;
  articles: Article[];
}

interface Sources {
  status?: string;
  sources: [{
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
    }]
}

interface Error {
  message: string;
  status: number;
}

export { Article, ResponseProps, Error, Sources };
