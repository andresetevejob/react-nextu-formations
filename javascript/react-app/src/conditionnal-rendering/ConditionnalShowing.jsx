import PropTypes from 'prop-types'

Greeting.propTypes = {
    isUserLoggedIn : PropTypes.bool
}
function Greeting(props){
    return (
        <div>
            {
                props.isUserLoggedIn?(<h1>Authorized</h1>):(<h1>UnAuthorized</h1>)
            }
        </div>
    )
}
function AppCondShow(){
    return <Greeting isUserLoggedIn={true}/>
}
export default AppCondShow