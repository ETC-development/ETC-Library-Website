import "./Main.css";
import SemesterCard from "./SemesterCard";
import cardsInfo from "@/utils/modules";
import Search from "./Search/Search.index";
import TitleSubtitle from "./TitleSubtitle";
import { Semester } from "@/interfaces/interfaces.index";

const Main = () => {
    return (
        <>
            <main id={"main"} className={"my-32 scroll-mt-24 px-2"}>
                <Search />
                <TitleSubtitle
                    title={"Collections of Documents"}
                    subtitle={"Organized Google Drive folders of all modules across semesters"}
                />
                {cardsInfo.map((card) => {
                    return (
                        <section
                            id={card.dropDownValue}
                            key={card.title}
                            className={
                                "page w-full mb-16 flex justify-center items-center scroll-mt-20"
                            }
                        >
                            <div className="card mx-2 h-fit w-200 font-sans text-dark-bg">
                                <div className="cardTitle w-full py-4 bg-dark-bg rounded-t-3xl flex justify-center items-center mb-2.5">
                                    <h2 className="font-medium text-base md:text-[1.2rem] text-light-text ">
                                        {card.title}
                                    </h2>
                                </div>

                                <div className="cardMainContent w-full py-5 px-3 text-dark-text shadow-md flex flex-wrap justify-around items-stretch rounded-b-xl bg-white ">
                                    {card.semesters.map((semester: Semester, i: number) => {
                                        return <SemesterCard key={i} semester={semester} />;
                                    })}
                                </div>
                            </div>
                        </section>
                    );
                })}
            </main>
        </>
    );
};

export default Main;
