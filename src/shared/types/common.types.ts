export interface ApiResponse<T> {
  data: T;
  message: string;
  statusCode: number;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}
