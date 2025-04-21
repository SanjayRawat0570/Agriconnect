"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { ChevronLeft, Leaf, Minus, Plus, ShoppingCart } from "lucide-react"
import { mockProducts } from "@/data/mock-products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)

  const product = mockProducts.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity > 1 ? "items" : "item"} of ${product.name} added to your cart.`,
    })
  }

  const incrementQuantity = () => {
    if (quantity < product.quantity) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="container py-8 px-4 md:px-6">
      <Link href="/products" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {product.organic && (
            <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700">
              <Leaf className="mr-1 h-3.5 w-3.5" />
              Organic
            </Badge>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <Link href={`/farmers/${product.farmer.id}`} className="text-sm text-muted-foreground hover:underline">
                {product.farmer.name}
              </Link>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{product.farmer.location}</span>
            </div>
          </div>

          <div className="text-2xl font-bold">
          ₹{product.price.toFixed(2)} <span className="text-base font-normal">/ {product.unit}</span>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-medium mr-4">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={incrementQuantity}
                  disabled={quantity >= product.quantity || !product.inStock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <span className="ml-4 text-sm text-muted-foreground">
                {product.inStock ? `${product.quantity} available` : "Out of stock"}
              </span>
            </div>

            <Button size="lg" className="w-full" onClick={handleAddToCart} disabled={!product.inStock}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>

            <div className="text-sm text-muted-foreground">
              <p>
                Category: <span className="font-medium capitalize">{product.category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
