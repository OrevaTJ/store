"use client"

import { ShoppingCart } from "@/lib/db/cart"
import formatPrice from "@/lib/format"
import { ShoppingCart as ShoppingCartIcon } from "lucide-react"
import Link from "next/link"

interface ShoppingCartButtonProps {
    cart: ShoppingCart | null,
}

export default function ShoppingCartButton({cart}: ShoppingCartButtonProps) {
    function closeDropDown() {
        const elem = document.activeElement as HTMLElement
        if(elem) {
            elem.blur()
        }
    }

    return (
        <div className="flex-none">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <ShoppingCartIcon />
                      <span className="badge badge-sm indicator-item">
                        {cart?.totalItems || 0}
                      </span>
                    </div>
                </label>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                      <span className="font-bold text-lg">
                        {cart?.totalItems || 0} Items
                      </span>
                      <span className="text-info">
                        Subtotal: {formatPrice(cart?.totalPrice || 0)}
                      </span>
                      <div className="card-actions">
                        <Link 
                            href="/cart"
                            className="btn btn-primary btn-block"
                            onClick={closeDropDown}
                        >
                            View cart
                        </Link>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}