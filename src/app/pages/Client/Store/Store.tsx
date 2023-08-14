import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Store = () => {
    const [storeName, setStoreName] = useState<string>("");
    const { name } = useParams();
      
    useEffect(() => {
      if(!!name) setStoreName(name);
    }, [name]);

    return(
        <h1>{storeName}</h1>
    );
};

export default Store;