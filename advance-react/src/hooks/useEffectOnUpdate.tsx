import { useEffect, useRef } from "react";

const useEffectOnUpdate = (effectFunction: () => void, deps: any) => {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunction();
    }
  }, deps);
};

export default useEffectOnUpdate;
