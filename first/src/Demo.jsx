import './Form.css';
import './Apple'
import Apple from './Apple';
function Demo(){
    

    return (
        <>
         
        <form > 
             
           <label for="name"> Name :</label> <input type="text" placeholder="Enter the Name" id="name"></input>
            Email : <input type="email" placeholder="Enter the email"></input>
            <button type="submit">Submit</button>
          
        </form>
        <Apple/>
        </>
    );
}

export default Demo;