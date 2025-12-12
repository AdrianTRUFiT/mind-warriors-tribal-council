export enum MilestoneDay {
  DAY_7 = 7,
  DAY_14 = 14,
  DAY_21 = 21,
  DAY_30 = 30
}

export interface TribalCouncilProps {
  day: MilestoneDay;
  onReturn: () => void;
}

export interface ReflectionData {
  text: string;
  timestamp: number;
  milestone: MilestoneDay;
}