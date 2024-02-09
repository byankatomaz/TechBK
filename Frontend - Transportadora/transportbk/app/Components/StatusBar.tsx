
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StatusBarStyle } from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

function StatusBarC(){
   
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
      STYLES[2],
    );
    const [statusBarTransition, setStatusBarTransition] = useState<
      'fade' | 'slide' | 'none'
    >(TRANSITIONS[1]);
    return(

    <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={false}
      />
    )
}
export default StatusBarC;