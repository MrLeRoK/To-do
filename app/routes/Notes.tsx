import {useParams} from "react-router";

function Notes() {
    const {id} = useParams()
    return <div> Notes {id} </div>
}
export default Notes
