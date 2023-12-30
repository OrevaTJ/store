"use client";

import { Product } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import Price from "./price";
import { changeProductQuantity } from "@/app/products/[id]/actions";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    router.push(`/cart`);

    changeProductQuantity(product.id);
  };

  return (
    <div className="group card w-full bg-base-100">
      <Link
        href={"/products/" + product.id}
        className="group card w-full bg-base-100"
      >
        <figure>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={400}
            className="h-48 object-cover"
          />
        </figure>
        <div className="card-body my-0 py-0">
          <h2 className="card-title my-0 py-0">
            {product.name}
            {isNew && <div className="badge badge-secondary">NEW</div>}
          </h2>
          <p>{product.description}</p>
          <Price price={product.price} />
          {/* <div className="card-actions opacity-0 transition group-hover:opacity-100">
          <button 
            className="btn-primary btn btn-block"
            onClick={addToCart}
          >
              Buy Now
          </button>
        </div> */}
        </div>
      </Link>
      <div className="m-2 relative bottom-0 left-0 right-0 opacity-0 transition group-hover:opacity-100">
        <button className="btn btn-primary btn-block" onClick={addToCart}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
