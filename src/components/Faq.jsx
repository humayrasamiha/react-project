import FaqLeftDot from "../IconComponents/FaqLeftDot";
import FaqRightDot from "../IconComponents/FaqRightDot";
import FaqBox from "./FaqBox";

export default function Faq(){
    return (
        <>
        {/* ====== FAQ Section Start */}
        <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
            <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[520px] text-center">
                    <span className="mb-2 block text-lg font-semibold text-primary">
                    FAQ
                    </span>
                    <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                    Any Questions? Look Here
                    </h2>
                    <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                    There are many variations of passages of Lorem Ipsum available but
                    the majority have suffered alteration in some form.
                    </p>
                </div>
                </div>
            </div>
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2">
                <FaqBox/>
                
                </div>
                <div className="w-full px-4 lg:w-1/2">
                <FaqBox/>
                </div>
            </div>
            </div>
            <div>
            <span className="absolute left-4 top-4 -z-[1]">
                <FaqLeftDot/>
            </span>
            <span className="absolute bottom-4 right-4 -z-[1]">
                <FaqRightDot/>
            </span>
            </div>
        </section>
        {/* ====== FAQ Section End */}
        </>

    );
}