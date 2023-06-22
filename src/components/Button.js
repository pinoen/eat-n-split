export const Button = ({ children, handleShow }) => {
  return (
    <button onClick={handleShow} className='button'>{children}</button>
  );
};
