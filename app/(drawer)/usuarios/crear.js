import {View, Text, StyleSheet} from 'react-native';

export default function CrearUsuario(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Crear Usuario </Text>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:22,
        fontWeight:'600',
    },
})