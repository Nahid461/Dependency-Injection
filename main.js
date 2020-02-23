//Reference Path="../Dependency-Injection/main.js"
//Reference Path="../Dependency-Injection/main.js"




function onButtonClick(){

    //Create an instance of child class
    let childObj=new child();

    //Create an instance of parent class

    let parentObj=new parent(childObj);
    childObj.fullName="Nahid Fatima"
    parentObj.parentDemo1();
    console.log(childObj.fullName);
    parentObj.parentDemo2();
    parentObj.parentDemo3();
    
    parentObj=null;  
}

onButtonClick();