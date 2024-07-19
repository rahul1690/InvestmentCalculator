export default function Input({ id, type, labelName, onChangeHandler }){

    return (
        <div>
        <label htmlFor={id}>{labelName}</label>
        <input onChange={onChangeHandler} type={type} id={id} />
        </div>
    );
}