import { IQuestion } from '../models/question';

export interface QuestionnareRes {
    data: {
        content: IQuestion[],
    }

}