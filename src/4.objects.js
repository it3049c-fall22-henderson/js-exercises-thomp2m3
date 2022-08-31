/**
 * The following object must contain:
 *  `first_name`property that is of type string
 *  `last_name` property that is of type string
 *  `class_of` property that is of type number
 *   a `full_name` function that would return the concatenation of `first_name` and `last_name` properties.
 *   an `introduction` function that returns a string of a welcome message. The introduction function:
 *      * must call the `full_name()` function to present the person's name.
 *      * must use the `class_of` property in the introduction
 */
const personObject = {
  first_name: 'Matthew',
  last_name: 'Thompson',
  class_of: 2024,

  full_name() {
    return this.first_name.concat(' ', this.last_name)
  },

  introduction() {
    let strWelcome = 'Hello!  My name is ' + this.full_name() + '.  I am excited to get into this coursework and this is my first semester at UC.  My anticipated graduation year is ' + this.class_of + '.'
    return strWelcome
  }
};

module.exports = {
  personObject
};