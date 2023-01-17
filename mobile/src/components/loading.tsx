import { ActivityIndicator, View } from "react-native";

export function Loading(){
    return(
        <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
            <ActivityIndicator color='#7C3AED'></ActivityIndicator>
        </View>
    )
}