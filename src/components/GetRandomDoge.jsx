import { useState, useEffect } from "react";

const GetRandomDoge = () => {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchDoge(){
        try{

            setLoading(true);
            setError(null);

            // retrieve the image from the API

            const data = await fetch("https://dog.ceo/api/breeds/image/random");

            if (!data.ok){
                throw new Error("Failed to fetch doge image");
            }

            const awaitedJson = await data.json();

            setImage(awaitedJson.message);

        } catch(error){
            setError(error.message);
  
        } finally{
            setLoading(false);
    
    }
}
    useEffect(() => {
        fetchDoge();
    }, []);

    return (
        <div>
            <div>
                <button onClick={fetchDoge}>Get a Random Dog!</button>
            </div>
            <br></br>
            <div>
                <img src={image}
                style={{
                    width: 'auto',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                }}/>
            </div>
        </div>
    )
};

export default GetRandomDoge;