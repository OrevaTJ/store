import Price from "@/components/price";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./cart-button";
import { changeProductQuantity } from "./actions";

interface ProductPageProps {
    params: {
      id: string;
    };
  }

  const getProduct = cache(async (id: string) => {
    const product = await prisma.product.findUnique({ where: { id } });
  
    if (!product) notFound();
    return product;
  });
  
  export async function generateMetadata({
    params: { id },
  }: ProductPageProps): Promise<Metadata> {
    const product = await getProduct(id);
  
    return {
      title: product.name,
      description: product.description,
      openGraph: {
        images: [{ url: product.imageUrl }],
      },
    };
  }

  export default async function ProductPage({
    params: { id },
  }: ProductPageProps) {
    const product = await getProduct(id)
  
    return (
      <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          priority
          className="max-h-96 rounded-lg"
        />
  
        <div>
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <Price price={product.price} className="mt-4" />
          <p className="py-6">{product.description}</p>
          <AddToCartButton
            productId={product.id}
            changeProductQuantity={changeProductQuantity}
          />
        </div>
      </div>
    );
  }
  