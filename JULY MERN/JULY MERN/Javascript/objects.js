// Objects Literals

// let name = 'John';
// let age = 27;
// let email = 'john@doe.com';
// let hobbies = ['Reading', 'Music', 'Cooking'];

let userOne = {
    name: 'John', // key value pair.
    age: 27,
    email: 'john@doe.com',
    hobbies: ['Reading', 'Music', 'Cooking'],
    address: 'London', 
    login(){
        console.log(this)
        // console.log('I have logged in!!!')
        // return this;
    },
    logout(){
        console.log(this);
        // console.log('I have logged out!!!')
    },
    logHobbies(){
        // console.log(this.hobbies);
        // for( let i=0; i<this.hobbies.length; i++){
        //     console.log(this.hobbies[i]);
        // }

        // forEach
        this.hobbies.forEach( function(elements, i){
            console.log(elements+ '::' + i);
        } );
        return this;
    }   
}


userOne.login();
// userOne.logHobbies();
userOne.logout();

// let message = 'Hi '+ userOne.name + ' Welcome to our website!!'; 

// let props = 'age';

// // let contactDetail = userOne['email']
// console.log(userOne[props]);
// // console.log(userOne.contactDetail);


// userOne.logHobbies();

// this keyword
// gives us the context of the object

/**
 *    If we add any other element to the array after 
 *    the object will the forEach work for the new item? 
 *       NO 
 */
 

 // Method Chaining
    // this.logHobbies();
    // userOne.login().logHobbies().logout();
    
