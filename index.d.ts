import {ViewStyle} from 'react-native';

export interface ToggleProps  {
    

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
    toggle?: boolean


     /**
    * Function to set the status of toggle switch which will be stored in your local state
    */
    setToggle: React.Dispatch<React.SetStateAction<undefined>>,

}