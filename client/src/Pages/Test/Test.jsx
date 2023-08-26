import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Loading from "../../Components/Loading";

export default function Test() {
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();

  useEffect((_) => {
    const formData = new FormData();
    for (const entry of searchParams.entries())
      formData.append(entry[0], entry[1]);

    // setLoading(false);
  }, []);

  return (
    <div className="relative flex h-full w-full flex-grow flex-col justify-center">
      {loading && <Loading />}
    </div>
  );
}
