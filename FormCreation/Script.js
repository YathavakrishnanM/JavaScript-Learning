
    var firstName=document.getElementById("first-name");
    var lastName=document.getElementById("last-name");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var address=document.getElementById("address");
    var dob=document.getElementById("dob");
    var time=document.getElementById("time");
    var img=document.getElementById("img");
    var number=document.getElementById("number");

    var regrx=/[7-9]\d{9}/;

    if(regrx.test())

    var g1=document.getElementById("g1").value;
    var g2=document.getElementById("g2");
    var g3=document.getElementById("g3");
    var gender=document.getElementById("gender-col");
    if(g1.checked == true){
        gender.value=g1.value;
    }
    else if(g2.checked==true){
        gender.value=g2.value;
    }
    else{
        gender.value=g3.value;
    }

    var select=document.getElementById("select");
    var x=select.options[select.selectedIndex].value;

    var fullName=document.getElementById("name-col");
    

    var email_col=document.getElementById("email-col");


    var pw=document.getElementById("password-col");


    var addr=document.getElementById("address-col");
 

    var DOB=document.getElementById("dob-col");


    var t=document.getElementById("time-col");
    var field_interest=document.getElementById("field-interst");

    var image=document.getElementById("img-col");
    
    function transferData(){
        document.getElementById("table1").style.display="none";
        document.getElementById("table2").style.display="inline";
        fullName.innerHTML=firstName;
        email_col.value=email.value;
        pw.value=password.value;
        addr.value=address.value;
        DOB.value=dob.value;
        t.value=time.value;
        field_interest.value=x;

    }


        