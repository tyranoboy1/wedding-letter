/** 웨딩 데이터 인터페이스 */
export interface IWeddingData {
  id: number
  date: string
  location: ILocation
  message: IMessageItem
  galleryImages: string[]
  attendCount: number
  groom: IPerson & { parents: IPerson[] }
  bride: IPerson & { parents: IPerson[] }
}
/** message 인터페이스 */
interface IMessageItem {
  intro: string
  invitation: string
}
/** location 인터페이스 */
export interface ILocation {
  lat: number
  lng: number
  name: string
  address: string
  link: string
  waytocome: IWaytocomeItem
}
interface IWaytocomeItem {
  metro: string[]
  bus: string[]
}

/** account 인터페이스 */
interface IAccount {
  bankName: string
  accountNumber: string
  kakaopayLink?: string
}
/** person 인터페이스 */
export interface IPerson {
  name: string
  phoneNumber: string
  account: IAccount
}
export interface IShare {
  groomName: string
  brideName: string
  date: string
}
