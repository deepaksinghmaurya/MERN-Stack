
// let userOne = {
//     name: 'John', // key value pair.
//     age: 27,
//     email: 'john@doe.com',
//     hobbies: ['Reading', 'Music', 'Cooking'],
//     address: 'London', 
//     login(){
//         console.log(this)
//         // console.log('I have logged in!!!')
//         // return this;
//     },
//     logout(){
//         console.log(this);
//         // console.log('I have logged out!!!')
//     },
//     logHobbies(){
//         // console.log(this.hobbies);
//         // for( let i=0; i<this.hobbies.length; i++){
//         //     console.log(this.hobbies[i]);
//         // }

//         // forEach
//         this.hobbies.forEach( function(elements, i){
//             console.log(elements+ '::' + i);
//         } );
//         return this;
//     }   
// }

// ES6 classes
class Profile {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.count = 0;
    }
    login(){
        console.log(this.name, 'has logged in!!');
        return this;
    }
    logout(){
        console.log(this.name, 'has logged out!!');
        this.count = 0;
        return this;
    }
    counter(){
        this.count++;
        console.log(this.name, 'has a count of ', this.count);
        return this;
    }
}

// Inheritence
class Admin extends Profile{

    deleteUser(user){
        // console.log('I am a super user who can delete people!!')
        users = users.filter( u => user.email !== u.email );
    }
}

// console.log(userOne instanceof User);

let user1 = new Profile('Jon', 'jon@abc.com', 20);
let user2 = new Profile('Jack', 'jack@abc.com');
let user3 = new Profile('Jill', 'jill@abc.com', 25);
let admin = new Admin('Admin', 'admin@admin.com', 30);
// userOne.login().counter().counter().counter().counter().logout();
// userTwo.login().counter().counter().logout();
// userOne.counter();
// admin.login();

// let users = [userOne, userTwo, userThree];
// console.log(users)

// admin.deleteUser(userThree)
// console.log(users);

console.log(user1);
console.log(admin);



