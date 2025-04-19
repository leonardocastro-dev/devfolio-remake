export type Gist = {
  owner: {
    login: string
    avatar_url: string
  }
  created_at: string
  files: Record<
    string,
    {
      filename: string
      content: string
    }
  >
}
