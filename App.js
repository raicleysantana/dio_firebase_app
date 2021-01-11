import React from 'react';
import {StatusBar} from "expo-status-bar";
import App from './src/app';

console.disableYellowBox = true;

export default function Index() {
    return (<>
            <StatusBar
                style="light"
                backgroundColor="#2ECC71"
            />
            <App/>
        </>
    );
}

