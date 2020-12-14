export const calculateAmountTea = (amount,quota) => {
  return (amount / quota) + ((26,56 / 100)*amount)
}