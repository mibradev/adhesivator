export const getStoredCalculationData = (setCalculationData) => {
  const storedCalculationData = localStorage.getItem(
    "ADHESIVATOR_CALCULATION_DATA",
  );
  if (storedCalculationData)
    setCalculationData(JSON.parse(storedCalculationData));
};

export const storeCalculationData = (calculationData) => {
  localStorage.setItem(
    "ADHESIVATOR_CALCULATION_DATA",
    JSON.stringify(calculationData),
  );
};

export const calculateDataByLength = (calculationData) => {
  const numberOfReelsInHeight = 4000 / calculationData.lengthOfReel;
  const numberOfReelsInWidth = (128 / calculationData.widthOfReel).toFixed();
  const numberOfReelsInRoll = numberOfReelsInHeight * numberOfReelsInWidth;
  const numberOfProducts = (
    numberOfReelsInRoll / calculationData.numberOfReels
  ).toFixed(2);
  const priceOfRoll =
    calculationData.weightOfRoll * calculationData.priceOfAdhesive;
  const costOfProduct = priceOfRoll / numberOfProducts;
  const costOfCore =
    (calculationData.weightOfCore / 1000) *
    calculationData.numberOfReels *
    calculationData.priceOfCore;
  const cost =
    costOfProduct +
    costOfCore +
    calculationData.costOfCarton +
    calculationData.costOfShrink +
    calculationData.costOfTransportation +
    calculationData.costOfWorkmanship;
  const roundedCost = Math.ceil(cost * 100) / 100;
  const price = roundedCost * (1 + 0.05);
  const roundedPrice = Math.ceil(price / 5) * 5;
  return [roundedCost, roundedPrice];
};

export const calculateDataByWeight = (calculationData) => {
  const weightOfCore =
    (calculationData.weightOfCore / 1000) * calculationData.numberOfReels;
  const weightOfAdhesive =
    calculationData.weightOfColumn * calculationData.numberOfColumns -
    weightOfCore;
  const costOfCore = weightOfCore * calculationData.priceOfCore;
  const costOfAdhesive = weightOfAdhesive * calculationData.priceOfAdhesive;
  const cost =
    costOfAdhesive +
    costOfCore +
    calculationData.costOfCarton +
    calculationData.costOfShrink +
    calculationData.costOfWorkmanship +
    calculationData.costOfTransportation;
  const roundedCost = Math.ceil(cost * 100) / 100;
  const price = roundedCost * (1 + 0.05);
  const roundedPrice = Math.ceil(price / 5) * 5;
  return [roundedCost, roundedPrice];
};
