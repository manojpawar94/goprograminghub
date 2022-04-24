export default function SectionHeader({ title, margin }) {
    return <div className="row">
        <div className={`col-sm-12 ${margin}`}>
            <h3>{title}</h3>
        </div>
    </div>
}