
//async
function greetings1(){
    function hi(){
        console.log('hi there');
    }
    setTimeout(hi, 3000);
}

function greetings2(){
    function hello(){
        console.log('hello there');
    }
    setTimeout(hello, 1000);
}

// greetings1()
// greetings2()



function greet1(){
    setTimeout(() => {
        console.log("Hello after 5 sec")
    }, 5000);
}

function greet2(){
    setTimeout(() => {
        console.log("Hello after 2 sec")
    }, 2000);
}

// greet1()
// greet2()



// callbacks
function add(n1,n2){
    console.log(n1+n2);
}

function func(callback,num1,num2){
        return callback(num1,num2)
    }

// func(add,5,9)

// CallbackHell
function hell(){
    setTimeout(() => {
        console.log("first timeout")
        setTimeout(() => {
            console.log("Second timeout");
            setTimeout(() => {
                console.log("third timeout")
            }, 2000);
        }, 4000);
    }, 5000);
}
// hell();