export default function formatPrice(price: number) {
    // JS Method: Format a number into a string, using locale settings
    return (price / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  