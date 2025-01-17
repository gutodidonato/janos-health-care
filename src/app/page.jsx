"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const navigate = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem("token-user") != null) {
      navigate.replace('/');
    }
 },[navigate]);
  return (
    <>
    </>
  )
}
