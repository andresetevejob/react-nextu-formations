import { useForm } from 'react-hook-form'

function AppFormHook(){
    const {
        register,
        handleSubmit
    } = useForm()
    const onSubmit = (data)=>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("oo")}/>
            <input defaultValue="test" {...register("lastName")}/>
            <input type="submit"/>
        </form>
    )
}
export default AppFormHook