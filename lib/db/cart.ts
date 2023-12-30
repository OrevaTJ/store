import { cookies } from "next/headers";
import { prisma } from "./prisma";
import { Prisma } from "@prisma/client";


export type CartWithProduct = Prisma.CartGetPayload<{
  include: { cartItems: { include: { product: true } } }
}>

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type ShoppingCart = CartWithProduct & {
  totalItems: number;
  totalPrice: number;
};


export async function createCart(): Promise<ShoppingCart> {
  const localCart = await prisma.cart.create({
    data: {}
  })

  cookies().set("localCartId", localCart.id);

  return {
    ...localCart,
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
  };
}

export async function getCart(): Promise<ShoppingCart | null> {
  const localCartId = cookies().get("localCartId")?.value

  const cart = localCartId ? 
  await prisma.cart.findUnique({
    where: { id: localCartId },
    include: { cartItems: { include: { product: true } } },
  }) 
  : null

  if (!cart) {
    return null;
  }

  return {
    ...cart,
    totalItems: cart.cartItems.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: cart.cartItems.reduce(
      (acc, item) => acc + item.product.price,
      0
    ),
  };
}
