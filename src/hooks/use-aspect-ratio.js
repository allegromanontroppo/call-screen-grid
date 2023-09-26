import useResizeObserver from "@react-hook/resize-observer";
import { useLayoutEffect, useState } from "react";

export default function useAspectRatio(target) {
  const [size, setSize] = useState();

  useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));

  return size ? size.width / size.height : 1;
}
