class User {
  constructor(id, name, age, diet, place, description, hobbies, img, location, friends, chats) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.diet = diet;
    this.place = place;
    this.description = description;
    this.hobbies = hobbies;
    this.img = img;
    this.location = location;
    this.friends = friends;
    this.chats = chats;
  }

  addFriend(newFriend) {
    this.friends.push(newFriend);
  }

  addChat(newChat) {
    this.chats.push(newChat);
  }
}

//manually created database
var user1 = new User(
  0,
  "Maria Arodzero",
  19,
  "Omnivore",
  "TU Dortmund",
  "Hello, I'm a student of TU!",
  "Swimming, Cooking",
  "/img/maria.svg",
  "on",
  [user1, user2, user4, user6],
  ""
);
var user2 = new User(
  1,
  "Gregor Zamza",
  28,
  "Vegetarian",
  "FH Dortmund",
  "Hello, I'm a student of FH!",
  "Football",
  "./../../img/gregor.svg",
  "off",
  [user1, user2, user3],
  ""
);
var user3 = new User(
  2,
  "Elis Ananas",
  22,
  "Pescetartian",
  "TU Dortmund",
  "Hello, I'm a student of FH!",
  "Dancing",
  "/img/elis.svg",
  "off",
  [user4, user5, user6],
  ""
);
var user4 = new User(
  3,
  "Veronika Bo",
  30,
  "Vegan",
  "TU Dortmund",
  "Hello, I'm a student of TU!",
  "Swimming, Cooking",
  "/img/maria.svg",
  "on",
  [user2, user4, user6],
  ""
);
var user5 = new User(
  4,
  "Max Mustermann",
  25,
  "Vegetarian",
  "FH Dortmund",
  "Hello, I'm a student of FH!",
  "Football",
  "/img/gregor.svg",
  "off",
  [user1, user2, user3, user4, user5],
  ""
);
var user6 = new User(
  5,
  "Selina Smith",
  21,
  "Omnivore",
  "TU Dortmund",
  "Hello, I'm a student of FH!",
  "Dancing",
  "/img/elis.svg",
  "off",
  [user1, user2, user3, user4, user5, user6],
  ""
);

let users = [user1, user2, user3, user4, user5, user6];


/*to do*/
function register() {
  users.push(new User());
}

module.exports = {
  User: User,
  user1: user1,
  users: users,
  register: register
}