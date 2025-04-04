import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Homescreen() {
    const STARVALUE = 0;
    const [count, setCount] = useState(STARVALUE);
    

    return (
        <View>
            <Text>Um exemplo de texto!</Text>   
            <Text>Contador: {count}</Text>   
            <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/><br></br>   
            <Button title="Diminuir" onPress={() => {setCount(count - 1)}}/><br></br>  
            <Button title="reset" onPress={() => {setCount(STARVALUE)}}/><br></br>
            
            <CustomButton title="Name"/>

        </View>
         
    );
}