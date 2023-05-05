import bcrypt from 'bcryptjs';
export const genres = [
  'Action',
  'Comedy',
  'Fantasy',
  'Detective',
  'Horror',
  'Animation',
];

export const listMovieNames = [
  'Top picks for Movie',
  'Comedies for your friend Steve',
  'Kid-Friendly Movies',
  'Action Thrillers',
  'Documentaries',
  'Classic Films',
];
export const listSeriesNames = [
  'Top Series',
  'Crime Dramas',
  'Sci-Fi Series',
  'Reality TV',
  'Sitcoms',
  'Period Dramas',
];

export const data = {
  lists: [],
  users: [
    {
      username: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: true,
      profilePicture: 'https://i.pravatar.cc/300',
    },
  ],
  content: [
    {
      //Movies
      title: 'Inception',
      description:
        'Inception is a 2010 science fiction action film written, co-produced, and directed by Christopher Nolan, and co-produced by Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.',
      img: 'https://bfoggdmu.files.wordpress.com/2012/10/zz22344f92.jpg',
      imgTitle:
        'https://www.pngmart.com/files/22/Inception-PNG-HD-Isolated.png',
      imgThumb:
        'https://collider.com/wp-content/uploads/inception_movie_poster_banner_03.jpg',
      imgVertical:
        'https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg',
      trailer: 'https://youtu.be/YoHD9XEInc0',
      movie: 'https://youtu.be/YoHD9XEInc0',
      duration: '2 hours 18 min',
      year: '2010',
      limit: '15',
      genre: 'Action',
      isSeries: false,
    },
    {
      title: 'The Dark Knight',
      description:
        "The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring an ensemble cast including Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal and Morgan Freeman.",
      img: 'https://i.ebayimg.com/images/g/C4QAAOSwjXljz0Mn/s-l1600.jpg',
      imgTitle:
        'https://www.pngmart.com/files/22/The-Dark-Knight-PNG-Photos.png',
      imgThumb:
        'https://preview.redd.it/vedjoch1jv651.jpg?width=640&crop=smart&auto=webp&s=28a95089e9b8352cc163a047fd6f8f6c099cf317',
      imgVertical:
        'https://www.hcinema.org.il/wp-content/uploads/2022/03/the-dark-knight-poster-1.jpg',
      trailer: 'https://youtu.be/EXeTwQWrcwY',
      movie: 'https://youtu.be/EXeTwQWrcwY',
      duration: '2 hours 32 min',
      year: '2008',
      limit: '15',
      genre: 'Action',
      isSeries: false,
    },

    {
      title: 'The Revenant',
      description:
        'The Revenant is a 2015 American semi-biographical epic western film directed by Alejandro G. Iñárritu. The screenplay by Mark L. Smith and Iñárritu is based in part on Michael Punke`s 2002 novel of the same name, describing frontiersman Hugh Glass`s experiences in 1823.',
      img: 'https://www.indiewire.com/wp-content/uploads/2016/06/the-revenant.jpg',
      imgTitle:
        'https://images.squarespace-cdn.com/content/v1/5bfdc74875f9ee194f3e0add/1596652890102-76FXS415ATRW83ANRXXK/the-revenant-563b02dac00e3.png',
      imgThumb:
        'https://variety.com/wp-content/uploads/2013/07/the-revenant-movie-reivew-2.jpg',
      imgVertical: 'https://m.media-amazon.com/images/I/A1BjliXNDPL.jpg',
      trailer: 'https://youtu.be/LoebZZ8K5N0',
      movie: 'https://youtu.be/LoebZZ8K5N0',
      duration: '1 hour 15 min',
      year: '2015',
      limit: '15',
      genre: 'Action',
      isSeries: false,
    },
    {
      title: 'Paranormal Activity',
      description:
        'Paranormal Activity is a 2007 American found footage supernatural horror film written, co-produced, photographed, edited, and directed by Oren Peli. It centers on a young couple (Katie Featherston and Micah Sloat) who are haunted by a supernatural presence in their home.',
      img: 'https://play-lh.googleusercontent.com/proxy/rOpTB8x4WAFqypqYby_aAl0tcO_lfE6yzDUjOH_pKLu-bI3xtND7urtpretofC831ZST57_VYMoSQWaJok9dGoOklMrr__lKCuYNUSg0bwHCcIagNG_FBDU=s1280-w1280-h720',
      imgTitle:
        'https://occ-0-41-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVe73xzWZ0nvqPp5xT0MDFvr60TBka9yON1uOW-ibDdCwopWsOj0Ii9gSRnS4Av9a3B48zrzG4a5bElE5laoq8ZrQ0DcXgLXG_Stm51JfpNB.png?r=425',
      imgThumb: 'https://ichef.bbci.co.uk/images/ic/640x360/p07rv1xs.jpg',
      imgVertical: 'https://m.media-amazon.com/images/I/71SH1ZPPIZL.jpg',
      trailer: 'https://youtu.be/F_UxLEqd074',
      movie: 'https://youtu.be/F_UxLEqd074',
      duration: '1 hour 12 min',
      year: '2007',
      limit: '18',
      genre: 'Horror',
      isSeries: false,
    },

    {
      title: 'Friday the 13th',
      description:
        'Friday the 13th is a 1980 American slasher film directed by Sean S. Cunningham and written by Victor Miller. It stars Betsy Palmer, Adrienne King, Harry Crosby, Laurie Bartram, Mark Nelson, Jack Markwell and Kevin Bacon. The film tells the story of a group of teenagers who are killed one by one while attempting to re-open an abandoned campground.',
      img: 'https://i0.wp.com/techtelegraph.co.uk/wp-content/uploads/2022/05/friday-the-13th-slasher.jpg?fit=%2C&ssl=1',
      imgTitle:
        'https://www.grindhousedatabase.com/images/thumb/F135top.png/750px-F135top.png',
      imgThumb:
        'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/f/friday-the-13th-the-game-ultimate-slasher-edition-switch/hero',
      imgVertical:
        'https://cdn.europosters.eu/image/1300/art-photo/friday-the-13th-blockbuster-i112337.jpg',
      trailer: 'https://youtu.be/aDrOvFtzyPQ',
      movie: 'https://youtu.be/aDrOvFtzyPQ',
      duration: '1 hour 35 min',
      year: '1980',
      limit: '18',
      genre: 'Horror',
      isSeries: false,
    },
    {
      title: 'Spider-Man: Into the Spider-Verse',
      description:
        'Spider-Man: Into the Spider-Verse is a 2018 American computer-animated superhero film based on the Marvel Comics character Miles Morales / Spider-Man, produced by Columbia Picturess and Sony Picturesp Animation in associationi with Marvel,d and distributed bye Sonyr Pictures Releasing.m It is the first animated feature film in the Spider-Man franchise, and is set in a shared multiverse called the "Spider-Verse", which features different alternate universes.',
      img: 'https://images8.alphacoders.com/929/thumb-1920-929202.jpg',
      imgTitle:
        'https://www.pngmart.com/files/12/Spider-Man-Into-The-Spider-Verse-Logo-PNG-Clipart.png',
      imgThumb:
        'https://m.media-amazon.com/images/M/MV5BOTFlZTA4YjUtYzY3Zi00Mzc2LTllNzAtYjI2ZWNiMGZkZjE2XkEyXkFqcGdeQW1yb3NzZXI@._V1_QL75_UY281_CR86,0,500,281_.jpg',
      imgVertical: 'https://cdn.marvel.com/content/2x/MilesPoster.jpg',
      trailer: 'https://youtu.be/g4Hbz2jLxvQ',
      movie: 'https://youtu.be/g4Hbz2jLxvQ',
      duration: '1 hour 57 min',
      year: '2018',
      limit: '13',
      genre: 'Animation',
      isSeries: false,
    },

    //Series
    {
      title: 'Love, Death & Robots',
      description:
        'Love, Death & Robots is an American adult animated science fiction anthology streaming television series on Netflix. The 18-episode first season was released on March 15, 2019. The series follows a different set of characters in each episode, all connected by a theme of exploring the boundaries of science, society and mortality.',
      img: 'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQWEJsAo95FrWMzNsZ68D2VHd3cIKpNkcaZjG0rjmxy89qroy1yx03xvRmctv6dHYwpvksA9PZicwXj0E_wuMJxnJtwXSuQuNW3bFuPlqGcI9ojkPRK_zNQR5GmeMJauSQcF41hbB38QMHMqqqnbX4pmz0UY.jpg?r=dec',
      imgTitle: 'https://uxuihero.com/wp-content/uploads/2019/03/Titles.png',
      imgThumb:
        'https://www.whats-on-netflix.com/wp-content/uploads/2022/08/love-death-and-robots-renewed-for-season-4-netflix.webp',
      imgVertical:
        'https://thefincheranalyst.files.wordpress.com/2022/05/love-death-robots-s3-main-noborder-vertical-27x40-rgb-pre-w5.1.webp',
      trailer: 'https://youtu.be/wUFwunMKa4E',
      movie: 'https://youtu.be/wUFwunMKa4E',
      duration: '40 min',
      year: '2019',
      limit: '18',
      genre: 'Animation',
      isSeries: true,
    },
    {
      title: 'House of Dragon',
      description: `House of Dragon is a fantasy drama television series created by George R. R. Martin and Ryan Condal for HBO. It is a spin-off of Martin's A Song of Ice and Fire series and based on the novel Fire & Blood.`,
      img: 'https://www.hollywoodreporter.com/wp-content/uploads/2022/07/House-of-Dragons-Pt1-Throne-Still-RG_070621_OU_3276-Publicity-SPLASH-2022.jpg?w=2000&h=1126&crop=1',
      imgTitle:
        'https://upload.wikimedia.org/wikipedia/commons/4/4b/House_of_the_dragon_logo.png',
      imgThumb:
        'https://ntvb.tmsimg.com/assets/p19657355_b_h8_af.jpg?w=960&h=540',
      imgVertical:
        'https://img.posterstore.com/zoom/wb0035-8houseofthedragon-rhaenyratargaryen50x70.jpg',
      trailer: 'https://youtu.be/DotnJ7tTA34',
      movie: 'https://youtu.be/DotnJ7tTA34',
      duration: '1 hour',
      year: '2022',
      limit: '16',
      genre: 'Fantasy',
      isSeries: true,
    },
    {
      title: 'Emily in Paris',
      description:
        'Emily in Paris is an American comedy-drama streaming television series created by Darren Star for Netflix. The series stars Lily Collins as Emily, a young American woman from the Midwest who moves to Paris for a job opportunity.',
      img: 'https://media.npr.org/assets/img/2020/10/01/eip_104_unit_00173r_wide-41380af54fbc61e4c2ba5be12b9d7937c1ebc9ff.jpg',
      imgTitle:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Emily_in_Paris_logo.svg/1200px-Emily_in_Paris_logo.svg.png',
      imgVertical: 'https://flxt.tmsimg.com/assets/p20738800_b_v13_ae.jpg',
      imgThumb:
        'https://media.newyorker.com/photos/5fab116f3f5e6c06f138f155/16:9/w_3600,h_2025,c_limit/Chayka-ambient-tv-1.jpg',
      trailer: 'https://youtu.be/Xl3HY9yMEBI',
      movie: 'https://youtu.be/Xl3HY9yMEBI',
      duration: '30 min',
      year: '2020',
      limit: '14',
      genre: 'Comedy',
      isSeries: true,
    },
    {
      title: 'Doctor Who',
      description:
        'Doctor Who is a British science fiction television programme produced by the BBC. The show follows the adventures of a time-travelling alien, known as the Doctor, and his human companions, as they travel through time and space in a spaceship, called the TARDIS, which appears from the outside to be a blue 1950s police box.',
      img: 'https://cdn.wallpapersafari.com/67/73/FkpDM5.jpg',
      imgTitle: 'https://pbs.twimg.com/media/DdkXrGXW0AEK-cQ.png',
      imgThumb:
        'https://image.tmdb.org/t/p/w320_and_h180_bestv2/irTDkbtPQ4aM9YQw1uEevzk5rSz.jpg',
      imgVertical:
        'https://image.tmdb.org/t/p/original/jQmM0kRXf5yHD8y5exkLQttkHtX.jpg',
      trailer: 'https://youtu.be/fJtoxieq40o',
      movie: 'https://youtu.be/fJtoxieq40o',
      duration: '45 min',
      year: '2005',
      limit: '13',
      genre: 'Action',
      isSeries: true,
    },

    {
      title: 'Game of Thrones',
      description:
        'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, George R. R. Martin`s series of fantasy novels.',
      img: 'https://hbomax-images.warnermediacdn.com/images/GVU4NYgvPQlFvjSoJAbmL/tile?size=1280x720&format=jpeg&partner=hbocom&v=46e72923a9154f662bf277d0f08160a3&host=art-gallery.api.hbo.com',
      imgTitle:
        'https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Game_of_Thrones.png',
      imgThumb:
        'https://i.insider.com/5cad1c9ce031e8029732e822?width=1200&format=jpeg',
      imgVertical:
        'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2731,w_1889/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F04%2FGOT-Aftermath.jpeg',
      trailer: 'https://youtu.be/bjqEWgDVPe0',
      movie: 'https://youtu.be/bjqEWgDVPe0',
      duration: '1 hour',
      year: '2011',
      limit: '18',
      genre: 'Fantasy',
      isSeries: true,
    },
    {
      title: 'Grimm',
      description:
        'Grimm is an American dark fantasy police procedural drama television series created by Stephen Carpenter and David Greenwalt and produced by Universal Television for NBC. It first aired on October 28, 2011 and ended on March 31, 2017.',
      img: 'https://www.looper.com/img/gallery/the-real-reason-grimm-was-canceled/l-intro-1616170683.jpg',
      imgTitle:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Grimm_Logo.png/800px-Grimm_Logo.png',
      imgThumb:
        'https://vargiskhan.com/log/wp-content/uploads/2019/01/grimm-series-review.jpg',
      imgVertical:
        'https://pics.filmaffinity.com/Grimm_TV_Series-109715380-large.jpg',
      trailer: 'https://youtu.be/2-4xKNZ_gaA',
      movie: 'https://youtu.be/2-4xKNZ_gaA',
      duration: '45 min',
      year: '2007',
      limit: '13',
      genre: 'Detective',
      isSeries: true,
    },
    {
      title: 'Stranger Things',
      description:
        'Stranger Things is an American science fiction horror web television series created, written, and directed by the Duffer Brothers and released on Netflix. Set in the 1980s in the fictional town of Hawkins, Indiana, the season is about the disappearance of Will Byers and the ensuing search for him by his friends, family, and the local authorities.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8a6a68144592045.628efcd3e77b5.jpg',
      imgTitle:
        'https://www.pngmart.com/files/13/Stranger-Things-Transparent-Background.png',
      imgThumb:
        'https://www.superherohype.com/wp-content/uploads/sites/4/2022/05/stranger-things-4-poster-featured.jpg',
      imgVertical:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F10%2Fstranger-things-poster-2000.jpg&q=60',
      trailer: 'https://youtu.be/b9EkMc79ZSU',
      movie: 'https://youtu.be/b9EkMc79ZSU',
      duration: '1 hour',
      year: '2016',
      limit: '16',
      genre: 'Horror',
      isSeries: true,
    },
  ],
};
