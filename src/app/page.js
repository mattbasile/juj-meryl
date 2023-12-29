'use client';
import React, { useEffect, useState } from 'react';
import SignInImage from '../../public/images/sign-in.webp';
import { checkInviteList, getUserTypeCookie } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [errMessage, setErrMessage] = useState('');

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const name = event.target.name.value; // Get the name from the form

    let result = checkInviteList(name);

    if (result.message === 'VIP' || result.message === 'NIP') {
      router.push('/home');
    } else {
      setErrMessage(
        "Sorry! You're name wasn't on the list - please make sure to use your full name."
      );
    }
  };

  useEffect(() => {
    return () => {
      let cookie = getUserTypeCookie();
      if (cookie === 'VIP' || cookie === 'NIP') {
        router.push('/home');
      }
    };
  }, [router]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="bg-gold-500 text-gold-100 flex flex-1 flex-col justify-center px-4 py-12 ">
          <div className="mx-auto w-full max-w-lg">
            <span className="font-extralight text-5xl">M/J</span>
            <div>
              <h2 className="mt-8 text-2xl font-bold leading-9  ">
                Please provide your name to enter our site
              </h2>
            </div>

            <div className="mt-6">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div>
                      <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        required
                        className="bg-transparent block w-full border border-gold-100 p-2 focus:ring-2 focus:ring-inset focus:ring-gold-100 sm:text-sm sm:leading-6"
                      />

                      <p className="mt-2 text-gold-100 font-bold">
                        {errMessage}
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="uppercase flex w-full justify-center bg-gold-100 text-gold-500 px-3 py-2 text-sm font-semibold leading-6 text-gold-100 shadow-sm hover:bg-gold-100 "
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 px-4 py-24 relative">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={SignInImage.src}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
