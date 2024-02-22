

import React, {useState} from 'react';
import { StatusBar  } from 'react-native';

function StatusBarC(){
   
    return(

    <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle={"ligth-content"}

        hidden={false}
      />
    )
}
export default StatusBarC;