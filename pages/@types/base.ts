export interface IRes<T> {
  c: string;
  m: string;
  d: T;
  success: boolean;
}

export interface ILoginReq {
  user: string;
}
