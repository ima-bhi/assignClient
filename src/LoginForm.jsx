import CommonComponent from "./CommonComponent";

const LoginForm = () => {
   const fields = [
    {label:"Name",name:'name',type:'text',required:true},
    {label:"Email",name:'email',type:'email',required:false},
    {label:"Phone Number",name:'number',type:'number',required:true}
   ]
    return (
        <>
          <CommonComponent fields={fields} /> 
        </>
    )
}
export default LoginForm;