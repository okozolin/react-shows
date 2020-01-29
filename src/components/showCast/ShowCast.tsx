import React, { ReactElement } from "react";
import { Props } from "../../interfaces/interfaces";

export default function ShowCast({ id }: Props): ReactElement {
  return <div>this is Cast info {id}</div>;
}
