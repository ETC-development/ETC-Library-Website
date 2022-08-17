import "./Main.css";
import SemesterCard from "./SemesterCard";
import cardsInfo from "utils/modules";

const Main: React.FunctionComponent = () => {
    return (

        <div className={"my-32"}>
        {
            cardsInfo.map(card => {
                return (
                    <div className={"page w-full my-16 flex justify-center items-center"}>
                        <div className="card mx-2 h-fit w-200 font-sans text-dark-bg">
                            <div className="cardTitle w-full py-4 bg-dark-bg rounded-t-3xl flex justify-center items-center mb-4">
                                <h2 className=" text-xl text-light-text ">{card.title}</h2>
                            </div>

                            <div
                                className="cardMainContent w-full py-8 px-3 text-dark-text shadow-xl w-full flex flex-wrap gap-4 justify-around items-center rounded-b-xl bg-white ">

                                {
                                    card.semesters.map(semester => {
                                        return (
                                            <SemesterCard semester={semester}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    );
};

export default Main;