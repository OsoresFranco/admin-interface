export interface RegUser{
    id: number,
    email: string,
    fullName: string,
    address: string,
    cellPhone: string,
    isAccepted: boolean,
    isDeleted: boolean,
    observations?: string,
    password: string,
    vehicle?: {
      id?:number,
      name?: string,
      isDeleted?: number,
     },
    rol?: {
      id?: number,
      name?: string,
      isDeleted?: number
    }
  }