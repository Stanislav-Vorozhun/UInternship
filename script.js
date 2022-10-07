'use strict'

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

function start(countFilms) {
  countFilms = +prompt('Сколько фильмов вы уже посмотрели? ', '');
  while (countFilms == '' || countFilms == null || isNaN(countFilms)) {
    countFilms = +prompt('Сколько фильмов вы уже посмотрели? ', '');
  }
  return countFilms;
}
start(numberOfFilms);

console.log(numberOfFilms);

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    a != '' && b != null && a != null && b != '' && a.length < 50 ? personalMovieDB.movies[a] = b : i--;
  }
}
rememberMyFilms();

function detectPersonalLevel() {
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
}
detectPersonalLevel();

function showMyDB(statusPrivate) {
  if (!statusPrivate) {
    console.log('все в порядке!')
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();
