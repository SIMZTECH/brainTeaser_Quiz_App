/* eslint-disable prettier/prettier */
import { StyleSheet,View,TouchableOpacity,Image,Text} from 'react-native';
import React from 'react';
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { graduationHat,giftBox } from '../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
type propsType={
    modalStatus:boolean,
    operation:(args:boolean)=>void,
}

const ModalCustom = ({modalStatus,operation}:propsType) => {
  return (
    <View className='b flex-1'>
      <Modal
      style={{
        backgroundColor:'transparent',
      }}
      animationIn={'bounceInUp'}
      animationOut={'bounceOut'}
      isVisible={modalStatus}>
        <View className='w-[300px] bg-[#141933] h-[240px] self-center rounded-lg p-3 shadow-md relative'>
          {/* button close */}
          <TouchableOpacity 
            onPress={(()=>operation(modalStatus))}
            className='b w-8 h-8 bg-[#0f1224] items-center justify-center p-1 rounded-full self-end'>
            <AntDesign name='close' color={'#6e759d'} size={24}/>
          </TouchableOpacity>
           {/* graduation hat */}
           <View className='b w-[130px] h-[130px] absolute -top-16 -left-7'>
              <Image source={graduationHat} resizeMode='contain' className='b w-full h-full'/>
            </View>

          <View className='b mt-3 relative flex-1 items-center'>
            <View className='b w-[190px] h-[170px]  -mt-12'>
              <Image source={giftBox} resizeMode='contain' className='b w-full h-full' />
            </View>
              <Text 
                className='b text-[#6e759d] text-center font-normal text-[16px] mt-1'>
                  Reach <Text className='b text-green-900 font-semibold'>90%</Text> Score in Quiz Category marked red to unwrap <Text className='b text-red-800 font-semibold'>Gift!</Text> 
              </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}
export default ModalCustom;

const styles = StyleSheet.create({})