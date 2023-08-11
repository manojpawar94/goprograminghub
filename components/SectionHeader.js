export default function SectionHeader({ title, margin, link }) {
    return (
        <div className="row mt-4 mb-3">
            <a className="nav-link" href={link}>
                <div className={`col-sm-12 ${margin}`}>
                    <h3>{title}</h3>
                </div>
            </a>
        </div>
    );
}
