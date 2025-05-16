import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';  

export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name='about'
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ color, size }) => <Ionicons name='information-outline' size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    title: 'Configuração',
                    tabBarIcon: ({ color, size }) => <Ionicons name='settings-outline' size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name='menu'
                options={{
                    title: 'Menu',
                    tabBarIcon: ({ color, size }) => <Ionicons name='list-outline' size={size} color={color} />
                }}
            />            <Tabs.Screen
                name='suporte'
                options={{
                    title: 'Suporte',
                    tabBarIcon: ({ color, size }) => <AntDesign name="customerservice" size={size} color={color} />
                }}
            />
        </Tabs>
    );
}