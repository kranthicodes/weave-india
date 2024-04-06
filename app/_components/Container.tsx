import React from 'react';

export default function Container({
  children,
}: {
  children: React.JSX.Element | React.JSX.Element[];
}) {
  return <div className="max-w-[1320px] w-full mx-auto my-0">{children}</div>;
}
