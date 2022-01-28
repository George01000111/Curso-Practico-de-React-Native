import React,{useState} from 'react'
import { StyleSheet,View, Text,TextInput,Button,Keyboard } from 'react-native'
import {useFormik} from "formik"
import * as Yup from "yup"
import {user,userDetails} from "../../utils/userDB"
import useAuth from '../../hooks/useAuth'


export default function LoginForm() {

    const [error,setError]=useState("");

    const {login}= useAuth();
    console.log(useAuth())
   

    const formik = useFormik({
        initialValues:initialValues(),
        validationSchema:Yup.object(validationSchema()),
        validateOnChange:false,
        onSubmit:(formValue)=>{

           const{username,password}=formValue;
           if(username !=user.username || password !=user.password){
               setError('El usuario o la contrasena no son correcto')
              
           }else{
            login(userDetails)
            setError('')
            console.log('login correcto')
            console.log(userDetails)
           }
        }
    })


    return (
        <View>
            <Text style={styles.title}>Iniciar sesion</Text>
            <TextInput
              placeholder="Nombre de usuario"
              style={styles.input}
              autoCapitalize='none'
              value={formik.values.username}
               onChangeText={(text)=>formik.setFieldValue('username',text)}
            />
            <TextInput
              placeholder="Contrasena" 
              style={styles.input} 
              autoCapitalize='none'
              secureTextEntry={true} 
              value={formik.values.password}    
              onChangeText={(text)=>formik.setFieldValue('password',text)} 
            />

            <Button title="Entrar" onPress={formik.handleSubmit} />

            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>

            <Text style={styles.error}>{error}</Text>
        </View>
    )
}


function initialValues(){
    return{
        username:"",
        password:""
    }
}

function validationSchema(){
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contrasena es obligatoria"),
    }
}

const styles=StyleSheet.create({
    title:{
        textAlign:"center",
        fontSize:28,
        fontWeight:"bold",
        marginTop:50,
        marginBottom:15,

    },

    input:{
     height:40,
     margin:12,
     borderWidth:1,
     padding:10,
     borderRadius:10,
    },

    error:{
        textAlign:"center",
        color:"#f00",
        marginTop:20,
    }

})
