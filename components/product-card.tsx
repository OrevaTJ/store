import { Product } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import Price from "./price";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // Check if product is less than 7-days old
    const isNew = Date.now() - new Date(product.createdAt).getTime() <
        1000 * 60 * 60 * 24 * 7

  return (
    <Link 
        href={"/products/" + product.id}
        className="card w-full bg-base-100 hover:shadow-xl transition"
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
      <div className="card-body"> 
        <h2 className="card-title">
            {product.name}
            {isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{product.description}</p>
        <Price price={product.price}/>
        {/* Can't use button in server components, use Link instead
        <div className="card-actions justify-end">
          <button className="btn-primary btn">Buy Now</button>
        </div> */}
      </div>
    </Link>
  );
}
