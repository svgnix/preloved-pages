import { Signin } from "ui";
import axios from "axios";

export default function Home() {
    return <div>
        <Signin onSelect={async (email, password) => {
            let res = await axios.post("/api/auth/signup", {
                email,
                password
            })
            localStorage.setItem("token", res.data.token);
        }} />
    </div>
}