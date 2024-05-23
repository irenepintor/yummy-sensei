/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Item = ({ data }) => {
    return(
        <>
            <div className="p-6 shadow hover:shadow">
                <img src={data.image} alt={data.name} className=" w-60 rounded " />
                <div>
                    <h1>{data.name}</h1>
                    <h5>{data.category}</h5>
                </div>
                <Link to={`/item/${data.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ver producto
                    </button>
                </Link>
            </div>
        </>
    )
};
export default Item;