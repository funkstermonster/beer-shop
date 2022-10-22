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
}