'use client';
import React, { useEffect, useState } from 'react';
import { getUserTypeCookie } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function home() {
  const router = useRouter();
  const [userType, setUserType] = useState('');
  useEffect(() => {
    return () => {
      let cookie = getUserTypeCookie();
      if (cookie === 'VIP') {
        setUserType('VIP');
      } else if (cookie === 'NIP') {
        setUserType('NIP');
      } else {
        router.push('/');
      }
    };
  }, []);

  return <div></div>;
}
