import { InputWithLabel } from "../InputWithLabel/InputWithLabel";
import { actionURL, loginENDPOINT } from "../../services/loginService";

export const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);

        try {
            let response = await fetch(actionURL+loginENDPOINT, 
                {method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({username:e.target[0].value, password:e.target[1].value,})
            }
            );
            let jsonData = await response.json();
            
            localStorage.setItem("token", jsonData.access_token);
            
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel placeholder="email@example.com" type="text" name="username" />
            <InputWithLabel placeholder="password" type="password" name="password" />
            <button type="submit">Submit</button>
        </form>
    )
};
