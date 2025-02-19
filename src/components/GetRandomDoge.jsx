import { useState } from "react";

const GetRandomDoge = () => {
    const [image, setImage] = useState("");

    async function fetchDoge(){
        const data = await fetch("https://dog.ceo/api/breeds/image/random");

        const awaitedJson = await data.json();

        setImage(awaitedJson.message);

    }

    return (
        <div>
            <div>
                <button onClick={fetchDoge}>Get a Random Dog!</button>
            </div>
            <br></br>
            <div>
                <img src={image}/>
            </div>
        </div>
    )
};

export default GetRandomDoge;