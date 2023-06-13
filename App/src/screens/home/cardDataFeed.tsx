/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { science,language,mathematics,art,geography,history,politics,sports,computers} from "../../assets/images";

type questionCardModel={
    id:String,
    icon:String,
    text:String,
};

const cardDataFeed: questionCardModel[] = [
    {
        id: '01',
        icon:mathematics,
        text: 'Mathematics',
    },
    {
        id: '02',
        icon:science,
        text: 'Science & Nature',
    },
    {
        id: '03',
        icon:computers,
        text: 'Computers',
    },
    {
        id: '04',
        icon:art,
        text: 'Art & Design',
    },
    {
        id: '05',
        icon:geography,
        text: 'Geography',
    },
    {
        id: '06',
        icon:language,
        text: 'Language',
    },
    {
        id: '07',
        icon:sports,
        text: 'Sports',
    },
    {
        id: '08',
        icon:politics,
        text: 'Politics',
    },
    {
        id: '09',
        icon:history,
        text: 'History',
    },
];

export { cardDataFeed };    
export type { questionCardModel };

