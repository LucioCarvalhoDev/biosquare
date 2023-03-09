function Sector(props: { x: number; y: number; children: number }) {
  return (
    <div onClick={() => console.log(props.x, props.y)} className="sector">
      {props.children}
    </div>
  );
}

export default Sector;
