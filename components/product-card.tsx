"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Leaf, ShoppingCart } from "lucide-react"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <Badge variant="destructive" className="text-lg font-semibold px-3 py-1.5">
                Sold Out
              </Badge>
            </div>
          )}
          {product.organic && (
            <Badge className="absolute top-2 left-2 bg-green-600 hover:bg-green-700">
              <Leaf className="mr-1 h-3.5 w-3.5" />
              Organic
            </Badge>
          )}
        </Link>
      </div>
      <CardContent className="p-4">
        <div className="mb-1 text-xs text-muted-foreground">
          {product.farmer.name} • {product.farmer.location}
        </div>
        <Link href={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="font-semibold">
        ₹{product.price.toFixed(2)} <span className="text-sm font-normal">/ {product.unit}</span>
        </div>
        <Button size="sm" onClick={() => onAddToCart(product)} disabled={!product.inStock}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add
        </Button>
      </CardFooter>
    </Card>
  )
}
