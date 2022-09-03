import { FunctionComponent, ReactNode } from "react";

interface TitleSubtitleProps {
    title: string;
    subtitle: ReactNode;
}

const TitleSubtitle: FunctionComponent<TitleSubtitleProps> = ({ subtitle, title }) => {
    return (
        <div className={"my-3"}>
            <h1 className="text-2xl md:text-3xl mt-16 text-center text-dark-text-text tracking-widestt">
                {title}
            </h1>
            <h2 className="text-md md:text-xl font-light p-2 text-center text-dark-text-text tracking-widestt">
                {subtitle}
            </h2>
        </div>
    );
};

export default TitleSubtitle;
