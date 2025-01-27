import { useSelector } from "react-redux"

export const useUnits = () => {
  const units = useSelector((state) => state.unitsSlice.units);

  return units
}