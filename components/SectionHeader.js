export default function SectionHeader({ title, margin, link }) {
    return (
        <div className="row mt-2 mb-2">
            <a className="nav-link" href={link}>
                <div className={`col-sm-12 ${margin}`}>
                    <h3>{title}</h3>
                </div>
            </a>
        </div>
    );
}
