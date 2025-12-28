import {View, Text, Pressable, StyleSheet} from 'react-native';
import {router} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';

export default function Configuracion(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Configuracion </Text>

            <Pressable style={styles.item} onPress={()=> router.push("/configuracion")}>
                <Ionicons name='person-circle' size={22} color="#1B5E20"/>
                <Text style={styles.text}> Perfil </Text>
            </Pressable>

            <Pressable style={styles.item} onPress={()=> router.push("/configuracion/seguridad")}>
                <Ionicons name='lock-closed' size={22} color="#1B5E20"/>
                <Text style={styles.text}> Seguridad </Text>
            </Pressable>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor: "#F9FAFB",
    },
    title:{
        fontSize:22,
        fontWeight:'600',
        marginBottom:20,
        color: "#1B5E20", 
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"#FFFFFF",
        padding:16,
        borderRadius:14,
        marginBottom:12,
        gap:12,
        elevation:2,
    },
    text:{
        fontSize:16,
        fontWeight:'600',
    },
})