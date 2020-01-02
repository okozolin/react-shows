import React, { ReactElement, ChangeEvent } from "react";

interface Props {
  q: string;
  handleSearchChange(q: ChangeEvent<HTMLInputElement>): void;
}
export default function Heade({ q, handleSearchChange }: Props): ReactElement {
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        value={q}
        onChange={handleSearchChange}
      />
    </div>
  );
}
