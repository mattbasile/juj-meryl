import React from 'react';
import LampLighterImage from '../../public/images/lamplighter.webp';
import GiuliaImage from '../../public/images/giulia.webp';
import PammysImage from '../../public/images/pammys.webp';
import Row34Image from '../../public/images/row34.webp';
import BlossomBarImage from '../../public/images/blossombar.webp';
import RebelRebelImage from '../../public/images/rebelrebel.webp';
import ICAImage from '../../public/images/ica.webp';
import FenwayImage from '../../public/images/fenway.webp';
import PorterSquareImage from '../../public/images/porter-square.webp';

export default function Recommendations() {
  const dinnerRecs = [
    {
      name: 'Lamplighter Brewery',
      link: 'https://lamplighterbrewing.com/',
      copy: 'Where we had our first date. Order a flight, or two or three and maybe you’ll kiss a cute girl.',
      image: LampLighterImage.src,
    },
    {
      name: 'Giulia',
      link: 'https://www.giuliarestaurant.com/',
      copy: 'Second date vibes. Sit at the bar.',
      image: GiuliaImage.src,
    },
    {
      name: 'Pammys',
      link: 'https://www.pammyscambridge.com/',
      copy: 'We think it’s the best in Boston (well, Cambridge). Reserve early.',
      image: PammysImage.src,
    },
    {
      name: 'Row 34',
      link: 'https://www.row34.com/boston/',
      copy: 'What’s more New England than a lobster roll?',
      image: Row34Image.src,
    },
    {
      name: 'Blossom Bar',
      link: 'https://www.blossombarbrookline.com/',
      copy: 'Best Sichuan, best cocktails.',
      image: BlossomBarImage.src,
    },
    {
      name: 'Rebel Rebel',
      link: 'https://www.rebelrebelsomerville.com/',
      copy: 'The queer natural wine bar of our dreams. ',
      image: RebelRebelImage.src,
    },
  ];
  const toDoRecs = [
    {
      name: 'Institute of Contmporary Art',
      link: 'https://www.icaboston.org/',
      copy: 'A Juj rec.',
      image: ICAImage.src,
    },
    {
      name: 'Fenway Park',
      link: 'https://www.mlb.com/redsox/ballpark',
      copy: 'A Meryl rec.',
      image: FenwayImage.src,
    },
    {
      name: 'Beacon Hill',
      link: 'https://www.boston.gov/neighborhood/beacon-hill',
      copy: 'The cutest Boston-proper neighborhood.',
      image: PammysImage.src,
    },
    {
      name: 'Isabella Stewart Gardner Museum',
      link: 'https://www.gardnermuseum.org/',
      copy: 'Home of the heist',
      image: Row34Image.src,
    },
    {
      name: 'Porter Square Books',
      link: 'https://www.portersquarebooks.com/',
      copy: 'Best book store with the best little cafe.',
      image: PorterSquareImage.src,
    },
  ];
  return (
    <div className="bg-gold-500 text-gold-100 py-20" id="recommendations">
      <h3 className="uppercase text-3xl md:text-6xl font-bold text-center">
        Recommendations
      </h3>
      <p className="px-8 md:px-[80px] mx-auto uppercase font-medium text-lg md:text-2xl mb-5 mt-10">
        Where to eat and drink
      </p>
      <div className="px-8 md:px-[80px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {dinnerRecs.map((rec) => {
          return <Card key={rec.link} card={rec} />;
        })}
      </div>
      <p className="px-8 md:px-[80px] mx-auto uppercase font-medium text-lg md:text-2xl mb-5 mt-10">
        What to do
      </p>
      <div className="px-8 md:px-[80px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {toDoRecs.map((rec) => {
          return <Card key={rec.link} card={rec} />;
        })}
      </div>
    </div>
  );
}

function Card({ card }) {
  return (
    <a
      target="_blank"
      href={card.link}
      className="block w-full h-[400px] md:h-[616px] relative group p-6 transition-all"
    >
      <div className="flex flex-col justify-between	relative z-20 h-full">
        <p className="md:opacity-0 group-hover:opacity-100 text-xl font-base leading-10">
          {card.copy}
        </p>
        <p className="uppercase text-2xl md:text-4xl font-bold 	">{card.name}</p>
      </div>
      <div className="absolute inset-0 w-full h-full group">
        <div className="absolute inset-0 w-full h-full bg-black/40 z-10 group-hover:bg-black/50"></div>
        <img
          className="absolute inset-0 w-full h-full saturate-100 md:saturate-0 group-hover:saturate-100	transition-[saturate]"
          src={card.image}
          alt=""
        />
      </div>
    </a>
  );
}
