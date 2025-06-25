import '../styles/welcome-page.css'

export const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <img
                className="welcome-page-background"
                src={require("../background-elements.png")}
                alt="background elements"
            />
            <div className="welcome-page-header">
                <p className="welcome-page-header__title">
                    “Make it run, make it right”
                </p>
            </div>
        </div>
    );

}