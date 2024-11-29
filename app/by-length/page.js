"use client";
import { useEffect, useState } from "react";
import { initialCalculationData } from "@/app/data";
import {
  calculateDataByLength,
  getStoredCalculationData,
  storeCalculationData,
} from "@/app/helpers";
import {
  InputNumber,
  InputResult,
  InputResultSecondary,
  Label,
} from "@/app/components";

export default function ByLength() {
  const [calculationData, setCalculationData] = useState(
    initialCalculationData,
  );

  useEffect(() => {
    getStoredCalculationData(setCalculationData);
  }, []);

  useEffect(() => {
    storeCalculationData(calculationData);
  }, [calculationData]);

  const [cost, price] = calculateDataByLength(calculationData);

  return (
    <form className="space-y-2">
      <div className="space-y-2">
        <Label>طول البكرة</Label>
        <InputNumber
          defaultValue={calculationData.lengthOfReel}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              lengthOfReel: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>عرض البكرة</Label>
        <InputNumber
          defaultValue={calculationData.widthOfReel}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              widthOfReel: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>عدد البكرات</Label>
        <InputNumber
          defaultValue={calculationData.numberOfReels}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              numberOfReels: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>عدد الأعمدة</Label>
        <InputNumber
          defaultValue={calculationData.numberOfColumns}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              numberOfColumns: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>وزن الرول</Label>
        <InputNumber
          defaultValue={calculationData.weightOfRoll}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              weightOfRoll: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>وزن الكور</Label>
        <InputNumber
          defaultValue={calculationData.weightOfCore}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              weightOfCore: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>سعر السلوتيب</Label>
        <InputNumber
          defaultValue={calculationData.priceOfAdhesive}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              priceOfAdhesive: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>سعر الكور</Label>
        <InputNumber
          defaultValue={calculationData.priceOfCore}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              priceOfCore: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>تكلفة الكرتونة</Label>
        <InputNumber
          defaultValue={calculationData.costOfCarton}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              costOfCarton: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>تكلفة الشرينك</Label>
        <InputNumber
          defaultValue={calculationData.costOfShrink}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              costOfShrink: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>تكلفة المصنعية</Label>
        <InputNumber
          defaultValue={calculationData.costOfWorkmanship}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              costOfWorkmanship: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>تكلفة النقل</Label>
        <InputNumber
          defaultValue={calculationData.costOfTransportation}
          onChange={(e) =>
            setCalculationData({
              ...calculationData,
              costOfTransportation: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="space-y-2">
        <Label>سعر التكلفة</Label>
        <InputResultSecondary defaultValue={cost} />
      </div>
      <div className="space-y-2">
        <Label>سعر البيع</Label>
        <InputResult defaultValue={price} />
      </div>
    </form>
  );
}
