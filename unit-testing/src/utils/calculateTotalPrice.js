/**
 * Calculates the total price with tax and applies discounts
 * @param {number} basePrice - The base price before tax and discounts
 * @param {number} taxRate - Tax rate as a decimal (e.g., 0.08 for 8%)
 * @param {number} discount - Discount amount (default: 0)
 * @param {boolean} isMember - Whether the customer is a member for additional discount
 * @returns {number} Final price after tax and discounts
 * @throws {Error} If basePrice is negative or taxRate is invalid
 */
export default function calculateTotalPrice(
  basePrice,
  taxRate,
  discount = 0,
  isMember = false
) {
  // Input validation
  if (typeof basePrice !== "number" || basePrice < 0) {
    throw new Error("basePrice must be a non-negative number");
  }

  if (typeof taxRate !== "number" || taxRate < 0) {
    throw new Error("taxRate must be a non-negative number");
  }

  if (typeof discount !== "number" || discount < 0) {
    throw new Error("discount must be a non-negative number");
  }

  if (typeof isMember !== "boolean") {
    throw new Error("isMember must be a boolean");
  }

  // Calculate base price after discount
  let priceAfterDiscount = basePrice - discount;

  // Ensure price doesn't go below 0
  if (priceAfterDiscount < 0) {
    priceAfterDiscount = 0;
  }

  // Apply member discount (10% off for members)
  if (isMember) {
    priceAfterDiscount *= 0.9;
  }

  // Calculate tax and final price
  const taxAmount = priceAfterDiscount * taxRate;
  const finalPrice = priceAfterDiscount + taxAmount;

  // Round to 2 decimal places to avoid floating point precision issues
  return Math.round(finalPrice * 100) / 100;
}
