/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable space-infix-ops */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Alert, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, { useCallback, useEffect, useLayoutEffect, useMemo } from 'react';
import DimenstionsCustom from '../../assets/constants/dimensions/DimenstionsCustom';
import QuestionMarker from './QuestionMarker';
import QuestionBox from './QuestionBox';
import ButtonComponent from './ButtonComponent';

import APICollector from '../../assets/APIs/QuestionsApis';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';


const {height,width,DimensionReducer}=DimenstionsCustom;

type propsType={
  route:any,
  navigation:any
}

const QuestionsScreen = ({route,navigation}:propsType) => {
  const {GetQuestions}=APICollector();//get questions from an API
  const {title}=route.params;

const [marksDisplay,setMarksDisplay]=React.useState<Boolean[]>([]);
const track=[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
const [disableBtn,setDisableBtn]=React.useState<Boolean>(false);
const [counter,setCounter]=React.useState<number>(0);
const [retrivedAPIData,setRetrivedAPIData]=React.useState<any[]>([]);
const [questionOptions,setQuestionOptions]=React.useState<any[]>([]);
const [difficultLevel, setDifficultLevel] = React.useState('medium');
const [questionsRetrieveError, setQuestionsRetrieveError] = React.useState('');
const [key, setKey] = React.useState(0);

const QuestionsCategorySpecifier=(_title:string)=>{
  let questionID:number=0;
  switch (_title) {
    case 'Computers':
      questionID=18;
      break
    case 'History':
      questionID=23;
      break
    case 'Gen Knowledge':
      questionID=9;
      break
    case 'Politics':
      questionID=24;
      break
    case 'Sports':
      questionID=21;
      break
    case 'Celebrities':
      questionID=26;
      break
    case 'Geography':
      questionID=22;
      break
    case 'Science & Nature':
      questionID=17;
      break
    case 'Animals':
      questionID=27;
      break
  };

  return questionID;

};

const shuffleArray=(array:any)=>{
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
};

const HandleOnPressedQuitQuiz=((args:String)=>{
  if(args=='Quit Quiz'){
    navigation.navigate('HomeMenuTab');
  }
});

const GenerateScores = useMemo(()=>{
  let score = 0;
  for (let i = 0; i < marksDisplay.length; i++){
    console.log(marksDisplay[i]);
    if (marksDisplay[i] == true) {
      score = score + 1;
    }
  };
  return score;
},[marksDisplay]);

const getQuestionOptionsAndShuffle=useCallback((_object:any)=>{
  const copyOptions = [..._object.incorrect_answers];
  copyOptions.push(_object.correct_answer);
  shuffleArray(copyOptions);
  return copyOptions;
},[]);

const HandleOnPressedNext = ((args:String)=>{
  if (args == 'Skip') {
      setTimeout(() => {
        setKey(key+1);
      if(counter!=19){
        markerOperation(false);
        setCounter((prevState:any)=>prevState+1);
        setQuestionOptions(getQuestionOptionsAndShuffle(retrivedAPIData[counter+1]));
      }else{
        if(marksDisplay.length!=20){
          markerOperation(false);
        }
      }
    },50);
  } else if (args == 'Show Results') {
    const scores = GenerateScores;
    navigation.navigate('Results',{score:scores});
  }
});

const GetQuizeQuestions=useCallback(async()=>{
  GetQuestions(QuestionsCategorySpecifier(title),difficultLevel)
  .then((value:any)=>{
    if (!(retrivedAPIData.length > 0)){
      setRetrivedAPIData(value);
      setQuestionOptions(getQuestionOptionsAndShuffle(value[0]));
    } 
  })
  .catch((error)=>{
    setQuestionsRetrieveError(error)
  });

},[GetQuestions, getQuestionOptionsAndShuffle, retrivedAPIData.length]);

// handle markings
const markerOperation = ((args:Boolean)=>{
  const copyArray = [...marksDisplay];
  copyArray.push(args);
  setMarksDisplay(copyArray);
});

type propsType={
  remainingTime:number,
}

const remainTimer=({remainingTime}:propsType)=>{
  if ( remainingTime == 0 ){
    setTimeout(() => {
      if(counter!=19){
        setKey(key+1);
        markerOperation(false);
        setCounter(counter+1);
        setQuestionOptions(getQuestionOptionsAndShuffle(retrivedAPIData[counter+1]));
      }else{
        if(marksDisplay.length!=20){
          markerOperation(false);
        }
      }
    },50);
  }
  return (
    <View className='b items-center'>
      <Text className='b text-white text-[20px] font-medium'>{remainingTime}s</Text>
    </View>
  );
};

  useEffect(()=>{
    GetQuizeQuestions();

  },[GetQuizeQuestions]);
  // console.log("length:",marksDisplay.length);
  // console.log("QuestionID:",QuestionsCategorySpecifier(title));
  console.log("error:",questionsRetrieveError);

  return (
    <>
    {(retrivedAPIData.length > 0) ? (
      <View
      style={styles.Container}
      className='b flex-1 bg-[#141933] px-5 pt-10 relative'
      >
          <View className='b flex-row items-center relative justify-between'>
            <Text className="b text-gray-500 text-[19px] mb-1 self-start">{title}</Text>
            <>
              {(marksDisplay.length ==20 ) ? 
                (
                  <Text>''</Text>
                ) : (
                  <View className='items-center justify-center relative'>
                    <CountdownCircleTimer
                     key={key}
                     isPlaying
                     duration={20}
                     colors={["#004777", "#F7B801","#A30000"]}
                     size={50}
                     colorsTime={[14,7,0]}
                     isGrowing={true}
                     rotation='counterclockwise'
                     strokeWidth={5}
                     trailColor={'#05d3f6'}
                     onComplete={(totalElapsedTime: number)=>{
                      console.log(totalElapsedTime);
                     }}
                    > 
                    { remainTimer }
                    </CountdownCircleTimer>                     
                  </View>
                )
              }
            </> 
          </View>
        <View>
          <Text><Text className='b text-[20px] text-white font-medium '>Question {counter + 1 < 10 ? `0${counter + 1}`:counter + 1}</Text> <Text className='b text-[18px] text-gray-500 font-medium'>/20</Text></Text>
          <View className={`b mb-4 flex-row mt-3 justify-around`}>
            {
              track.map((value,index)=>{
                return <QuestionMarker questionstotal={20} status={value} key={index} data={marksDisplay} elementIndex={index}/>
              })
            }
          </View>
        </View>
        <View className=' mt-3'>
            <Text className='b text-[22px] text-white w-full text-justify'>
              {decodeURIComponent(retrivedAPIData[counter].question)}
            </Text>
            <View className='b mt-6'>
              {
                questionOptions.map((value,_index)=>
                  <QuestionBox 
                    answer={value}
                    key={_index}
                    disableBtn={disableBtn}
                    setDisableBtn={setDisableBtn}
                    retrivedAPIData={retrivedAPIData[counter]}
                    setCounter={setCounter}
                    counter={counter}
                    getQuestionOptionsAndShuffle={getQuestionOptionsAndShuffle}
                    setQuestionOptions={setQuestionOptions}
                    allData={retrivedAPIData}
                    markerOperation={markerOperation} 
                    setKey={setKey}                                  
                  />
                )
              }
            </View>
        </View>
        <View className={'b flex-row justify-between absolute bottom-10 w-full self-center'}>
          <ButtonComponent 
            iconName={'power-off'}
            text={'Quit Quiz'}
            operation={((args:String)=>console.log(args))}
            bg_Color={''}
            iconColor={'#8c8c8c'} 
            iconSize={16}
          />
          <ButtonComponent 
            iconName={''}
            text={marksDisplay.length!=20?'Skip':'Show Results'}
            operation={HandleOnPressedNext}
            bg_Color={`#05d3f6`}
            iconColor={''} 
            iconSize={0}
          />
        </View>

      </View>
    ):(
      <View className='b flex-1 bg-[#141933] justify-center items-center'>
        <ActivityIndicator color={'#05d3f6'} size={35}/>
      </View>
    ) }
    </>
  );
}

export default QuestionsScreen;

const styles = StyleSheet.create({
  Container:{
    height:DimensionReducer(height),
    width:DimensionReducer(width),
  },
});