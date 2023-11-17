export type Orientation = "left" | "right";

export interface WithOrientation {
  orientation: Orientation;
}

export interface DropdownOptions<T = string> {
  label: string;
  value: T;
}
