'use strict'

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели? ', '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели? ', '');
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = prompt("На сколько оцените его?", "");

      a != '' && b != null && a != null && b != '' && a.length < 50 ? personalMovieDB.movies[a] = b : i--;
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов')
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель')
    }
    else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман')
    }
    else {
      console.log('Произошла ошибка...')
    }
  },
  showMyDB: (statusPrivate) => {
    if (!statusPrivate) {
      console.log('все в порядке!')
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    !personalMovieDB.private ? personalMovieDB.private = true : personalMovieDB.private = false;
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre === '' || genre == null) {
        console.log('Неккоректные данные...');
        i--;
      }
      else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    })
  },
}

