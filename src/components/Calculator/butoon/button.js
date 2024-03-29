import {ACTIONS} from "../Calculator";

export default function DigitButton({dispatch,digit}){
    return <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT,payload: {digit}})} className="calculator__number">{digit}</button>
}