import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (e) => {
      setStatus(false);
    });

    window.addEventListener("online", (e) => {
      setStatus(true);
    });
  }, []);

  return status;
};

export default useOnlineStatus;
