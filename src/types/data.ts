interface TimeFrame {
  current: number,
  previous: number
}

export interface Data {
  title: string,
  timeframes: {
    daily: TimeFrame,
    weekly: TimeFrame,
    monthly: TimeFrame
  }
}

export type Period = "daily" | "weekly" | "monthly";