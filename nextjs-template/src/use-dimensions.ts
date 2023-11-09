// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
import { RefObject, useEffect, useRef } from "react";


interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = (ref: RefObject<HTMLElement>): Dimensions => {
  const dimensions = useRef<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current?.offsetWidth || 0;
    dimensions.current.height = ref.current?.offsetHeight || 0;
  }, [ref]);

  return dimensions.current;
};
