import React from 'react'
import firebase from '../utils/firebaseConfig'

const Main = () => {
  return (
    <main>
      <nav>
        <h1>React Crud</h1>
        <h4>Bonjour {firebase.auth().currentUser.displayName}</h4>
        <button>
        <div onClick={() => firebase.auth().signOut()}>Se déconnecter</div>
        </button>
      </nav>
    </main>
  )
}

export default Main
