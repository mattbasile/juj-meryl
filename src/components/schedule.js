import React from 'react';

export default function schedule({ userType }) {
  let VIPSchedule = [
    {
      title: 'Welcome Party',
      location: 'Bostonia Public House',
      address: '131 State St, Boston, MA 02109',
      time: '7:30 - 10pm',
      googleLink: 'https://maps.app.goo.gl/P8t4bFwLmZ4AovqU7',
      blurb:
        'The only thing we like more than eating and drinking is eating and drinking with the people we love. Join us for booze & bites and roasts & toasts (speeches, not food) to kick off the weekend.',
    },
    {
      title: 'Ceremony & Reception',
      location: 'SoWa Power Station',
      address: '550 Harrison Ave, Boston, MA 02118',
      time: '6:00 - 11:00pm',
      googleLink: 'https://maps.app.goo.gl/ZbHFuqZB24vMdyp77',
      blurb:
        'Ceremony begins promptly at 6 pm - please don’t show up on Juj time. We don’t think this needs a description. Our only ask is that you bring it for the hora.',
    },
    {
      title: 'Afterparty',
      location: 'Mezzanine at SoWa',
      address: '550 Harrison Ave, Boston, MA 02118',
      time: '11:00pm - 1:00am',
      googleLink: 'https://maps.app.goo.gl/ZbHFuqZB24vMdyp77',
      blurb:
        'Juj wants an after party that screams BIG GAY DISCO. Meryl wants to replicate a night at Barbarella (her favorite Austin bar).',
    },
  ];
  let RegularSchedule = [
    {
      title: 'Ceremony & Reception',
      location: 'SoWa Power Station',
      address: '550 Harrison Ave, Boston, MA 02118',
      time: '6:00 - 11:00pm',
      googleLink: 'https://maps.app.goo.gl/ZbHFuqZB24vMdyp77',
      blurb:
        'Ceremony begins promptly at 6 pm - please don’t show up on Juj time. We don’t think this needs a description. Our only ask is that you bring it for the hora.',
    },
    {
      title: 'Afterparty',
      location: 'Mezzanine at SoWa',
      address: '550 Harrison Ave, Boston, MA 02118',
      time: '11:00pm - 1:00am',
      googleLink: 'https://maps.app.goo.gl/ZbHFuqZB24vMdyp77',
      blurb:
        'Juj wants an after party that screams BIG GAY DISCO. Meryl wants to replicate a night at Barbarella (her favorite Austin bar).',
    },
  ];
  return (
    <div
      id="schedule"
      className="text-center bg-gold-100 text-gold-500 py-20 md:py-[120px]"
    >
      <h3 className="uppercase text-4xl md:text-6xl font-bold">Schedule</h3>

      <div
        className={`grid grid-cols-1 mt-0 md:mt-11 ${
          userType === 'VIP' ? 'md:grid-cols-3' : 'md:grid-cols-2'
        }`}
      >
        {userType === 'VIP'
          ? VIPSchedule.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className={`${
                    index !== 2 ? 'border-r  border-gold-500' : ''
                  }  py-12 md:py-[74px] flex flex-col justify-between`}
                >
                  <h3 className="uppercase font-bold text-3xl">{item.title}</h3>
                  <div className="text-sm leading-6 mt-6">
                    <p>{item.location}</p>
                    <p>{item.address}</p>
                    <p>{item.time}</p>
                  </div>
                  <p className="px-8 md:px-0 max-w-[400px] mx-auto text-sm leading-6 mt-6">
                    {item.blurb}
                  </p>
                  <a
                    target="_blank"
                    href={item.googleLink}
                    className="hover:bg-gold-500 hover:text-gold-100 transition-colors mt-6 mx-auto inline-block uppercase font-bold text-sm md:text-base py-3 px-6 border border-gold-500 "
                  >
                    Directions
                  </a>
                </div>
              );
            })
          : RegularSchedule.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className={`${
                    index !== 1 ? 'border-r  border-gold-500' : ''
                  } py-12 md:py-[74px] `}
                >
                  <h3 className="uppercase font-bold text-3xl">{item.title}</h3>
                  <div className="text-sm leading-6 mt-6">
                    <p>{item.location}</p>
                    <p>{item.address}</p>
                    <p>{item.time}</p>
                  </div>
                  <p className="px-8 md:px-0 max-w-[400px] mx-auto text-sm leading-6 mt-6">
                    {item.blurb}
                  </p>
                  <a
                    target="_blank"
                    href={item.googleLink}
                    className="hover:bg-gold-500 hover:text-gold-100 transition-colors mt-6 mx-auto inline-block uppercase font-bold text-sm md:text-base py-3 px-6 border border-gold-500 "
                  >
                    Directions
                  </a>
                </div>
              );
            })}
      </div>
    </div>
  );
}
