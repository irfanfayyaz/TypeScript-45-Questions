// Modify make_shirt() function by Large & Medium shirts with default message I love TypeScript.
// and a shirt of any size with a different message.

let size: string[] = ["Large", "Medium"];
let defaultMessage = "I love TypeScript";
let largeShirt = (`Size of the shirt is: ${size[0]}, ${defaultMessage}`);
let mediumShirt = (`Size of the shirt is: ${size[1]}, ${defaultMessage}`);
let smallShirt = (`Size of the shirt is: small and I love painting`);

function make_shirt(){
    // let simpleFunction = (mediumShirt)
    // let simpleFunction = (smallShirt)
    let simpleFunction = (largeShirt)
    return(simpleFunction)
}
let response = make_shirt()
console.log(response)
