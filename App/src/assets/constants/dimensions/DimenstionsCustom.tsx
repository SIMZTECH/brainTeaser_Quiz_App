/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Dimensions } from "react-native";

const {height,width} = Dimensions.get('window');

const DimensionReducer=(args:number)=>{
    return Math.round(args);
}

export default {height,width,DimensionReducer}

