export interface Book {
    "ISBN": number,
    "title": string,
    "author": string,
    "summary": string,
    "image": string,
    "price": Price
}

interface Price {
    "currency": string,
    "value": number,
    "displayValue": string
}

export interface Author {
    "id": string | number,
    "name": string,
    "biography": string,
    "image": string,
    "books": Book[]
}

export interface ObjOfDrinks {
    "coldDrinks": Drinks[],
    "hotDrinks": Drinks[]
}

export interface Drinks {
    "title": string,
    "description": string,
    "ingredients": string[],
    "image": string,
    "id": number,
    "price": Price
}

export interface Desserts {
    "id": number,
    "name": string,
    "price": Price,
    "description": string,
    "img": string,
}

export interface MenuState {
    drinks: ObjOfDrinks,
    desserts: Desserts[]
}

export interface Booking {
    firstName: string,
    lastName: string,
    telNum: string,
    date: string
}

export interface CustomObj {
    cardNumber: string,
    cardUntil: string,
    cardName: string,
}

interface User {
    login: string,
    firstName: string,
    lastName: string,
}

export interface UserProfile extends User {
    roles: string[]
}

export interface UserRegister extends User {
    password: string
}

export interface State {
    user: UserProfile,
    token: string
}