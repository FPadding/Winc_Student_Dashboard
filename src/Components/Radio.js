const Radio = ({ value, checked, text }) => (
    <label>
        <input
            type="radio"
            name="shownRatings"
            value={value}
            checked={checked}
        />{text}
    </label>
)

export default Radio