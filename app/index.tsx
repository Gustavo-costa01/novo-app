import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreebn(){
    const [count, setCount] = useState(0);
    return (
        <View style={{backgroundColor: 'pink'}}>
            <Text>{count}</Text>
            <Button 
            title="Aumentar"
            onPress={() => {setCount(count+1)}}
            />
            <Button 
            title="Dimunuir"
            onPress={() => {setCount(count-1)}}
            />
            <Button
            title="Reiniciar"
            onPress={() => {setCount(count - count)}}
            />
            <CustomButton title="Teste"/>
        </View>
    );
}

