import OpenAI from 'openai';
 import {OPENAI_KEY} from "./constants";
import { USER_API_KEY } from './constants';

const openAi = new OpenAI({
  apiKey: USER_API_KEY,dangerouslyAllowBrowser: true // This is the default and can be omitted
});
export default openAi;