const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number) {
  return CURRENCY_FORMAT.format(number);
}
