import { atomWithStorage } from "jotai/utils";

export const slideUrlAtom = atomWithStorage<string | null>("slideUrl", null);
