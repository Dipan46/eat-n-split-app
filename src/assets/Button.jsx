function Button({ children, handleClickAdd }) {
    return (
        <button className="button" onClick={handleClickAdd}>
            {children}
        </button>
    );
}

export default Button;