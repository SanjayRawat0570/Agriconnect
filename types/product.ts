export interface Product {
  id: string
  name: string
  description: string
  price: number
  unit: string // e.g., "lb", "each", "bunch"
  image: string
  category: ProductCategory
  farmer: {
    id: string
    name: string
    location: string
    image: string
  }
  organic: boolean
  inStock: boolean
  quantity: number
}

export type ProductCategory =
  | "vegetables"
  | "fruits"
  | "spices"
  | "grains"
  | "pulses"
  | "dairy"

export interface ProductFilterOptions {
  category?: ProductCategory
  organic?: boolean
  inStock?: boolean
  priceRange?: {
    min: number
    max: number
  }
  sortBy?: "price-asc" | "price-desc" | "name-asc" | "name-desc"
}
