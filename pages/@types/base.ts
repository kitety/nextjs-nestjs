export interface IRes<T> {
  code: string;
  m: string;
  d: T;
  success: boolean;
}

export interface ILoginReq {
  user: string;
}
