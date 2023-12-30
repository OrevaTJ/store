"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";


export async function changeProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const productInCart = cart.cartItems.find(
    (item) => item.productId === productId
  );

  if (productInCart) {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        cartItems: {
          update: {
            where: { id: productInCart.id },
            data: { quantity: { increment: 1 } },
          },
        },
      },
    });
  } else {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        cartItems: {
          create: {
            productId,
            quantity: 1,
          },
        },
      },
    });
  }

  revalidatePath("/products/[id]");
}
