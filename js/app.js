document.addEventListener("alpine:init", () => {
  Alpine.data("adhesivator", ($persist) => ({
    data: $persist({
      lengthOfReel: 0,
      widthOfReel: 0,
      weightOfColumn: 0,
      numberOfColumns: 0,
      numberOfReels: 0,
      weightOfRoll: 0,
      weightOfCore: 0,
      priceOfAdhesive: 0,
      priceOfCore: 0,
      costOfCarton: 0,
      costOfShrink: 0,
      costOfWorkmanship: 0,
      costOfTransportation: 0,
    }),
    calculations: {
      byLength: true,
      numberOfReelsInHeight: 0,
      numberOfReelsInWidth: 0,
      numberOfReelsInRoll: 0,
      numberOfProducts: 0,
      priceOfRoll: 0,
      costOfProduct: 0,
      costOfCore: 0,
      weightOfCore: 0,
      weightOfAdhesive: 0,
      costOfAdhesive: 0,
      cost: 0,
    },
    get result() {
      const price = this.calculations.byLength
        ? calculateByLength(this.data, this.calculations)
        : calculatByWeight(this.data, this.calculations);
      return Math.round(price / 5) * 5;
    },
  }));
});

function calculateByLength(data, calculations) {
  if (!data.lengthOfReel || !data.widthOfReel || !data.numberOfReels) {
    return 0;
  }
  calculations.numberOfReelsInHeight = 4000 / data.lengthOfReel;
  calculations.numberOfReelsInWidth = (128 / data.widthOfReel).toFixed();
  calculations.numberOfReelsInRoll =
    calculations.numberOfReelsInHeight * calculations.numberOfReelsInWidth;
  calculations.numberOfProducts = (
    calculations.numberOfReelsInRoll / data.numberOfReels
  ).toFixed(2);
  calculations.priceOfRoll = data.weightOfRoll * data.priceOfAdhesive;
  calculations.costOfProduct =
    calculations.priceOfRoll / calculations.numberOfProducts;
  calculations.costOfCore =
    (data.weightOfCore / 1000) * data.numberOfReels * data.priceOfCore;
  calculations.cost =
    calculations.costOfProduct +
    calculations.costOfCore +
    data.costOfCarton +
    data.costOfShrink +
    data.costOfTransportation +
    data.costOfWorkmanship;
  data.weightOfColumn = (
    (data.weightOfRoll / calculations.numberOfProducts +
      (data.weightOfCore / 1000) * data.numberOfReels) /
    data.numberOfColumns
  ).toFixed(3);
  return calculations.cost;
}

function calculatByWeight(data, calculations) {
  calculations.weightOfCore = (data.weightOfCore / 1000) * data.numberOfReels;
  calculations.weightOfAdhesive =
    data.weightOfColumn * data.numberOfColumns - calculations.weightOfCore;
  calculations.costOfCore = calculations.weightOfCore * data.priceOfCore;
  calculations.costOfAdhesive =
    calculations.weightOfAdhesive * data.priceOfAdhesive;
  calculations.numberOfReelsInWidth = (128 / data.widthOfReel).toFixed();
  calculations.cost =
    calculations.costOfAdhesive +
    calculations.costOfCore +
    data.costOfCarton +
    data.costOfShrink +
    data.costOfWorkmanship +
    data.costOfTransportation;
  data.lengthOfReel =
    Math.round(
      ((4000 / (data.weightOfRoll / calculations.weightOfAdhesive)) *
        calculations.numberOfReelsInWidth) /
        data.numberOfReels /
        0.5,
    ) * 0.5;
  return calculations.cost;
}
