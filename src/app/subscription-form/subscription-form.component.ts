import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

/**
 *
 */
isEmailError:boolean=false;
isSubscribed:boolean=false;
constructor( private subservice:SubscribersService) {
  

}

  onSubmit(data:any){
    console.log("blblblblb",data);
    const SubData:Sub={
      name:data.name,
      email:data.email
    }
    
    this.subservice.checkSub(SubData).subscribe(val=>{
        if(val.empty){
        this.subservice.addSubs(data);   
        this.isSubscribed=true;   
        }
        else{
          this.isEmailError=true;
           
        }
    });
  }
}
