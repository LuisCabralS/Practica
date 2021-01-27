import{AbstractControl} from "@angular/forms";

export class myValidations{

    static userM(control:AbstractControl){
        const value= control.value;
         if(value>10){
             return{userM:true}
         }
         return null;
    }

    static userMP(limit:number){

        return(control:AbstractControl) =>{

            const value= control.value;
            if(value > limit){
                return{userM:true}
            }
            return null;
        }



        
         
    }
}