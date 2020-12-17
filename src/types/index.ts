interface Args {
  category: string;
}

interface Categories {
  categories: string[]
}

interface Joke {
  id: any
  created_at: string
  icon_url: string
  updated_at: string
  url: string
  value: string
  categories: [string]
}