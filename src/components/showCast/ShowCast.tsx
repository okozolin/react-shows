import React, { ReactElement } from "react";

interface Props {
  id: string | undefined;
}

export default function ShowCast({ id }: Props): ReactElement {
  return <div>this is Cast info {id}</div>;
}