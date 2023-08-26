import React, { useRef } from "react";

import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";

export default function Searchbar() {
  const searchRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
  };

  return (
    <div className="border-gray-border/[.08] flex items-center gap-4 rounded-md border-[1px] px-4 py-3">
      <IonIcon
        icon={search}
        className="text-text-light/50 cursor-pointer text-2xl"
        onClick={onSubmit}
      />
      <input
        type="search"
        onSubmit={onSubmit}
        onKeyDown={(e) => (e.key === "Enter" ? onSubmit(e) : null)}
        placeholder="Search for a book..."
        ref={searchRef}
        className="text-text-light placeholder:text-text-light/50 w-full font-sans"
      />
    </div>
  );
}
