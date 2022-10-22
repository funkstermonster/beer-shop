export interface Beer {
    id: number;
    name: string;
    tagline: string;
    image_url: string;
    contributed_by: string
    volume: number
    price: number
    oldPrice: number
    isOnSale: boolean
    isNew: boolean
    isProductOfTheWeek: boolean
    isSoldOut: boolean
    description: string
    ingredients: Ingredient
    abv: number
    srm: number // What's this?
    ebc: number // What's this?
}

export interface Ingredient {
    malt: Malt[]
    hops: Hops[]
    yeast: string
}

export interface Malt {
    name: string
    amount: Amount
}

export interface Hops {
    name: string
    amount: Amount
    add: string
    attribute: string
}

export interface Amount {
    value: number
    unit: string
}