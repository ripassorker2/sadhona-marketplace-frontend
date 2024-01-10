import Container from "@/utils/Container";
import {FaArrowRight} from "react-icons/fa6";

const Talent = () => {
    return (
        <div className="dark:bg-primary2 dark:py-16">
            <Container>
                <div>
                    <h2 className="heading  ">
                        Find <span>talent</span> your way
                    </h2>
                    <p className="desc text-center">
                        Work with the largest network of independent
                        professionals and get things done—from quick <br />{" "}
                        turnarounds to big transformations.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:mt-16 mt-10">
                    <div className="group">
                        <div className="bg-green text-darkText  px-8 py-8 rounded-md group-hover:bg-white hover:shadow-md duration-300 hover:text-whiteText">
                            <h2 className="md:text-3xl text-xl font-semibold pb-2 group-hover:text-green duration-300">
                                Post a job and hire a pro.
                            </h2>
                            <p className="text-lg inline-flex items-center group-hover:text-green duration-300">
                                Talent Markerplace. <FaArrowRight />
                            </p>
                        </div>
                    </div>{" "}
                    <div className="group">
                        <div className="bg-green text-darkText  px-8 py-8 rounded-md group-hover:bg-white hover:shadow-md duration-300 hover:text-whiteText">
                            <h2 className="md:text-3xl text-xl font-semibold pb-2 group-hover:text-green duration-300">
                                Browse and buy projets.
                            </h2>
                            <p className="text-lg inline-flex items-center group-hover:text-green duration-300">
                                Project Catalogs. <FaArrowRight />
                            </p>
                        </div>{" "}
                    </div>
                    <div className="group">
                        <div className="bg-green text-darkText  px-8 py-8 rounded-md group-hover:bg-white hover:shadow-md duration-300 hover:text-whiteText">
                            <h2 className="md:text-3xl text-xl font-semibold pb-2 group-hover:text-green duration-300">
                                Get advice fron an Industry expart.
                            </h2>
                            <p className="text-lg inline-flex items-center group-hover:text-green duration-300">
                                Consulations. <FaArrowRight />
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Talent;
