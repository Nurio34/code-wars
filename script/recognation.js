// Character recognition software is widely used to digitise printed texts. Thus the texts can
//  be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised 
// character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the 
// following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string){
	// your code here

    return string.split("").map(ch=> {

        if(ch == "5") ch = "S"
        else if(ch == "1") ch = "I"
        else if(ch == "0") ch = "O"
        return ch

    }).join("")

    //** BEST ANSWER */

    // correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

    //** */

}


// console.log(correct(`51NGAP0RE`));