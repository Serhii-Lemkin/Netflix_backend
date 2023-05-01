import bcrypt from 'bcryptjs';

export const data = {
  content: [
    {
      title: 'Inception',
      description:
        'Inception is a 2010 science fiction action film written, co-produced, and directed by Christopher Nolan, and co-produced by Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.',
      img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      imgTitle:
        'https://www.pngmart.com/files/22/Inception-PNG-HD-Isolated.png',
      imgThumb:
        'https://collider.com/wp-content/uploads/inception_movie_poster_banner_03.jpg',
      trailer: 'https://youtu.be/8hP9D6kZseM',
      movie: 'https://youtu.be/8hP9D6kZseM',
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
      img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
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
      genre: 'Adventure',
      isSeries: false,
    },
    {
      title: 'Doctor Who Season 1',
      description:
        'Doctor Who is a British science fiction television programme produced by the BBC. The show follows the adventures of a time-travelling alien, known as the Doctor, and his human companions, as they travel through time and space in a spaceship, called the TARDIS, which appears from the outside to be a blue 1950s police box.',
      img: 'https://flxt.tmsimg.com/assets/p7893520_i_h9_aa.jpg',
      imgTitle: 'https://pbs.twimg.com/media/DdkXrGXW0AEK-cQ.png',
      imgThumb:
        'https://image.tmdb.org/t/p/w320_and_h180_bestv2/irTDkbtPQ4aM9YQw1uEevzk5rSz.jpg',
      trailer: 'https://youtu.be/fJtoxieq40o',
      movie: 'https://youtu.be/fJtoxieq40o',
      duration: '45 min',
      year: '2005',
      limit: '13',
      genre: 'Adventure',
      isSeries: true,
    },
    {
      title: 'Paranormal Activity',
      description:
        'Paranormal Activity is a 2007 American found footage supernatural horror film written, co-produced, photographed, edited, and directed by Oren Peli. It centers on a young couple (Katie Featherston and Micah Sloat) who are haunted by a supernatural presence in their home.',
      img: 'https://i.ytimg.com/vi/uLFxKm0xORc/maxresdefault.jpg',
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

    {
      title: 'Game of Thrones season 1',
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
  ],
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
};
