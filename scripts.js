console.log("JavaScript is working !");

let colors = ["orange", "blue", "green"];

let post = {
    title: " My post",
    description: "My first post",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

let posts = [{
    title: "First post",
    likeCount: 12,
}, {
    title: "Second post",
    likeCount: 222,
}];

console.log(colors);
console.log(post);

let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a kid")
}    

 for (let i = 0; i < 10; i++) {
     console.log(i);     
 }

console.log(colors);

let myFunction = 

colors.forEach(color => {
    console.log(color);
});


//vytvaram funkciu:
let greeter = name => {
    console.log("Hello, " + name);
    if (name === "Adam") {
        console.log("He is an adult");
    }
}

greeter("Adam");
greeter("Peter");
greeter("Mate");
greeter("Reka");




