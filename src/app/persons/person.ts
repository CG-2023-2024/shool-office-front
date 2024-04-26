export interface Person {
    id?: number,
    firstName: string
    secondName: string
    birthDate: string
    addresses: Address[]
  }
  
  export interface Address {
    id?: number,
    street: string
    houseNumber: string
    flatNumber: number
    postalCode: string
    city: string
    country: string
    addressType: string
  }