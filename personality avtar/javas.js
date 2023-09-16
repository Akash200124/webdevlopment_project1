

function getUserInput() {
    // Get the input element by its id
    var inputElement = document.getElementById("name");

    // Get the value of the input
    var inputValue = inputElement.value;

    // Display the user's input (you can use this value as needed)
    // alert("You entered: " + inputValue);
    console.log(inputValue);

    var img = document.getElementById("avimg");

    var finalimg = img.src = "https://joesch.moe/api/v1/" + inputValue;

    console.log(finalimg);


    
}   


