import React from "react";

export function useStorage(key, intialValue) {
  const [token, setStorToken] = React.useState(() => {
    return localStorage.getItem(key) || intialValue;
  });

  const setLocalStoragelsData = React.useCallback(
    (token) => {
      // console.log('\n\n in the useStorage', token)
      setStorToken(() => {
        if (token) {
          console.log("\n\n in the useStorage", token);
          const data = window.localStorage.setItem(key, token);
          console.log(data)
        } else {
          console.log("no token to store in local storage");
          return;
        }

        return token;
      });
    },
    [key]
  );

  React.useEffect(() => {
    setLocalStoragelsData(token);

    const refreshStorageFunc = (event) => {
      if (event.key === key) {
        setStorToken(event.newtoken);
      }
    };
    window.addEventListener("storage", refreshStorageFunc);

    return () => {
      window.removeEventListener("storage", refreshStorageFunc);
    };
  }, [key, setLocalStoragelsData, token]);

  return { token, setStorToken: setLocalStoragelsData };
}
