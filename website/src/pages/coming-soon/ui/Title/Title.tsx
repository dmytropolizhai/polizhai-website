import './title.css'

type TitleProps = {
    title: string
};

const Title = ({ title }: TitleProps) => {
    return (
        <div className="title__container">
            <h1 className="title__text">{title}</h1>
        </div>
    )
}

export default Title;