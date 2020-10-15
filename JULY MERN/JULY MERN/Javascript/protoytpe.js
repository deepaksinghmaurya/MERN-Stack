// Prototype Model

// Constructor Method
function User(name, email){
    this.name = name;
    this.email = email;
    this.available = false;
    // this.login = function(){
    //     console.log(this.name, 'has logged in!!')
    // }
}

User.prototype.login = function(){
    this.available = true;
    console.log(this.name, 'has logged in!!')
}

User.prototype.logout = function(){
    this.available = false;
    console.log(this.name, 'has logged out!!')
}

// Prototypical Inheritence

function Administrator(...args){ // Spread ...
    console.log(args);
    User.apply(this, args); 
}

Administrator.prototype = Object.create(User.prototype);

Administrator.prototype.delUser = function(usr){
    usrs = usrs.filter( function(u){
        return usr.email !== u.email 
    });
}


let userOne = new User('Jay', 'jay@a.com');
let userTwo = new User('Jay', 'jay@ab.com');
let userThree = new User('Jay', 'jay@abc.com');

let administrator = new Administrator('Admin', 'admin@abc.com');
administrator.login();


let usrs = [userOne, userTwo, userThree];
console.log(usrs);
 administrator.delUser(userThree);
 console.log(usrs);


// Concepts
/**
 * 1. Closure
 * 2. rest parameters
 * 3. call(), bind() & apply()
 * 4. ES6 
 * 5. Scoping
 * 6. DOM manipulation
 * 7. XMLHTTPRequests() - Third API interaction 
 * 
 */