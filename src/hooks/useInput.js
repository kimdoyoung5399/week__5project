import { useCallback, useState } from "react";

const useInput = (text) => {
  const [state, setState] = useState(text);

  const onChange = (e) => {
    setState(e.target.value);
  };

  // [text] 부분이 의존성배열 dependency,
  const reset = useCallback(() => setState(text), [text]);

  return [state, onChange, reset];
};

export default useInput;
