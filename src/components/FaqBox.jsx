import FaqSvg from "../IconComponents/FaqSvg";
import FaqBoxData from "./FaqBoxData";
   

    function FaqBox(){

        return (
            <>
            {FaqBoxData.map((value,index) => (
            <div className="mb-12 flex lg:mb-[70px]" key={index}>
            <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
           <FaqSvg/>
            </div>
            <div className="w-full">
            <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                {value.title}
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
            {value.description}
            </p>
            </div>
        </div>
                
            ))};
            </>
        );
    

    }
    
export default FaqBox;