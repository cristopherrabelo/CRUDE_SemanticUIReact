import React from 'react';

interface ACliente {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: ACliente) {
  return <>{children}</>
}
