/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
  }
  printName() {
    console.log(this.firstName + " " + this.lastName);
  }

  calculateAge(currentYear) {
    let age = currentYear - this.birthYear;
    return age;
  }
}
const person1 = new Person("Dalia", "Alrefai", "Female", 1977);
person1.printName();
const person2 = new Person("Sara", "Mohammed", "Female", 1998);
person2.printName();
const person3 = new Person("Ali", "yousif", "Male", 2000);
person3.printName();

console.log(
  person1.calculateAge(person1.birthYear) +
    person1.calculateAge(person2.birthYear) +
    person1.calculateAge(person3.birthYear)
);

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array,
 *  you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
  }
  rating = [];

  rate(rating) {
    if (rating > 0 && rating < 10) this.rating.push(rating);
  }

  averageRating() {
    let average =
      this.rating.reduce((acc, rate) => acc + rate, 0) / this.rating.length;
    return average;
  }
}
const movie1 = new Movie("die hard", 20, "Action");
const movie2 = new Movie("Harry Potter", 120, "PG");
const movie3 = new Movie("IT", 60, "Horror");
const movie4 = new Movie("A Man called Otto", 45, "Drama");
movie1.rate(9);
movie2.rate(9);
movie3.rate(9);
movie4.rate(9);
console.log(movie1.averageRating());

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

class Actor extends Person {
  movies = [];
  constructor(firstName, lastName, gender, birthYear) {
    super(firstName, lastName, gender, birthYear);
  }

  addMovie(movie) {
    this.movies.push(movie);
  }
}
const actor1 = new Actor("Tom", "Hanks", "male", 1956);
actor1.addMovie(movie1);
console.log(actor1);
