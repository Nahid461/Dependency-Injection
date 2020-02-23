function parent(childObj){

    //Global Variable
    let _childObj=childObj;
    
    //Public Method
    this.parentDemo1=function(){
       
        //Bad practice tuo Define any Class Instances 
        //Death Relationship
        //let childObj=new child();
        //childObj.childDemo();

        _childObj.childDemo();

        console.log(_childObj.FullName);
    }

    this.parentDemo2=()=>{
        _childObj.childDemo();
        console.log(_childObj.FullName);
     
    }

    this.parentDemo3=()=>{ 
        _childObj.childDemo();
    }

}