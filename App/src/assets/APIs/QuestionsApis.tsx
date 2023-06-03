/* eslint-disable prettier/prettier */
const QuestionsAPI_URL='https://opentdb.com/api.php?amount=20&category=17&difficulty=medium&type=multiple&encode=url3986';

interface APIContainer{
 GetQuestions():Promise<void>;


};


function APICollector():APIContainer{
    const GetQuestions=async()=>{
        const response=await fetch(QuestionsAPI_URL);
        const data=await response.json();
        return data.results;
    };

    return {
        GetQuestions,
    };
}


export default APICollector;


