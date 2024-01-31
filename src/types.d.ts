interface Article {
  title: string
  snippet?: string | null;
  timestamp?: string;
  publisher?: string;
  newsUrl: string;
  images: {
    thumbnail: string
  };
  hasSubnews?: boolean;
  subnews?: {
    title: string
    snippet?: string | null;
    timestamp?: string;
    publisher?: string;
    newsUrl: string;
    images: {
      thumbnail: string
    };
  }
}

interface ResponseProps {
  status?: string;
  items: Article[];
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
