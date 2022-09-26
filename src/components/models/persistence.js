class User {
    constructor(id, name, age, diet, place, description, hobbies, picture, location, friends, chats) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.diet = diet;
        this.place = place;
        this.description = description;
        this.hobbies = hobbies;
        this.picture = picture;
        this.location = location;
        this.friends = [];
        this.chats = [];
    }

    addFriend(newFriend){
        this.friends.push(newFriend);
    }

    addChat(newChat) {
        this.chats.push(newChat);
    }
}

function register() {

}

