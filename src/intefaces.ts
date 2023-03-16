export enum EKey {
    'LIST_USER','LIST_SINGLE_USER', 'EDIT_USER', 'DELETE_USER', 'UPDATE_USER'
}

export interface IUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface IRequest {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: IUser[]
    support: ISupport
  }
  
  
  export interface ISupport {
    url: string
    text: string
  }

  export interface IDataUser {
    data: IUser
    support: ISupport
  }