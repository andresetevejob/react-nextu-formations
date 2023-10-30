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
            <input defaultValue="test" {...register("example")}/>
            <input type="submit"/>
        </form>
    )
}
export default AppFormHook