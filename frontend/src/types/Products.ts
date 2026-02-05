
type ImageSet = {
    desktop: string,
    mobile: string,
    tablet: string,
    thumbnails: string
}

type Ingredients = {
    name:string,
    weight: number
}


export type Prod = {
    id: string,
    image: ImageSet,
    category: string,
    ingredients: Ingredients[],
    name:string,
    weight:number,
    calories: number,
    price: number
}

