
//book name validation
function bookValidate(){
    var book=document.getElementById("book");
    var label_book=document.getElementById("label_book");
    
    var regex=/^[a-zA-Z+]+$/;
    if(regex.test(book.value)){
        book.style.borderColor="green";
        label_book.style.display="block";
        label_book.style.color="green";
        label_book.innerHTML="valid!";
    }
    else{
        book.style.borderColor="red";
        label_book.style.display="block";
        label_book.style.color="red";
        label_book.innerHTML="Invalid!";
    }
}


//email validation

function emailValidation(){
    var email=document.getElementById("email");
    var label_email=document.getElementById("label_email");

    var regex =/^([a-zA-Z0-9./-]+)@([a-zA-z0-9]+).([a-z]){2,3}$/

    if(regex.test(email.value)){
        email.style.borderColor="green";
        label_email.style.display="block";
        label_email.innerHTML="valid!";
        label_email.style.color="green";
    }else{
        email.style.borderColor="red";
        label_email.style.display="block";
        label_email.innerHTML="Invalid!";
        label_email.style.color="red";
    }
}


//name validation

function nameValidation(){
    var authorName=document.getElementById("authorname");
    var label_authorname=document.getElementById("label_authorname");

    var regex=/^([a-zA-Z@]+)$/
    if(regex.test(authorName.value)){
        authorName.style.borderColor="green";
        label_authorname.style.display="block";
        label_authorname.innerHTML="valid!";
        label_authorname.style.color="green";
    }else{
        authorName.style.borderColor="red";
        label_authorname.style.display="block";
        label_authorname.innerHTML="Invalid!";
        label_authorname.style.color="red";
    }
}


//published validation

function publishedValidate(){
    var year=document.getElementById("year");
    var label_year=document.getElementById("label_year");

    var regex=/^([0-9]){4}$/

    if(regex.test(year.value)){
        year.style.borderColor="green";
        label_year.style.display="block";
        label_year.innerHTML="valid!";
        label_year.style.color="green";
    }else{
        year.style.borderColor="red";
        label_year.style.display="block";
        label_year.innerHTML="Invalid!";
        label_year.style.color="red";
    }
}


//price validation

function priceValidation(){
    var price=document.getElementById("price");
    var label_price=document.getElementById("label_price");

    var regex=/^([0-9]+)$/

    if(regex.test(price.value)){
        price.style.borderColor="green";
        label_price.style.display="block";
        label_price.innerHTML="valid!";
        label_price.style.color="green";
    }else{
        price.style.borderColor="red";
        label_price.style.display="block";
        label_price.innerHTML="Invalid!";
        label_price.style.color="red";
    }
}

//
function selectValidate(){
    var select=document.getElementById("select");

    
}

//show page

function showPage(){
    var a=document.getElementById("price").value;
    var b=document.getElementById("year").value;
    var c=document.getElementById("authorname").value;
    var d=document.getElementById("email").value;
    var e=document.getElementById("book").value;

    if(a=="" || b=="" || c=="" || d=="" ||e==""){
        alert("please fill all fields!")
    }else{
        var main1=document.getElementById("middle_page");
        var main2=document.getElementById("middle_page2");

        main1.style.display="none";
        main2.style.display="block";

        document.getElementById("book1").innerHTML=e;
        document.getElementById("email1").innerHTML=d;
        document.getElementById("name1").innerHTML=c;
        document.getElementById("published1").innerHTML=b;
        document.getElementById("price1").innerHTML=a;

    }
}

//back page

function backPage(){
    var main1=document.getElementById("middle_page");
    var main2=document.getElementById("middle_page2");

    main1.style.display="block";
    main2.style.display="none";
}

function cancel(){
   var a= document.getElementById("price").value="";
   var b= document.getElementById("year").value="";
   var c= document.getElementById("authorname").value="";
   var d= document.getElementById("email").value="";
   var e= document.getElementById("book").value="";

   document.getElementById("label_price").style.display=none;
   document.getElementById("label_year").style.display=none;
}

function saveData(){
    var a=document.getElementById("price").value;
    var b=document.getElementById("year").value;
    var c=document.getElementById("authorname").value;
    var d=document.getElementById("email").value;
    var e=document.getElementById("book").value;
    var f=document.getElementById("select").value;

    if(a=="" || b=="" || c=="" || d=="" ||e==""){
        alert("please fill all fields!")
    }else{
        alert("Saved succesfully")
        document.getElementById("Catagory").innerHTML=f;
        document.getElementById("book1").innerHTML=e;
        document.getElementById("email1").innerHTML=d;
        document.getElementById("name1").innerHTML=c;
        document.getElementById("published1").innerHTML=b;
        document.getElementById("price1").innerHTML=a;

    }
}
