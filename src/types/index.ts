interface IssueAuthor {
  name: string
  avatar_url: string
  acc_url: string
}

export interface IssueProject {
  org: string
  name: string
  url: string
}

export interface IssueObject {
  url: string
  title: string
  comments: number
  author: IssueAuthor
  project: IssueProject | undefined
  locked: boolean
  state: string
  created_at: string | Date
  updated_at: string | Date
  labels: string[]
}