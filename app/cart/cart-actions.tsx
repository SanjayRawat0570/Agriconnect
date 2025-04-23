"use client"

import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CartActions() {
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleCheckout = () => {
    setIsLoading(true)
    // Simulate checkout process
    setTimeout(() => {
      setIsLoading(false)
      setIsComplete(true)
      // Reset after showing success
      setTimeout(() => {
        setIsComplete(false)
      }, 2000)
    }, 1500)
  }

  return (
    <Button className="w-full" size="lg" onClick={handleCheckout} disabled={isLoading || isComplete}>
      {isLoading && (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      )}
      {isComplete && (
        <>
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Order Placed!
        </>
      )}
      {!isLoading && !isComplete && "Proceed to Checkout"}
    </Button>
  )
}
