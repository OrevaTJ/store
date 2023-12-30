import { getCart } from "@/lib/db/cart"
import CartEntry from "./CartEntry"
import { setProductQuantity } from "./actions"
import formatPrice from "@/lib/format"

export const metadata = {
    title: "Your Cart - GiTi"
}

export default async function CartPage() {
    const cart = await getCart()

    return (
        <div>
            <h1 className="m-6 text-3xl font-bold">Shopping Cart</h1>
            {
                cart?.cartItems.map(item => (
                    <CartEntry key={item.id} 
                        cartItem={item} 
                        setProductQuantity={setProductQuantity}
                    />
                ))
            }
            {!cart?.cartItems.length && <p>Your Cart is Empty</p>}
            <div className="flex flex-col items-end sm:items-center">
                <p className="mb-3 font-bold">
                    Total: {formatPrice(cart?.totalPrice || 0)}
                </p>
                <button className="btn btn-primary sm:w-[200px]">Checkout</button>
            </div>
        </div>
    )
}