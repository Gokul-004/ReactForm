import Egg from "./Egg";
const Hen=(name)=>{
    return (
        <>
        <h1>Hen </h1>
        <Egg name={name.name}/>
        </>
    )
}
export default Hen;