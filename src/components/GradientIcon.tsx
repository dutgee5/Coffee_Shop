import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from './CustomIcon';
import { COLORS, SPACING } from '../theme/theme';


interface GradientIconProps{
    name:string;
    color:string;
    size:number;
}

const GradientIcon:React.FC<GradientIconProps> = ({name,color,size}) => {
  return (
    <View style={styles.container}>

        <LinearGradient
        start={{x:0,y:0}}
        end={{x:1,y:1}} 
        colors={[COLORS.secondaryGreyHex,COLORS.primaryBlackHex]}
        style={styles.linearGradientBG}
        >
            <CustomIcon name={name} color={color} size={size}/>
        </LinearGradient>
    </View>
  )
}

export default GradientIcon

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:COLORS.primaryDarkGreyHex,
        borderRadius:SPACING.space_12,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.secondaryDarkGreyHex,
        overflow:'hidden'
    },
    linearGradientBG:{
        height:SPACING.space_36,
        width:SPACING.space_36,
        alignItems:'center',
        justifyContent:'center'
    }

})