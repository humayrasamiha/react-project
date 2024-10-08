import CardSvg1 from "../IconComponents/CardSvg1";
import CardSvg2 from "../IconComponents/CardSvg2";
import CardData from "./CardData";
   

    function Card(){

        return (
            <>
            {CardData.map((value,index) => (
            <div className="p-4 bg-white rounded-lg border border-gray-600/10" key={index}>
            <img
                src={value.img}
                alt="property"
            />
            <div className="p-6">
                <h4 className="text-2xl font-bold cursor-pointer">
                {value.title}
                </h4>
                {/* <div>
                2 beds &bull; 2 baths
            </div> */}
                <div className="mt-2">
                <span className="text-xl font-extrabold text-blue-600">
                    ${value.price}
                </span>{" "}
                /M
                </div>
            </div>
            <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                <div className="flex items-center">
                <CardSvg1 />
                <p>
                    <span className="font-bold text-gray-900">{value.bedrooms}</span> Bedrooms
                </p>
                </div>
                <div className="flex items-center">
                <CardSvg2 />
                <p>
                    <span className="font-bold text-gray-900">{value.bathrooms}</span> Bathrooms
                </p>
                </div>
            </div>
            </div>
                
            ))};
            </>
        );
    

    }
    
export default Card;