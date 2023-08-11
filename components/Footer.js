import SocialMedia from "./SocialMedia";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="container text-center mt-3 mb-2 border-top">
            <div className="row">
                <div className="col-sm-12 pb-2 pt-4">
                    Copyright©️ {currentYear} - GOPROGRAMMINGHUB.COM
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <SocialMedia />
                </div>
            </div>
        </footer>
    );
}
