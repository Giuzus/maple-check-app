import { WritableAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { ReactNode } from "react";

export type HydrateInitialValues = [
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  WritableAtom<unknown, any[], any>,
  unknown
][];
export const HydrateAtoms = ({
  initialValues,
  children,
}: {
  initialValues: HydrateInitialValues;
  children: ReactNode;
}) => {
  useHydrateAtoms(initialValues);
  return children;
};
