import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function HomeScreebn(){
    const nome = "Gusta";
    const [count, setCount] = useState(0);
    const [name, setName] = useState(nome)
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
            <Text> Bem vindo ao app, {name}!</Text>

            <Text>contador : {count}</Text>
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

            <TextInput placeholder="Digite algo" onChangeText={setName}/>
         
            <CustomButton title="Botão vermelho" onPress={() => {setName('Gusta ' + count)}}/>

        </View>
    );
}

