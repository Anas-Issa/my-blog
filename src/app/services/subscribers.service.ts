import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore) { }

  addSubs(data:any){
    console.log("data",data);
      this.afs.collection('subscribers').add(data).then(()=>{

      })
  }

checkSub(data:any) { 
  console.log(data.email);
return  this.afs.collection('subscribers',ref=>ref.where('email','==',data.email)).get();

}
}
