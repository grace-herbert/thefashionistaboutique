var count = 0;

//******************************************
//clothing objects with properties to input into modal onclick. These turned out to be unused and may be deleted by the clean report. But I want to make sure I won't need them first.
//*******************************************



const dress1 = {name: "Georgia Dress", Description: "Elegant green maxi-dress with uniquely designed tree print by Heather McGee", image: "../images/rsz_52.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0};

const dress2 = {name: "Atlanta Dress", Description: "Stunning handwoven white lace kneelength dress by Heather McGee", image: "../images/rsz_15.png", price: 160, clicked: false, selectedQuantity: 0, Total: 0}; 

const dress3 = {name: "Savannah Dress", Description: "Sunset orange maxi dress handmade with 100% organic cotton by Jessie McArthur", image: "../images/rsz_orangedress.png", price: 90, clicked: false, selectedQuantity: 0, Total: 0}; 

const pop1 = {name: "The Parisien", Description: "Bright orange tuille tutu skirt by Kylie West", image: "../images/rz3.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0};

const pop2 = {name: "Atlanta Dress", Description: "Stunning handwoven white lace kneelength dress by Heather McGee", image: "../images/rsz_15.png", price: 160, clicked: false, selectedQuantity: 0, Total: 0};

const pop3 = {name: "Savannah Dress", Description: "Sunset orange maxi dress handmade with 100% organic cotton by Jessie McArthur", image: "../images/rsz_orangedress.png", price: 90, clicked: false, selectedQuantity: 0, Total: 0}; 

const top1 = {name: "The Artemis", Description: "White crop-top with a high neckline by Jessie McArthur", image: "../images/whitetop1.png", price: 60, clicked: false, selectedQuantity: 0, Total: 0}; 

const top2 = {name: "The Athena", Description: "Creamy beige wrap top handsewn with 100% organic cotton by Jessie McArthur", image: "../images/whitetrousersbeigetop1.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0};

const top3 = {name: "The Hera", Description: "Black boob-tube with 100% organic cotton by Jessie McArthur", image: "../images/yellowskirtblacktop1.png", price: 50, clicked: false, selectedQuantity: 0, Total: 0};

const skirt1 = {name: "The Parisien", Description: "Bright orange tuille tutu skirt by Kylie West", image: "../images/rz3.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0};

const skirt2 = {name: "The Marseillais", Description: "Boho skirt. Red and green handdrawn print skirt  by Heather McGee", image: "../images/rz53.png", price: 50, clicked: false, selectedQuantity: 0, Total: 0}; 

const skirt3 = {name: "The Lyonnais", Description: "A-line blue prairie skirt handmade with 100% organic cotton by Jessie McArthur", image: "../images/rzblueskirtwhitetop.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0}; 

const trouser1 = {name: "London Mod", Description: "Handstitched sequin flares by Kylie West", image: "../images/rsz_sequinflares.png", price: 110, clicked: false, selectedQuantity: 0, Total: 0};

const trouser2 = {name: "Tokyo Chic", Description: "Flared black trousers by Heather McGee", image: "../images/rzflaredtrousersblackblazer.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0};

const trouser3 = {name: "New York Vogue", Description: "Funky blue flared trousers with handwoven lace at the ends by Jessie McArthur", image: "../images/rzfunkyjeans.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0}; 

const coat1 = {name: "Takeko Jacket", Description: "Leather jacket by Jessie McArthur", image: "../images/rsz_127.png", price: 200, clicked: false, selectedQuantity: 0, Total: 0}; 

const coat2 = {name: "Zenobia Coat", Description: "Woolan orange coatsheered from sheep of Benbulbin by Jessie McArthur", image: "../images/rz4.png", price: 180, clicked: false, selectedQuantity: 0, Total: 0};

const coat3 = {name: "Tomoe Jacket", Description: "Vegan leather jacket by Jessie McArthur", image: "../images/rzleatherjacket.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0};

const acc1 = {name: "The Syria Bag", Description: "Handwoven circular straw bag by Jessie McArthur", image: "../images/rz5.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0}; 

const acc2 = {name: "The Mediteranean Bag", Description: "Handwoven yellow circular straw bag by Jessie McArthur", image: "../images/rsz_2cropped48.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0};

const acc3 = {name: "The Sicilian Scarf", Description: "Purple silk print scarf by Jessie McArthur", image: "../images/rsz_1scarf.png", price: 60, clicked: false, selectedQuantity: 0, Total: 0};



//**** jQuery function to change modal on click helped through code recieved from Tutorial Republic- https://www.tutorialrepublic.com/faq/how-to-change-the-image-source-using-jquery.php and https://www.youtube.com/watch?v=JxDjOb0UjAw 

$(document).ready(function(){
    $("#pop1btn").on('click', {
        name: "The Parisien", Description: "Bright orange tuille tutu skirt by Kylie West", image: "../images/rz3.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#pop2btn").on('click', {name: "Atlanta Dress", Description: "Stunning handwoven white lace kneelength dress by Heather McGee", image: "../images/rsz_15.png", price: 160, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#pop3btn").on('click', {name: "Savannah Dress", Description: "Sunset orange maxi dress handmade with 100% organic cotton by Jessie McArthur", image: "../images/rsz_orangedress.png", price: 90, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#dresses1btn").on('click', {name: "Georgia Dress", Description: "Elegant green maxi-dress with uniquely designed tree print by Heather McGee", image: "../images/rsz_52.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#dresses2btn").on('click', {name: "Atlanta Dress", Description: "Stunning handwoven white lace kneelength dress by Heather McGee", image: "../images/rsz_15.png", price: 160, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);   
        $("#dresses3btn").on('click', {name: "Savannah Dress", Description: "Sunset orange maxi dress handmade with 100% organic cotton by Jessie McArthur", image: "../images/rsz_orangedress.png", price: 90, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#top1btn").on('click', {name: "The Artemis", Description: "White crop-top with a high neckline by Jessie McArthur", image: "../images/whitetop1.png", price: 60, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#top2btn").on('click', {name: "The Athena", Description: "Creamy beige wrap top handsewn with 100% organic cotton by Jessie McArthur", image: "../images/whitetrousersbeigetop1.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#top3btn").on('click', {name: "The Hera", Description: "Black boob-tube with 100% organic cotton by Jessie McArthur", image: "../images/yellowskirtblacktop1.png", price: 50, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#skirt1btn").on('click', {name: "The Parisien", Description: "Bright orange tuille tutu skirt by Kylie West", image: "../images/rz3.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#skirt2btn").on('click', {name: "The Marseillais", Description: "Boho skirt. Red and green handdrawn print skirt  by Heather McGee", image: "../images/rz53.png", price: 50, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#skirt3btn").on('click', {name: "The Lyonnais", Description: "A-line blue prairie skirt handmade with 100% organic cotton by Jessie McArthur", image: "../images/rzblueskirtwhitetop.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#trouser1btn").on('click', {name: "London Mod", Description: "Handstitched sequin flares by Kylie West", image: "../images/rsz_sequinflares.png", price: 110, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#trouser2btn").on('click', {name: "Tokyo Chic", Description: "Flared black trousers by Heather McGee", image: "../images/rzflaredtrousersblackblazer.png", price: 70, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#trouser3btn").on('click', {name: "New York Vogue", Description: "Funky blue flared trousers with handwoven lace at the ends by Jessie McArthur", image: "../images/rzfunkyjeans.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#coat1btn").on('click', {name: "Takeko Jacket", Description: "Leather jacket by Jessie McArthur", image: "../images/rsz_127.png", price: 200, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#coat2btn").on('click', {name: "Zenobia Coat", Description: "Woolan orange coatsheered from sheep of Benbulbin by Jessie McArthur", image: "../images/rz4.png", price: 180, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#coat3btn").on('click', {name: "Tomoe Jacket", Description: "Vegan leather jacket by Jessie McArthur", image: "../images/rzleatherjacket.png", price: 120, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#acc1btn").on('click', {name: "The Syria Bag", Description: "Handwoven circular straw bag by Jessie McArthur", image: "../images/rz5.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#acc2btn").on('click', {name: "The Mediteranean Bag", Description: "Handwoven yellow circular straw bag by Jessie McArthur", image: "../images/rsz_2cropped48.png", price: 45, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
        $("#acc3btn").on('click', {name: "The Sicilian Scarf", Description: "Purple silk print scarf by Jessie McArthur", image: "../images/rsz_1scarf.png", price: 60, clicked: false, selectedQuantity: 0, Total: 0}, defineModal);
    

    function defineModal(e){
        $('#exampleModalLabel').text(e.data.name);
        $('#modalDesc').text(e.data.Description);
        $('#modalImage').attr("src", e.data.image);
        $('#mPrice').text("Price: €" + e.data.price);
        tempObj = [e.data.name, e.data.Description, e.data.image, e.data.price, e.data.selectedQuantity, e.data.Total];
  
    }

  });


//*****Setting Quantity of Order ***************
let orderTotal = 0;
let quantity = 0;
const order = [];

$(document).ready(function(){
    $("#quantity1").on('click', {
        selectedQuantity : 1}, setQuantity);
    $("#quantity2").on('click', {
        selectedQuantity : 2}, setQuantity);
    $("#quantity3").on('click', {
        selectedQuantity : 3}, setQuantity);
    $("#quantity4").on('click', {
        selectedQuantity : 4}, setQuantity);
    $("#quantity5").on('click', {
        selectedQuantity : 5}, setQuantity);
    
    function setQuantity(e){
        tempObj["selectedQuantity"] = e.data.selectedQuantity;
        console.log(e.data.selectedQuantity + ", " + tempObj["selectedQuantity"])
        
    }
});
    


//*****Orders ***************

tempObj = [];
basket = [];


function displayOrders(){
        
        for(i=0; i<basket.length; i++){
        console.log(basket[i]);
    
}
}

//************using json ****************

//I had origionally been trying to carry over an array of JSON objects but it turns out that it's not possible to do that from page to page. However the Sam Cogan suggested using localstorage and showed me how and it works great. Below I decided to use my previously built tempObj and basket vars with the localstorage code and it worked very well. Now to figure out the display! 

var allOrders = "Orders";

function addToBasket(){
basket.push(tempObj);
localStorage.setItem(allOrders, JSON.stringify(basket));


}

function displayBasket(){
    var fullBasket = [JSON.parse(localStorage.getItem(allOrders))];
    alert(fullBasket);
    
//    for(i = 0; i < fullBasket.length; i++){
//        for(j = 0; j < fullBasket[i].length; j++){
//            document.getElementById("#orderHeading"[i]).innerHTML = fullBasket[i][j].name;
//        }
//    }
    
//    code below gotten from https://howtocreateapps.com/fetch-and-display-json-html-javascript/ in an effort to display the orders. It isn't working as I keep getting the error Uncaught TypeError: Cannot read properties of null (reading 'append') but I'll work on this tomorrow. There's probably a very easy solution to the display and I'm over complicating it. I'll sleep on it.
    
    var orderHolder = document.getElementById("#addOrders");
    for(i = 0; i < fullBasket.length; i++){
        for(j = 0; j < fullBasket[i].length; j++){
            var div = document.createElement("div");
            div.innerHTML = 'Name: ' + fullBasket[i].name;
            orderHolder.appendChild(div);
        }
    }
}



// jQuery to change background color of footer and buttons on payment page       
$(document).ready(function(){
    $(".basketFooter").css("background-color","white");
    $(".basketFooter").css("color","#3b3b3b");
    $(".basketRegSubmitBtn").css("background-color","#3b3b3b");
    $(".basketRegSubmitBtn").css("color","white");
    $(".basketConSubmitBtn").css("background-color","#3b3b3b");
    $(".basketConSubmitBtn").css("color","white");
});

var container = document.getElementById("addOrders");

function addOrders(){
    for(i = 0; i < fullBasket.length; i++){
        container.append("<div id = order"+[i]+"></div>");
//            for(j = 0; j < basket[i].length; j++){ 
//            order[i].append("<h1>"+basket[i][j].name + "</h1> <br> <p>" + basket[i][j].Description + "</p>");
//                
//            }
    }
}


//$(document).ready(() => {
//  $('#addOrders').ready(function(){
//      addOrders();
//      displayOrders();
//   
//  })
//  
//});


//*****************form validation******************

pswdValid = false;
// useraccounts array also email validation probably moot as this array won't go past the page. But we'll have it here for the craic. A test user was placed in users array.
const users = [{fName: "John", lName: "Doe", email: "johndoe@mailiemail.com", password: "Heyhoe1234*("}];

function submit(){
    if(pswdValid == true){
        var fName = document.getElementById("fName").value;
        var lName = document.getElementById("lName").value;
        var email = document.getElementById("regEmail").value;
        var pswd = document.getElementById("regPswd").value;
        
        users.push({fName: fName, lName: lName, email: email, password: pswd});
        alert("Congratulations, you're signed in.");
        loggedIn();
        
//Obviously in real life you would never ever have the password like this, but for the purposes of achieving login I'm doing it this way as I don't have enough time to research how I might incorporate hashing into the site.
    
    }
}

//For the check validation I checked whether this was a new email address and if the password met certain conditions. If all of these are true then the submit() is completed. Currently a logic error. possibly to do with email

function checkValidation(){
    event.preventDefault();
    hasCapitalisation = false;
    hasLowerCase = false;
    hasNum = false;
    hasSymbol = false;
    newEmail = false;
    
//    check email is not already in users

    var emailMsg = "It looks like this email is already connected to an account. Please sign in ";
    var errorMsg = "Please input a valid password. Password must have min. 8 letters, with mixed capitalisation, numbers and symbols";
    var emailInput = (document.getElementById("regEmail").value);
    
        for(i = 0; i < users.length; i++){
            console.log(users[i].email);
                if (emailInput === users[i].email){
                    console.log(users[i].email + " already exists. newEmail Boolean =" + newEmail);
                    alert(emailMsg);
                }else{

                    newEmail = true;
                    console.log("This is a new email: " + newEmail);
                    userEmail = emailInput;
                }

        }
    
//    for my java I used the .match method, but for this I wanted to try do it this way
    
    var alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
    var symbols = Array.from("!\"£$%^&*/()<>?@:;");
    var numbers = Array.from("1234567890");
    
    var pswd = Array.from(document.getElementById("regPswd").value);
    for(i = 0; i < pswd.length; i++){
        console.log(pswd[i]);
        for(j = 0; j < alphabet.length; j++){
            if(pswd[i] == alphabet[j].toUpperCase()){
                hasCapitalisation = true;
                break;
                console.log(hasCapitalisation);
            }
            if(pswd[i] == alphabet[j].toLocaleLowerCase()){
                hasLowerCase = true;
                break;
                console.log(hasLowerCase);
            }
        }
        for(k = 0; k < symbols.length; k++){
            if(pswd[i] == symbols[k]){
                hasSymbol = true;
                break;
                console.log(hasSymbol);
            }
        }
        for(l = 0; l < numbers.length; l++){
            if(pswd[i] == numbers[l]){
                hasNum = true;
                break;
                console.log(hasNum);
            }
        }
    }
    
    if((hasCapitalisation) && (hasLowerCase) && (hasSymbol) && (hasNum) && (newEmail)){
        pswdValid = true;
        submit();
    }else if (newEmail === false) {
        alert(emailMsg);
    }else {
        alert(errorMsg);

    }
    
}

function submitContact(){
    event.preventDefault();
    alert("Thank you, you're email has been submitted.");

}

//*************login**************
userEmail = " ";

function loggedIn(){
    $(document).ready(function() {
        $("#loginForm").toggle();
        $("h1").text("Welcome! Let's get shopping!");
        $("#pg").text("You are now logged in as " + userEmail);
    });
}

//Ideally I should have had separate check email and password validation functions which would have given me better reusability and I wouldn't have had to repeat code. I'll be doing this next time.
let loginCount = 0;
//The code below wouldn't work

// while(loginCount < 3){
//     login();
//     if(loginCount >=3 && pswdValid == false ){
//        $(document).ready(function() {
//        $("#loginForm").toggle();
//        $("h1").text("Incorrect password.");
//        $("#pg").text("You have entered the incorrect password 3 times. Please try again later.");
//        });
//    }
//     
// }

function login(){
    event.preventDefault();
        let here = "here";
        let hereLink = here.link("../register/index.html");
    //    check for existing email address
                for(i = 0; i < users.length; i++){
                console.log(users[i].email);
                    if (document.getElementById("logEmail").value === users[i].email){
                        console.log(users[i].email);
                        newEmail = false;
                            if(document.getElementById("logPswd").value == users[i].password){
                                pswdValid = true;
                               alert("You're in!");
                                userEmail = users[i].email;
                                loggedIn();
                                break;
                               }
                            else{
                                pswdValid = false;
                                alert("Incorrect password. Please try again.");
                                loginCount++; 

                                }
                    }   
                    else{
                        alert("This email is not registered with us. Please create an account.");
                        document.getElementById("inputError").innerHTML = "This email is not registered with us. Please create an account " + hereLink;

                    }


            }

    }




