
export interface InputField{
    label: string;
    type: string;
    name:string;
 }

 const InputFieldUsingProps : React.FC <InputField>= (props) =>{
    if (props.type === "button")
    return(
<div>
    <button type="button" name={props.name} value={props.label}> {props.label}</button>
    </div>);
    

    return(
    
    <div>
        {props.label} : { (props.type ==="text") &&  <input type = "text" name={props.name}></input>}
         { (props.type ==="select") && <select name={props.name}> <option value="two">2</option> <option value="nottwo">not 2</option> </select>}
         { (props.type ==="textarea") && <textarea name={props.name}/>}
        
    </div>
    

)
 }


 export default InputFieldUsingProps; 