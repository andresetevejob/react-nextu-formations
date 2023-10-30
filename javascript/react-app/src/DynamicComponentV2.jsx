function Photo(){
    return (<h1>
        Photo
        </h1>)
}
function Video(){
    return <h1>Video</h1>
}
const components = {
    photo: Photo,
    video: Video
}
function StoryType(props){
    const SpecificCompo = components[props.storyType]
    return <SpecificCompo/>
}

function AppDv2(){
    return <StoryType storyType="photo"/>
}
export default AppDv2