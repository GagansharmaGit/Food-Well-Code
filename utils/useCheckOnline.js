import { useEffect, useState } from "react";

const useCheckOnline = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const checkon=()=>{
      setOnlineStatus(true);
    }
    const checkoff=()=>{
      setOnlineStatus(false);
    }
    window.addEventListener("offline",checkon);

    window.addEventListener("online", checkoff);

    return()=>{
      window.removeEventListener("online",checkon);
      window.removeEventListener("offline",checkoff);
    }
  }, []);

  // boolean value
  return onlineStatus;
};

export default useCheckOnline;