import Button from "./Button"
import Comment from "./Comment"
import { interestingTrees } from "./Example"
export default function TreeCArd(props) {
    return (
        <div id="tree-card">
            <h1>{props.treeName}</h1>
            <img src={props.imgLink} alt=""></img>
            <p>{props.location}</p>
            <Button />
            <Comment />
        </div>
    )
}