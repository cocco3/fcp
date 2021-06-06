const data = [
  {
    name: "ALPHA 2016",
    eventDate: "2016-02-27",
    posterImage: "event-2016-alpha-portrait.jpg",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=243288452678246"
  },
  {
    name: "BETA 2016",
    eventDate: "2016-06-18",
    posterImage: "event-2016-beta-portrait.jpg",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=305983636408727"
  },
  {
    name: "OMEGA 2016",
    eventDate: "2016-11-19",
    posterImage: "event-2016-omega-portrait.jpg",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=388810861459337"
  },
  {
    name: "ALPHA 2017",
    eventDate: "2017-02-25",
    posterImage: "event-2017-alpha-portrait.jpg",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=439337916406631"
  },
  {
    name: "BETA 2017",
    eventDate: "2017-07-28",
    posterImage: "event-2017-beta-portrait.jpg",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=516905145316574"
  },
  {
    name: "OMEGA 2017",
    eventDate: "2017-11-18",
    posterImage: "event-2017-omega-portrait.jpg",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=567429313597490"
  },
  {
    name: "ALPHA 2018",
    eventDate: "2018-03-03",
    posterImage: "event-2018-alpha-portrait.jpg",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=619269648413456"
  },
  {
    name: "BETA 2018",
    eventDate: "2018-07-27",
    posterImage: "event-2018-beta-portrait.jpg",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=730075597332860"
  },
  {
    name: "OMEGA 2018",
    eventDate: "2018-11-17",
    posterImage: "event-2018-omega-portrait.jpg",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=804802493193503"
  },
  {
    name: "ALPHA 2019",
    eventDate: "2019-03-02",
    posterImage: "event-2019-alpha-portrait.jpg",
    groupImage: "group-2019-alpha.webp",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=873080926365659"
  },
  {
    name: "BETA 2019",
    launchDate: "2019-05-13",
    eventDate: "2019-07-26",
    posterImage: "event-2019-beta-portrait.jpg",
    groupImage: "group-2019-beta.jpg",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=970327499974334",
    description: `
  <p>
    Fog City Pack Presents: BETA 2019 feat. Jasmine Infiniti and Vicki Powell b2b Brian Rojas!</p><p>Like a prayer, Fog City Pack is BACK this Dore Weekend to baptize the masses in sound and sin at BETA 2019! Join us Friday, July 26 at Club Six for an evening of truly GODLIKE proportions featuring the divine talents of New World Dysorder's JASMINE INFINITI and Deep South's VICKI POWELL & BRIAN ROJAS!!
  </p>
  <p>
    TWO PACKED FLOORS of devilish basslines, heavenly vocals, and a congregation of devout deviants makes this year's BETA an event you'll have to see to believe.
  </p>
  <p>
    ALL HAIL THIS EPIC LINEUP!!<br />
    - Vicki Powell b2b Brian Rojas (Deep South, ATL)<br />
    - Jasmine Infiniti (New World Dysorder, NYC)<br />
    - Fawks, Jumpr (Joe Weidman), Astro (Fog City Pack Residents)
  </p>
  <p>
    Lighting Design by Justin Bernard<br />
    Photography by Bradley Roberge Photography<br />
    Sponsored by Mr-S-Leather
  </p>`
  },
  {
    name: "OMEGA 2019",
    launchDate: "2019-10-04",
    eventDate: "2019-11-23",
    posterImage: "event-2019-omega-portrait.png",
    groupImage: "group-2019-omega.jpg",
    photosUrl: "https://www.facebook.com/pg/fogcitypack/photos/?tab=album&album_id=1064383010568782",
    description: `
  <p>
    Fog City Pack gears up to drop one mind-bending finale to 2019 at OMEGA! Join us Saturday, November 23rd at Club Six Underground for the SF DEBUT of Vault Wax & Afro Acid's own BEYUN—your guide for an evening of altered states, blissful beats, and acid-dipped basslines. With smoking hot decks, steamy guys, and sweat dripping off the walls, get ready for one epic trip that will send you home wearing nothing but a smile.
  </p>
  <p>
    SOUND PSYCHONAUTS<br />
    - Beyun (Vault Wax, Afro Acid)<br />
    - Fawks, Jumpr, Astro (Fog City Pack Residents)<br />
  </p>
  <p>
    Sponsored by Mr-S-Leather<br />
    Photo Booth by Bradley Roberge Photography<br />
    Lighting by Stratus Lighting
  </p>`
  },
  {
    recent: true,
    name: "ALPHA 2020",
    launchDate: "2020-01-14",
    eventDate: "2020-02-29",
    posterImage: "event-2020-alpha-portrait.png",
    groupImage: "group-2020-alpha.jpeg",
    photosUrl: "https://www.facebook.com/media/set/?vanity=fogcitypack&set=a.1161377290869353",
    description: `
  <p>
    Fog City Pack celebrates FIVE YEARS of dance and deviance with a BLOWOUT bash at ALPHA 2020 on Saturday, February 29th from 10PM – 4AM. Featuring beats that will knock your jocks off by Wrecked talent, Ryan Smith—and the glory of a whole evening drenched in sound and sweat—this year's ALPHA is going to be a five-alarm fire you won't want to put out.
  </p>
  <p>
    EARGASMS BY<br />
    - Ryan Smith DJ (Wrecked)<br />
    - Fawks, Jumpr, Astro (Fog City Pack Residents)<br />
  </p>
  <p>
    Sponsored by: Mr-S-Leather<br />
    Photo Booth by: Bradley Roberge Photography<br />
    Lighting by: Stratus Lighting
  </p>`
  },
  {
    featured: true,
    name: "BETA 2021",
    launchDate: "2021-06-06",
    eventDate: "2021-07-23",
    posterImage: "event-2021-beta-portrait.png",
    ticketsUrl: 'https://www.eventbrite.com/e/fog-city-pack-presents-beta-2021-dore-alley-friday-tickets-158291783987',
    description: `
  <p>
    THE PACK IS BACK. IN THE FLESH! It's been a LONG time & COMING. And we’re making it worth the wait.
  </p>
  <p>
    Fog City Pack returns Dore Friday, July 23, 10pm-4am, back at the place where it all began: Club Six. BETA 2021 marks the SIX YEAR anniversary of Fog City Pack, and you know what to expect: our signature dark & sexy sounds, our loyal queer fetish crowd, & plenty of corners to explore on TWO floors.
  </p>
  <p>
    Rest assured we'll be following all local COVID-19 guidelines, and we will be requiring proof of full vaccination within two weeks prior in order to attend the event.
  </p>
  <p>
    Our first run of tickets is based on a LIMITED CAPACITY forecast. This event WILL sell out!
  </p>
  <p>
    Dust off that harness and get ready to kick off Dore Weekend the way it was meant to be — with Fog City Pack at BETA 2021!
  </p>`
  }
]

export default data
