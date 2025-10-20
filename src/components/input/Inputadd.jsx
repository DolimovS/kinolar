import "./Inputadd.css";

const CustomInput = ({ type = "", placeholder = "", label = "", value, onChange }) => {
    return (
        <div className="input-group ">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input-text"
                />
                {label && <label className="input-text-label">{label}</label>}
        </div>
    );
};

export default CustomInput;
