const FilterListItem = ({ checked, student }) => (
    <label className="filterlistitem">
        <input
            type="checkbox"
            checked={checked}
            name={student}
        />
        {student}
    </label>
)
export default FilterListItem