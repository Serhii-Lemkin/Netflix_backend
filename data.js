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
      trailer: 'https://youtu.be/F_UxLEqd074',
      movie: 'https://youtu.be/F_UxLEqd074',
      duration: '1 hour 12 min',
      year: '2007',
      limit: '18',
      genre: 'Horror',
      isSeries: false,
    },
    //Series
    {
      title: 'Doctor Who',
      description:
        'Doctor Who is a British science fiction television programme produced by the BBC. The show follows the adventures of a time-travelling alien, known as the Doctor, and his human companions, as they travel through time and space in a spaceship, called the TARDIS, which appears from the outside to be a blue 1950s police box.',
      img: 'https://cdn.wallpapersafari.com/67/73/FkpDM5.jpg',
      imgTitle: 'https://pbs.twimg.com/media/DdkXrGXW0AEK-cQ.png',
      imgThumb:
        'https://image.tmdb.org/t/p/w320_and_h180_bestv2/irTDkbtPQ4aM9YQw1uEevzk5rSz.jpg',
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
