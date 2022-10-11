import { invitations } from "./invitation";
import { v4 as uuid } from "uuid";

class User {
  constructor(id, name, age, diet, place, description, hobbies, img, location, friends, chats, invites) {
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
    this.invites = invites;
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
  uuid(),
  "Maria Arodzero",
  19,
  "Omnivore",
  "TU Dortmund",
  "Hello, I'm a student of TU!",
  "Swimming, Cooking",
  require("../img/maria.svg").default,
  "on",
  null,
  "", 
  [invitations[0], invitations[1]]
);

var user2 = new User(
  uuid(),
  "Gregor Zamza",
  28,
  "Vegetarian",
  "FH Dortmund",
  "Hello, I'm a student of FH!",
  "Football",
  require("../img/gregor.svg").default,
  "off",
  null,
  "Yes, I will be waiting for you!",
  [invitations[2], invitations[3]]
);
var user3 = new User(
  uuid(),
  "Elis Ananas",
  22,
  "Pescetartian",
  "TU Dortmund",
  "Hello, I'm a student of FH!",
  "Dancing",
  require("../img/elis.svg").default,
  "off",
  null,
  "Cool, see you then!",
  [invitations[4]]
);
var user4 = new User(
  uuid(),
  "Veronika Bo",
  30,
  "Vegan",
  "TU Dortmund",
  "Hello, I'm a student of TU!",
  "Swimming, Cooking",
  require("../img/veronika.svg").default,
  "on",
  null,
  "Sorry, something came up. I can't...",
  [invitations[5]]
);
var user5 = new User(
  uuid(),
  "Max Mustermann",
  25,
  "Vegetarian",
  "FH Dortmund",
  "Hello, I'm a student of FH!",
  "Football",
  require("../img/max.svg").default,
  "off",
  null,
  "Hey, can you be there in 10?",
  [invitations[6]]
);
var user6 = new User(
  uuid(),
  "Selina Grande",
  21,
  "Omnivore",
  "TU Dortmund",
  "Hello, I'm a student of FH!",
  "Dancing",
  require("../img/selina.svg").default,
  "off",
  null,
  "I had lots of fun today! Let's meet...",
  null
);

var user7 = new User(
  uuid(),
  "Harold Smith",
  31,
  "Pescetarian",
  "TU Dortmund",
  "Hello, I'm a student of FH!",
  "Dancing",
  require("../img/harold.svg").default,
  "off",
  null,
  "Do you want to meet tomorrow a...",
  null
);

var user8 = new User(
  uuid(),
  "Nicki Manson",
  31,
  "Pescetarian",
  "FH Dortmund",
  "Hello, I'm a student of FH!",
  "Dancing",
  require("../img/nicki.svg").default,
  "off",
  null,
  "Do you want to meet tomorrow a...",
  null
);

var user9 = new User(
  uuid(),
  "Nicki Manson",
  31,
  "Pescetarian",
  "FH Dortmund",
  "Hello, I'm a student of FH!",
  "Dancing",
  require("../img/nicki.svg").default,
  "off",
  null,
  "Do you want to meet tomorrow a...",
  null
);

user1.friends = [user2, user3, user4, user5, user6, user7, user8, user9];
user2.friends = [user1, user3, user4];
user3.friends = [user1, user2, user5, user6];
user4.friends = [user1, user2, user6];
user5.friends = [user1, user3, user4];
user6.friends = [user1, user2, user3, user4, user5];

let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9];


/*to do*/
function register() {
  users.push(new User());
}

export {user1, user2, users, register }