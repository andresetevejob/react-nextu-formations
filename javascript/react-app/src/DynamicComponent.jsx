import PropTypes from 'prop-types'

function Video(){
    return (
        <h1>Video</h1>
    )
}
function Photo(){
    return(
        <h1>
            Photo
        </h1>
    )
}
const components = {
    "photo": Photo,
    "video": Video,
};
StoryType.propTypes = {
    storyType : PropTypes.string
}
function StoryType(props){
   const SpecificStory = components[props.storyType]
   return <SpecificStory/>
}

function AppDynamic(){
    return (
        <StoryType storyType="video"/>
    )
}
export default AppDynamic