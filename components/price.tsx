import formatPrice from "@/lib/format";


interface PriceTagProps {
    price: number;
    className?: string;
}

export default function Price({price, className}: PriceTagProps) {
    return (
        <span className={`badge ${className}`}>{formatPrice(price)}</span>
    )
}