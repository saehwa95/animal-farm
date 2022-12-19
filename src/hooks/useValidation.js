import { useCallback, useState } from "react";

const useValidation = (type) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateCheck = useCallback(
    (e) => {
      const value = e.target.value;
      setInputValue(value);

      const emailRegExp =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      const nickRegExp = /^[A-Za-z0-9]{1,}$/;

      const pwRegExp = /^[A-Za-z0-9]{4,}$/;

      switch (type) {
        case "email":
          if (emailRegExp.test(value) && value !== "") {
            setIsValid(true);
          } else {
            setIsValid(false);
          }
          return;
        case "nickname":
          if (nickRegExp.test(value) && value !== "") {
            setIsValid(true);
          } else {
            setIsValid(false);
          }
          return;
        case "password":
          if (pwRegExp.test(value) && value !== "") {
            setIsValid(true);
          } else {
            setIsValid(false);
          }
          return;
        default:
          return;
      }
    },
    [inputValue]
  );
  return [inputValue, isValid, validateCheck];
};

export default useValidation;
