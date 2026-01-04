export interface JobItemResponse {
  data: Job[]
  // links: Links
  // meta: Meta
}

export interface Job {
  id: number
  title: string
  description: string
  company: string
  company_website: string
  city: string
  state: string
  schedule: string
  salary: number
  requirements: string
  created_at: string
  updated_at: string
}

// export interface Links {
//   first: string
//   last: string
//   prev: any
//   next: any
// }

// export interface Meta {
//   current_page: number
//   from: number
//   last_page: number
//   path: string
//   per_page: number
//   to: number
//   total: number
// }