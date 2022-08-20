import { usePromotionsQuery } from "../types";

export default function usePromotions() {
  const { data } = usePromotionsQuery();
  return data;
}