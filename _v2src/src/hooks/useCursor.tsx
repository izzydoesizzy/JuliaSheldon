import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CursorVariant = "default" | "hover" | "hidden";

type CursorContextValue = {
  variant: CursorVariant;
  setVariant: (v: CursorVariant) => void;
  /** Spread onto any element to make the cursor react on hover. */
  hoverProps: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");

  const enter = useCallback(() => setVariant("hover"), []);
  const leave = useCallback(() => setVariant("default"), []);

  const value = useMemo<CursorContextValue>(
    () => ({
      variant,
      setVariant,
      hoverProps: { onMouseEnter: enter, onMouseLeave: leave },
    }),
    [variant, enter, leave]
  );

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
}

export function useCursor(): CursorContextValue {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    // Safe no-op fallback so components never crash outside the provider.
    return {
      variant: "default",
      setVariant: () => {},
      hoverProps: { onMouseEnter: () => {}, onMouseLeave: () => {} },
    };
  }
  return ctx;
}
