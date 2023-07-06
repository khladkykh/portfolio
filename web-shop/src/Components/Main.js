import React, {useContext} from "react";
import { Context } from "../Context";

import Image from "./Image"

function Main() {

    const{allData} = useContext(Context)
    const photos = allData.map(photo =>(
        <Image 
        key={photo.id} 
        url={photo.url} 
        id={photo.id} 
        isFavorite={photo.isFavorite} 
        price={photo.price} 
        name={photo.name}
        />
    ))
    return(
        <main>
            <div className="main-header">
                <h1>The Best Photos Ever</h1>
                <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                <button>Read more</button>
            </div>
            <div className="image-container">
                {photos}
            </div>
        </main>
    )
}

export default Main