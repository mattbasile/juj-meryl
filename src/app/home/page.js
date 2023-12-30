'use client';
import React, { useEffect, useState } from 'react';
import { getUserTypeCookie } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import HeaderImage from '../../../public/images/header-img.jpg';
import BenchImage from '../../../public/images/bench.jpg';
import CheersImage from '../../../public/images/cheers.webp';
import CrateAndBarrelLogo from '../../../public/images/cblogo.png';
import Line from '@/components/line';
import Schedule from '@/components/schedule';
import Recommendations from '@/components/recommendations';

export default function Home() {
  const router = useRouter();
  const [userType, setUserType] = useState('');
  const hotels = [
    {
      name: 'The Revolution Hotel',
      link: 'https://therevolutionhotel.com/',
      copy: 'Promo Code: 2904143.',
    },
    {
      name: 'Marriott Copley Place',
      link: 'https://book.passkey.com/event/50737833/owner/249/home',
      copy: 'Follow the link below to book our room block',
    },
    {
      name: 'StayPineapple',
      link: 'https://www.staypineapple.com/south-end-boston?selfbook=true&hotel=2187&startdate=2024-11-01&enddate=2024-11-03&group=HAYESRORDORFWED&utm_source=hayes-rordorf-wedding&utm_medium=referral&utm_campaign=group-sales-spb',
      copy: 'Follow the link below to book our room block',
    },
  ];

  const faqs = [
    {
      question: 'What do I wear?',
      answer:
        'Formal attire please! Suits and ties. Long dresses. You know the drill.',
    },
    {
      question: 'How do I get there?',
      answer:
        'While we will have parking available, we very much encourage Uber/Lyft. It’s a party, after all.',
    },
    {
      question: 'Is anything happening Sunday?',
      answer:
        'We aren’t going to leave you wanting more, so enjoy the day in Boston',
    },
  ];

  useEffect(() => {
    let cookie = getUserTypeCookie();
    if (cookie === 'VIP') {
      setUserType('VIP');
    } else if (cookie === 'NIP') {
      setUserType('NIP');
    } else {
      router.push('/');
    }
    const handleScroll = () => {
      let nav = document.getElementById('nav');
      if (window.scrollY > 50) {
        nav.classList.add('bg-gold-100');
        logo.classList.remove('text-6xl');
        logo.classList.add('text-4xl');
      } else {
        nav.classList.remove('bg-gold-100');
        logo.classList.add('text-6xl');
        logo.classList.remove('text-4xl');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleNav = () => {
      var fixedOffset = 100; // Height of your fixed header
      var elementId = location.hash;
      var element = document.querySelector(elementId);
      window.scrollTo(0, element.offsetTop - fixedOffset);
    };
    window.addEventListener('hashchange', handleNav);

    return () => {
      window.removeEventListener('hashchange', handleNav);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router, setUserType]);

  return (
    <div className="relative">
      <nav
        id="nav"
        className="transition-colors duration-300	z-40 w-full fixed py-8 md:py-11 px-4 md:px-11 flex flex-col md:flex-row justify-between items-center text-gold-500"
      >
        <h2 id="logo" className="font-extralight text-6xl ">
          M/J
        </h2>
        <div className=" transition-[font-size] mt-8 md:mt-0 flex flex-wrap justify-center md:justify-even gap-y-3 md:gap-y-0 gap-x-6 md:gap-x-11">
          <a
            className="uppercase font-bold text-xs relative inline before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gold-500 before:origin-top-left before:scale-x-0 hover:before:scale-x-100 transition-slow"
            href="#schedule"
          >
            Schedule
          </a>
          <a
            className="uppercase font-bold text-xs relative inline before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gold-500 before:origin-top-left before:scale-x-0 hover:before:scale-x-100 transition-slow"
            href="#hotels"
          >
            Hotels
          </a>
          <a
            className="uppercase font-bold text-xs relative inline before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gold-500 before:origin-top-left before:scale-x-0 hover:before:scale-x-100 transition-slow"
            href="#faqs"
          >
            FAQs
          </a>
          <a
            className="uppercase font-bold text-xs relative inline before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gold-500 before:origin-top-left before:scale-x-0 hover:before:scale-x-100 transition-slow"
            href="#registry"
          >
            Registry
          </a>
          <a
            className="uppercase font-bold text-xs relative inline before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gold-500 before:origin-top-left before:scale-x-0 hover:before:scale-x-100 transition-slow"
            href="#recommendations"
          >
            What to do
          </a>
        </div>
      </nav>
      <header className="grid grid-cols-1 md:grid-cols-2 h-[600px]  md:h-screen">
        <div className="hidden md:block relative w-full h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={HeaderImage.src}
            alt=""
          />
        </div>
        <div className="pt-14 md:pt-0 bg-gold-100 flex flex-col text-center md:text-left items-center md:items-start justify-center px-16">
          <h1 className="uppercase text-gold-500 font-bold text-5xl md:text-6xl text-center md:text-left">
            Meryl & Juliana
          </h1>
          <p className="text-gold-500 font-light text-xl md:text-3xl mt-3">
            November 2nd, 2024
          </p>
          <p className="text-gold-500 font-light text-xl md:text-3xl mt-2">
            Boston, Massachusetts
          </p>
        </div>
      </header>
      <div className="w-full h-full bg-gold-500 text-gold-100 text-center flex flex-col items-center">
        <Line color="light" />
        <div className="px-8 md:px-0 max-w-[750px] mx-auto py-20 md:py-[120px] space-y-6">
          <h3 className="uppercase text-4xl md:text-6xl font-bold">
            Meet us in Boston
          </h3>
          <p className="font-extralight text-lg md:text-2xl leading-8 md:leading-10">
            We’re getting married in Boston, the place where it all began. We
            can’t wait to celebrate with all of you.
          </p>
          <a
            href="#hotels"
            className="inline-block uppercase font-bold text-sm md:text-base py-3 px-6 border border-gold-100 "
          >
            Book your room
          </a>
        </div>
        <Line color="light" />
      </div>
      <div className="w-full h-[600px] md:h-[900px] relative">
        <img
          src={BenchImage.src}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
      </div>
      <Schedule userType={userType} />
      <div id="hotels">
        <div className="py-20 md:py-[74px] bg-gold-500 text-gold-100 text-center">
          <h3 className="uppercase text-4xl md:text-6xl font-bold">Hotels</h3>
          <p className="px-8 md:px-0 max-w-[900px] mx-auto mt-4 font-light text-sm md:text-2xl leading-8 md:leading-10">
            There are tons of great options in Boston. Here are a few that we
            suggest. Use the links below to access our codes for the small block
            of rooms we’ve reserved. Please try and book early to secure your
            spot.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1300px] gap-y-11 md:gap-y-0 mx-auto mt-16">
            {hotels.map((hotel) => {
              return (
                <div
                  key={hotel.link}
                  className="flex flex-col justify-between px-8"
                >
                  <p className="uppercase font-bold text-lg mb-4">
                    {hotel.name}
                  </p>
                  <p>{hotel.copy}</p>
                  <a
                    target="_blank"
                    href={hotel.link}
                    className="hover:bg-gold-100 hover:text-gold-500 transition-colors mt-6 mx-auto inline-block uppercase font-bold text-sm md:text-base py-3 px-6 border border-gold-100 "
                  >
                    Book Now
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        id="faqs"
        className="w-full h-full bg-gold-100 text-gold-500 text-center flex flex-col items-center"
      >
        <Line color="dark" />
        <div className="max-w-[1300px] mx-auto py-20 md:py-[120px] space-y-6">
          <h3 className="uppercase text-4xl md:text-6xl font-bold">Faqs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-11 md:gap-y-0 max-w-[1300px] mx-auto mt-11">
            {faqs.map((faq) => {
              return (
                <div
                  key={faq.question}
                  className="flex flex-col justify-between px-8"
                >
                  <p className="uppercase font-bold text-lg mb-4">
                    {faq.question}
                  </p>
                  <p>{faq.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Line color="dark" />
      </div>
      <div className="w-full h-[450px] md:h-[900px] relative">
        <img
          src={CheersImage.src}
          className="absolute inset-0 object-cover object-center w-full h-full"
          alt=""
        />
      </div>
      <div
        id="registry"
        className="text-center bg-gold-100 text-gold-500 py-20 md:py-[120px]"
      >
        <h3 className="uppercase text-4xl md:text-6xl font-bold">Registry</h3>

        <div className="grid grid-cols-1 mt-0 md:mt-11 md:grid-cols-2">
          <div className="border-r  border-gold-500 py-12 md:py-[74px]">
            <img
              className="w-[220px] md:w-[400px] mx-auto my-4"
              src={CrateAndBarrelLogo.src}
            ></img>

            <a
              target="_blank"
              href="https://www.crateandbarrel.com/gift-registry/juliana-rordorf-and-meryl-hayes/r6824372"
              className="hover:bg-gold-500 hover:text-gold-100 transition-colors mt-6 mx-auto inline-block uppercase font-bold text-sm md:text-base py-3 px-6 border border-gold-500 "
            >
              View
            </a>
          </div>
          <div className="border-r  border-gold-500 py-12 md:py-[74px]">
            <svg
              className="w-[200px] md:w-[350px] mx-auto my-4"
              data-name="Zola Logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1831.769 280.914"
            >
              <title id="ZoloLogomarkTitle">Zola logo</title>
              <path
                d="M237.538 235.199a6.11 6.11 0 0 1 1.774 4.37v28.805c-.009 1.616-.688 3.148-1.904 4.309-1.226 1.184-3.139 1.57-4.561 1.816l-217.918-.153a6.19 6.19 0 0 1-6.135-6.236v-32.687c0-1.161.725-2.693 1.895-3.993L173.636 49.809H6.121C2.666 49.781-.018 47.12 0 43.758l.218-29.492a6.121 6.121 0 0 1 1.839-4.342 6.14 6.14 0 0 1 4.351-1.769h.051l217.937.274c3.399.028 6.139 2.814 6.111 6.25v31.089c0 2.294-.483 3.817-1.634 5.099L66.214 233.369h166.987a6.088 6.088 0 0 1 4.337 1.83zm298.36-190.711c25.745 26.125 39.769 60.66 39.499 97.234-.26 36.564-14.794 70.886-40.92 96.63-26.125 25.745-60.823 40.135-97.229 39.509-36.583-.265-70.899-14.8-96.644-40.925s-39.778-60.656-39.508-97.229c.269-36.578 14.804-70.9 40.929-96.644C367.9 17.56 402.031 3.555 438.223 3.555c.344 0 .697 0 1.041.005 36.574.265 70.881 14.804 96.635 40.929zm-4.356 96.909c.372-51.443-41.17-93.598-92.604-93.969-51.331-.279-93.598 41.161-93.979 92.599-.372 51.433 41.17 93.594 92.613 93.974.232 0 .455.005.688.005 51.108-.005 92.892-41.403 93.282-92.609zm626.196 128.621c.622 1.416.028 2.568-.26 3-.279.423-1.096 1.407-2.61 1.407h-39.759c-1.245-.009-2.369-.752-2.852-1.857l-24.983-58.571h-135.53l-26.283 58.575a3.15 3.15 0 0 1-2.888 1.853h-40.251c-1.542-.009-2.35-1.017-2.628-1.453-.279-.432-.854-1.588-.223-2.981L997.884 10.44c.613-1.305 1.56-2.15 2.433-2.15h41.505c1.124 0 2.071 1.904 2.312 2.452l113.603 259.275zm-88.769-97.666-48.35-110.199-49.966 110.199h98.316zm-262.376 60.283h-.009l-113.301.01V10.742a2.427 2.427 0 0 0-2.415-2.494l-19.452.032-19.453-.032a2.428 2.428 0 0 0-2.415 2.494v261.114c-.009.915.427 1.49.697 1.76a2.427 2.427 0 0 0 1.727.729l152.132.115h2.488c.696.009 1.305-.241 1.769-.697s.72-1.068.725-1.718V235.048a2.428 2.428 0 0 0-2.494-2.415zm1015.357-81.871c-25.969 55.298-100.677 98.447-142.904 119.242-9.154 4.529-16.759 7.941-19.438 9.046-.032.016-3.32 1.61-7.473 1.85l-.772.012-.192-.012c-4.153-.24-7.44-1.834-7.508-1.866-2.647-1.089-10.251-4.505-19.398-9.03-28.084-13.83-70.533-37.549-103.458-68.152-32.925 30.603-75.371 54.322-103.455 68.152-9.154 4.529-16.759 7.941-19.438 9.046-.032.016-3.32 1.61-7.473 1.85l-.773.012-.192-.012c-4.153-.24-7.44-1.834-7.509-1.866-2.647-1.089-10.251-4.505-19.397-9.03-42.228-20.795-116.939-63.94-142.905-119.242-11.773-25.05-13.002-53.316-3.464-79.589 9.859-27.071 29.87-48.729 56.339-60.987 36.285-16.805 78.512-12.596 110.188 10.978a109.789 109.789 0 0 1 6.892 5.61l.34.3.34-.3a108.365 108.365 0 0 1 6.884-5.61c31.68-23.574 73.899-27.781 110.196-10.978a111.437 111.437 0 0 1 13.427 7.379 111.59 111.59 0 0 1 13.428-7.379c36.285-16.805 78.512-12.596 110.188 10.978a109.501 109.501 0 0 1 6.892 5.61l.34.3.341-.3a108.631 108.631 0 0 1 6.883-5.61c31.68-23.574 73.899-27.781 110.196-10.978 26.466 12.256 46.473 33.914 56.335 60.985 9.539 26.27 8.313 54.535-3.46 79.591zm-301.143-8.4a88.536 88.536 0 0 0 4.345-8.077c7.348-15.678 8.093-33.382 2.094-49.856a68.424 68.424 0 0 0-6.44-13.11 68.428 68.428 0 0 0-6.441 13.11c-5.999 16.477-5.254 34.18 2.098 49.856a88.524 88.524 0 0 0 4.344 8.077zm-25.96 30.797c-5.296-7.211-9.867-14.686-13.488-22.397-11.773-25.05-13.002-53.316-3.464-79.589a107.343 107.343 0 0 1 13.481-25.643c-.096-.045-.188-.095-.283-.14-9.463-4.381-19.486-6.604-29.793-6.604-14.941 0-29.093 4.665-40.93 13.489-6.419 4.777-13.595 11.327-22.597 26.778-2.451 4.525-6.203 11.407-6.532 11.881-.272.405-.781 1.157-1.281 1.157-.497 0-1.001-.743-1.333-1.227-.276-.405-4.024-7.284-6.487-11.825-9.002-15.448-16.178-21.993-22.593-26.764-11.837-8.824-25.989-13.489-40.926-13.489-10.308 0-20.331 2.221-29.797 6.604-17.015 7.875-29.857 21.74-36.153 39.04-5.999 16.477-5.254 34.18 2.099 49.856 21.716 46.238 94.614 85.987 124.944 100.931a447.386 447.386 0 0 0 10.031 4.806l.216.1.216-.1a460.035 460.035 0 0 0 10.027-4.806c21.354-10.521 63.805-33.338 94.644-62.057zm294.094-88.73c-6.295-17.299-19.138-31.165-36.153-39.04-9.462-4.381-19.486-6.604-29.793-6.604-14.941 0-29.093 4.665-40.93 13.489-6.419 4.777-13.595 11.327-22.597 26.778-2.451 4.525-6.203 11.407-6.531 11.881-.272.405-.781 1.157-1.282 1.157-.497 0-1.001-.743-1.333-1.227-.276-.405-4.024-7.284-6.487-11.825-9.002-15.448-16.178-21.993-22.593-26.764-11.837-8.824-25.989-13.489-40.926-13.489-10.308 0-20.331 2.221-29.798 6.604-.096.044-.188.095-.284.14a107.387 107.387 0 0 1 13.482 25.641c9.539 26.27 8.313 54.535-3.46 79.591-3.622 7.712-8.193 15.186-13.49 22.398 30.837 28.719 73.289 51.536 94.642 62.057a445.257 445.257 0 0 0 10.032 4.806l.216.1.216-.1a460.035 460.035 0 0 0 10.027-4.806c30.33-14.945 103.228-54.693 124.948-100.931 7.349-15.678 8.093-33.382 2.095-49.856z"
                fill="#8C6418"
                data-name="Layer 1"
              ></path>
            </svg>
            <a
              target="_blank"
              href="https://www.zola.com/registry/merylandjuliana"
              className="hover:bg-gold-500 hover:text-gold-100 transition-colors mt-6 mx-auto inline-block uppercase font-bold text-sm md:text-base py-3 px-6 border border-gold-500 "
            >
              View
            </a>
          </div>
        </div>
      </div>

      <Recommendations />
      <div className="w-full h-full bg-gold-100 text-gold-500 text-center flex flex-col items-center">
        <div className="max-w-[1300px] mx-auto py-20 md:py-[120px] space-y-6">
          <h3 className="uppercase text-4xl md:text-6xl font-bold">
            Any last questions?
          </h3>
          <p className="max-w-[900px] px-8 md:px-0 mx-auto mt-4 font-extralight text-lg md:text-2xl leading-8 md:leading-10">
            We can’t guarantee we have an answer, but shoot us a note at
            <a
              href="mailto:merylandjuliana@gmail.com"
              className="underline ml-1 inline-block"
            >
              merylandjuliana@gmail.com
            </a>{' '}
            and we’ll try our best.
          </p>
        </div>
      </div>
      <footer className="border-t border-gold-500 bg-gold-100 text-gold-500 flex items-center justify-center py-10">
        <div className=" transition-[font-size] mt-8 md:mt-0 flex flex-wrap justify-center md:justify-even gap-y-3 md:gap-y-0 gap-x-6 md:gap-x-11">
          <a
            className="uppercase font-bold text-xs relative inline before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gold-500 before:origin-top-left before:scale-x-0 hover:before:scale-x-100 transition-slow"
            href="#schedule"
          >
            Schedule
          </a>
          <a
            className="uppercase font-bold text-xs relative inline before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gold-500 before:origin-top-left before:scale-x-0 hover:before:scale-x-100 transition-slow"
            href="#hotels"
          >
            Hotels
          </a>
          <a
            className="uppercase font-bold text-xs relative inline before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gold-500 before:origin-top-left before:scale-x-0 hover:before:scale-x-100 transition-slow"
            href="#faqs"
          >
            FAQs
          </a>
          <a
            className="uppercase font-bold text-xs relative inline before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gold-500 before:origin-top-left before:scale-x-0 hover:before:scale-x-100 transition-slow"
            href="#registry"
          >
            Registry
          </a>
          <a
            className="uppercase font-bold text-xs relative inline before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-gold-500 before:origin-top-left before:scale-x-0 hover:before:scale-x-100 transition-slow"
            href="#recommendations"
          >
            What to do
          </a>
        </div>
      </footer>
    </div>
  );
}
