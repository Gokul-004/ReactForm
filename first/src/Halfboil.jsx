import Stomach from "./Stomach";
const Halfboil = (props) =>{
    return (
        <>
        <h1>Halfboil : {props.name}</h1>
        <Stomach name={props.name}/>
        </>
    )
}
export default Halfboil;