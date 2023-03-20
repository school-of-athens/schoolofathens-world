import { useEffect, useState } from "react";

const useObjectKeys = (obj) => {
  const [keys, setKeys] = useState(null);

  useEffect(() => {
    setKeys(Object.keys(obj).sort());
  }, []);

  return keys;
};

export default useObjectKeys;
