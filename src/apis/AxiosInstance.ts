import axios, { AxiosInstance } from 'axios'

class Service {
  protected http: AxiosInstance

  constructor(baseURL: string = process.env.NEXT_PUBLIC_BASE_URL as string) {
    this.http = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

export default Service
