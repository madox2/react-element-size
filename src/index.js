import { useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

export default function useElementSize() {
  const [contentRect, setContentRect] = useState({});
  const [ref, setRef] = useState(null);
  useEffect(
    function observeContentRectEffect() {
      if (!ref) {
        return;
      }
      const observer = new ResizeObserver(entries => {
        setContentRect(entries[0].contentRect);
      });
      observer.observe(ref);
      return function observeContentRectEffectCleanup() {
        observer.disconnect(ref);
      };
    },
    [ref]
  );
  const { width, height } = contentRect
  return { size: { width, height }, setRef, ref };
}
