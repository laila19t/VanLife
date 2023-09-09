import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore/lite"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDL2LqZ3Vlccf7FJyr7Zl4dhiZmlOnlMAk",
  authDomain: "vanlife-20dd2.firebaseapp.com",
  projectId: "vanlife-20dd2",
  storageBucket: "vanlife-20dd2.appspot.com",
  messagingSenderId: "258160428737",
  appId: "1:258160428737:web:f38873336be4c2b58a7640"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db,"vans")
const auth = getAuth();

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id : doc.id
    })) 
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function SignUp(email,password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export async function loginUser(email,password) {
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}

export async function signUserOut(){
    auth.signOut()
    .then(console.log('logged out'))
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
}







// export async function loginUser(creds) {
//     const res = await fetch("/api/login",
//         { method: "post", body: JSON.stringify(creds) }
//     )
//     const data = await res.json()

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status
//         }
//     }

//     return data
// }


// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }


// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }