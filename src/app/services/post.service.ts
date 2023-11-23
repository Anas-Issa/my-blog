import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
// import core firebase client (required)
import  firebase from "@firebase/app-compat"
// import Firebase Authentication (optional)
import '@firebase/auth';

// import Firebase Realtime Database (optional)
import '@firebase/database';

// import Cloud Firestore (optional)
import '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs:AngularFirestore) { }

  
    loadFeaturedData(){
    return this.afs.collection('posts',ref=>ref.where('isFeatured','==',true).limit(4)).snapshotChanges()
    .pipe(
      map(actions=>{

      return  actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id,data}
        })
      }
        
      )
    )
  }

  loadLatest()  { 
     return this.afs.collection('posts',ref=>ref.orderBy('createdAt')).snapshotChanges()
    .pipe(
      map(actions=>{

      return  actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id,data}
        })
      }
        
      )
    )
  }

  loadCategoryPosts(categoryId:string) { 
    return this.afs.collection('posts',ref=>ref.where('category.categoryId','==',categoryId).limit(4)).snapshotChanges()
    .pipe(
      map(actions=>{

      return  actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id,data}
        })
      }
        
      )
    )
  }

   loadOnePost(id:string){
 return   this.afs.collection('posts').doc(id).valueChanges();


  }

  loadSimilar(catId:any) { 
return this.afs.collection('posts',ref=>ref.where('category.categoryId','==',catId).limit(4)).snapshotChanges()
    .pipe(
      map(actions=>{

      return  actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id,data}
        })
      }
        
      )
    )
  }

  countViws(postId:any){
    const viewsCount={
      views:firebase.firestore.FieldValue.increment(1)
    }
    this.afs.doc(`posts/${postId}`).update(viewsCount)
    .then(()=>{
      
    })
  }
}
