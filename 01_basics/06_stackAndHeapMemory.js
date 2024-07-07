// STACK & HEAP memory

// all primitives are stored in stack memory
// all non-primitives are stored in heap memory

// whenever value is stored in stack memory, jo bhi variable declare aur define kiya hai uski copy milti hai i.e. variable's copy is obtained and not the original value
// koi bhi variable ya object heap memory m jaata hai toh uski original value ka reference milta hai

// ex:

// let myYouTubename = "arshiaaggarwal";
// let anothername = myYouTubename;
// anothername = "aggarwalarshia";

// console.log(myYouTubename);
// console.log(anothername);

// since value of anothername was myYouTubename, so anothername was given copy of original value of myYouTubename rather than creating new value for it.
// when we change value of anothername, it changes to the new value

// let userOne = {
//     email: "arshia@google.com",
//     upi: "user@ybl"
// }

// let userTwo = userOne;

// here, we created new object , variable name is stored in stack and value is stored in heap memory.
// when we create another object which is valued equal to the previous object, it will get reference of the value that is stored in heap.

// THEREFORE, IN STACK MEMORY, WE GET THE COPY OF ORIGINAL VALUE.
// IN HEAP MEMORY WE GET REFERENCE OF THE VALUE DESIGNATED. (kyuki stack m jab new variable banaya tha with same value toh hume copy milrhi thi value ki.)

// let's test
// check if we change value of one object

// userTwo.email = "aggarwal@google.com"

// console.log(userOne.email); // aggarwal@google.com
// console.log(userTwo.email); // aggarwal@google.com

// therefore, we observe that the common reference to which both objects point, got changed.
