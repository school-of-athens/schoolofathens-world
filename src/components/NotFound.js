import draft from "../assets/images/draft.jpg";

export default function() {
    return (
        <>
            <img src={draft} style={{width: "100vw"}} />

            <div className="pnf">
                <h1 style={{marginBottom: "2vh", marginTop: "3vh"}}>404: Page Not Found</h1>
                <p>The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
            </div>
        </>
    );
}