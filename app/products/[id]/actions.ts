"use server";
import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

// at the top since file only contains sever actions

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
            productId, // productId: productId from props
            quantity: 1,
          },
        },
      },
    });
  }

  revalidatePath("/products/[id]");
}
