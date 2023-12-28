"use client";

import { useState, useTransition } from "react";
import { ShoppingCart } from 'lucide-react';
import { changeProductQuantity } from "./actions";

interface AddToCartButtonProps {
  productId: string;
  changeProductQuantity: (productId: string) => Promise<void>;
}


export default function AddToCartButton({
  productId,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        className="btn-primary btn"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await changeProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add to cart
        <ShoppingCart />
      </button>
      {isPending && <span className="loading loading-spinner loading-md" />}
      {!isPending && success && (
        <span className="text-success">Added to cart</span>
      )}
    </div>
  );
}
