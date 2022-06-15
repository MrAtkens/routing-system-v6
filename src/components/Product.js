import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import productStore from "../data/stores/productStore";


export const Product = observer(() => {
    //to get id
    const params = useParams();
    const location = useLocation();
    //get params
    let [searchParams, setSearchParams] = useSearchParams();

    let name = searchParams.get("name");
    console.log(params)
    console.log(searchParams)
    console.log(location)

    const handleClick = () => {
        productStore.setLastName("Bob")
    }

    return(
        <>
            {productStore.showName}
            {productStore.products.map(item => (
                <div>
                    {item.name} : {item.price}
                </div>
            ))}
            <h1>{params.id} : {name}</h1>
            <button onClick={handleClick}>Change to BOB</button>
        </>
    )
});