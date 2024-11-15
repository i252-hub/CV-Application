
const AddButton = ({ onAdd }) => {
    return (
        <div className="btN">
        <button type="button" className= 'bttn' onClick={onAdd}>
            Add Experience
        </button>
        </div>
       
    );
};

export default AddButton;
