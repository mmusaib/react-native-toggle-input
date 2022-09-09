import React,{JSXElementConstructor} from 'react';
import {View,StyleSheet,Pressable} from 'react-native';


interface ToggleProps  {
    
    /**
    * Color of the switch
    */
    color?: string,

     /**
    * Size of the switch
    */
    size?: number,

    /**
    * Pass a true value if you want to use a filled color switch
    */
    filled?: boolean


    /**
    * Color of the circle in switch
    */
    circleColor?: string,

   
    /**
    * toggle status of the switch
    */
    toggle: boolean,
        
    /**
    * Function to call after the switch has been turned on
    */
    onTrue: () => void,
    
    /**
    * Function to call after the switch has been turned off
    */
    onFalse: () => void,

     /**
    * Function to set the status of toggle switch which will be stored in your local state
    */
    setToggle: React.Dispatch<React.SetStateAction<undefined>>,

}


const Toggle: React.FC<ToggleProps> = ({color,size,filled,circleColor,toggle,setToggle,onTrue,onFalse}) => {
    const _color = color ?? "#4C956C";
    const _circle = circleColor ?? _color;
    const _filled = filled ?? false;
    const _size = size ?? 25;


    function toggleContainerStyles(){
        if(!_filled){
            return [styles(_color,_size,_circle).toggleContainer, (!toggle) ? {borderColor: "#AAAAAA"} : null]
        }else{
            return [styles(_color,_size,_circle).toggleContainer,styles(_color,_size,_circle).toggleContainerFilled, (!toggle) ? {backgroundColor: "#AAAAAA", borderColor: "#AAAAAA"} : null]
        }
    }

    function toggleCircleStyles(){
        if(!_filled){
            return [styles(_color,_size,_circle).circle, (toggle) ? {alignSelf: "flex-end"} : { backgroundColor: "#AAAAAA"}];
        }else{
            return [styles(_color,_size,_circle).circle, styles(_color,_size,_circle).circleFilled,  (toggle) ? {alignSelf: "flex-end"} : { backgroundColor: "#FEFEFE"}]
        }
    }

    return(
        <View>
            <Pressable 
                style={toggleContainerStyles()} 
                onPress={() => {
                    (toggle) ? onFalse() : onTrue(); 
                    setToggle(!toggle);
                }}
             >
                <View style={toggleCircleStyles()}></View>
            </Pressable>
        </View>
    )

    
}

export default Toggle;



const styles = (color:string, size:number, circleColor:string) => {
    return StyleSheet.create({
        toggleContainer: { padding: size/10, width: 2.3*size, borderRadius: size, borderColor: color, borderWidth: 2.5  },
        toggleContainerFilled: { backgroundColor: color, borderColor: color },
        circle: { width: size, height: size, borderRadius: size/2, backgroundColor: circleColor },
        circleFilled: { backgroundColor: circleColor },
    });
}
