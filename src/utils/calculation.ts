export interface GestationalAge {
  weeks: number;
  days: number;
}

export const calculateGestationalAge = (remainingDays: any): GestationalAge => {
  const currentGestationInDays = 280 - remainingDays;

  if (currentGestationInDays >= 0) {
    const weeks = Math.floor(currentGestationInDays / 7);
    const days = currentGestationInDays % 7;
    return { weeks, days };
  } else {
    return { weeks: 0, days: 0 };
  }
};
export const calculateBMI = (weight: number, height: number) => {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
};
