import {View, Text} from 'react-native';

export default function UserInf({nombre, rol}){
    return(
        <View>
            <Text> Nombre: {nombre}</Text>
            <Text> Rol: {rol}</Text>
        </View>
    );
}