import React, {useState} from 'react';

const usePostInput = (inputValue) => {
  const [input, setInput] = useState(
    inputValue ?? {
      text: "",

    }
  )
  return {};
};

export default usePostInput;