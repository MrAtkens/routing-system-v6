import { observer } from "mobx-react-lite";
import productStore from "../data/stores/productStore";


export const User = observer(() => {

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
            <button onClick={handleClick}>Change to BOB</button>
        </>
    )
});