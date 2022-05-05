import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth"
import { facebook, google } from "../../Firebase/firebaseConfig"
import { typesUsers } from "../Types/typesUsers"


export const actionLogoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
        .then((user) => {
            dispatch(actionLogoutSync())
            console.log('Adios')
        })
        .catch(err => console.log(err))
    }
}

export const actionLogoutSync = () => {
    return {
        type: typesUsers.logout
    }
}

export const actionSaveUser = (userPeticion) => {
    return {
        type: typesUsers.users,
        payload: userPeticion
    }
}

export const actionLoginEmailYPassAsync = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(actionSaveUser({
                    id: user.uid,
                    type: 'USER',
                    nombre: user.displayName,
                    email: user.email,
                    pass: user.password,
                    image: user.photoURL
                }))
                console.log('Usuario Autorizado')
                alert(`Bienvenido ${user.displayName}`)

            })
            .catch((err) => {
                alert('Usuario o contraseña incorrecta')
                console.log(err)
            }
            )
    }
}

export const actionGoogleAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(actionSaveUser({
                    id: user.uid,
                    type: 'USER',
                    nombre: user.displayName,
                    email: user.email,
                    pass: user.password,
                    image: user.photoURL
                }))
                console.log(`Usuario ${user.displayName} fue autorizado`)
                window.alert(`Bienvenido Maestro ${user.displayName}`)
            })
            .catch(err => console.log(err))
    }
}

export const actionFacebookAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
        .then(({user}) => {
            dispatch(actionSaveUser({
                id: user.uid,
                type: 'USER',
                nombre: user.displayName,
                email: user.email,
                password: user.uid,
                image: user.photoURL
            }))
            console.log(`Usuario ${user.displayName} fue autorizado`)
            window.alert(`Bienvenido Maestro ${user.displayName}`)
        })
        .catch(error => console.log(error))
    }
}

export const actionRegisterSync = (typeUser, name, email, password, image) => {
    return {
        type: typesUsers.register,
        payload: {
            typeUser,
            name,
            email,
            password,
            image
        }
    }
}


export const actionRegisterAsync = (type, nombre, email, password, image) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                console.log(user)
                await updateProfile(auth.currentUser, { displayName: nombre, photoURL: image })
                dispatch(actionRegisterSync({
                    type,
                    nombre,
                    email,
                    password,
                    image
                }))
                window.alert(`Bienvenido Maestro ${user.displayName}`)
            }).catch(err => {
                alert('¡Ups! Correo electronico no valido...')
                console.log(err)
            })
    }
}


