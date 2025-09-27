export interface ApiResponse<T> {
  data: T;
  message: string;
  statusCode: number;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn?: number;
}
