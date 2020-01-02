import React, { ReactElement, ChangeEvent } from "react";

interface Props {
  q: string;
  handleSearchChange(q: ChangeEvent<HTMLInputElement>): void;
}
export function Header({ q, handleSearchChange }: Props): ReactElement {
  // export default Heade React.FC<Props> = ({q, handleSearchChange})  =>{

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
