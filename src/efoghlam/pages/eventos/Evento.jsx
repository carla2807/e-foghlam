export const Evento = ({ event}) => {
  const { title, user } = event;
  //console.log(props);
  return (
    <>
      <strong>{title}</strong>
      {/* <strong>- {user.name}</strong> */}
    </>
  );
};
