import "./Main.css";
import SemesterCard from "./SemesterCard";
import cardsInfo from "utils/modules";
import SearchBar from "./Search/SearchBar";
import Search from "./Search/Search.index";

const Main: React.FunctionComponent = () => {
    return (
        <>
            <div id={"main"} className={"my-32"}>
                <h1 className="text-3xl lg:text-4xl py-12 text-center text-dark-text-text tracking-widest font-semibold">
                    Resources
                </h1>
            <Search/>
                {cardsInfo.map((card) => {
                    return (
                        <div key={card.title} className={"page w-full my-16 flex justify-center items-center"}>
                            <div className="card mx-2 h-fit w-200 font-sans text-dark-bg">
                                <div className="cardTitle w-full py-4 bg-dark-bg rounded-t-3xl flex justify-center items-center mb-4">
                                    <h2 className=" text-xl text-light-text ">{card.title}</h2>
                                </div>

                                <div className="cardMainContent w-full py-8 px-3 text-dark-text shadow-xl flex flex-wrap gap-4 justify-around items-center rounded-b-xl bg-white ">
                                    {card.semesters.map((semester, i) => {
                                        return <SemesterCard key={i} semester={semester} />;
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Main;
