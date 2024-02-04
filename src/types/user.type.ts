export enum Grant {
  REFRESH = "refresh_token",
  AUTHORIZATION = "authorization_code",
}

export interface AuthorizationInfo {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

export interface RefreshTokenRequest {
  grant_type: Grant.REFRESH;
  refresh_token: string;
  client_id: string;
}
export interface AuthorizationTokenRequest {
  grant_type: Grant.AUTHORIZATION;
  code: string;
  code_verifier: string;
  redirect_uri: string;
}

export type CurrTokenRequest<IS_REFRESH> = IS_REFRESH extends true
  ? RefreshTokenRequest
  : AuthorizationTokenRequest;
