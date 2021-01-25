import IMask from "imask";

const quantityMask = IMask.createMask({
  mask: Number,
  scale: 2,
  signed: false,
  padFractionalZeros: false,
  normalizeZeros: true,
  radix: ".",
  min: 0.01,
  max: 9999,
});

const maskQuantity = (quantity) => {
  return quantity === "" ? "1" : quantityMask.resolve(quantity).toString();
};

export default maskQuantity;
