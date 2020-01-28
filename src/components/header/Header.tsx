import React, { ReactElement, ChangeEvent } from "react";
// import "./header.css";

interface Props {
  q: string;
  handleSearchChange(q: ChangeEvent<HTMLInputElement>): void;
}
export function Header({ q, handleSearchChange }: Props): ReactElement {
  // export default Header React.FC<Props> = ({q, handleSearchChange})  =>{

  return (
    <div className="header">
      <div>
        <input
          type="search"
          placeholder="Search"
          value={q}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}
