import type { Bio } from "@/repository/bio/types";
import { atomWithStorage } from "jotai/utils";

export const bioAtom = atomWithStorage<Bio | undefined>("bio", undefined);
