export interface GistFile {
  filename: string
  type: string
  language: string
  raw_url: string
  size: number
}

export interface GistOwner {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

export interface Gist {
  url: string
  id: string
  html_url: string
  files: {
    [key: string]: GistFile
  }
  public: boolean
  created_at: string
  updated_at: string
  description: string
  owner: GistOwner
}
