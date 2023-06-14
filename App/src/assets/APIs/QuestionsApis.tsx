/* eslint-disable prettier/prettier */


interface APIContainer{
 GetQuestions(_questionID:number,_difficultLevel:string):Promise<void>;


};


function APICollector():APIContainer{
    const GetQuestions=async(_questionID:number,_difficultLevel:string)=>{
        const QuestionsAPI_URL=`https://opentdb.com/api.php?amount=20&category=${_questionID}&difficulty=${_difficultLevel}&type=multiple&encode=url3986`;
        const response=await fetch(QuestionsAPI_URL);
        const data=await response.json();
        return data.results;
    };

    return {
        GetQuestions,
    };
}


export default APICollector;


