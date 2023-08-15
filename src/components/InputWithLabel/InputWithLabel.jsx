export const InputWithLabel = ({label, value, type, name, placeholder}) => (
    <>
        <label htmlFor={name}>{label}</label>
        <input type={type} value={value} name={name} placeholder={placeholder} />
    </>
);
