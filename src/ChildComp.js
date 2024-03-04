function SherOshayari({ line1, line2, shayar, image }) {
  return (
    <div style={{ border: "3px solid green", height: "270px", width: "550px" }}>
      <h2>Mehfil-E-Shayari</h2>
      <img style={{ height: "50px", width: "50px" }} src={image} /> <br></br>
      Nazm :
      <p
        style={{
          backgroundColor: "aqua",
          height: "50px",
          width: "500px",

          color: "brown",
          fontSize: "20px",
          padding: "5px",
        }}
      >
        {line1} <br></br>
        {line2}
      </p>
      Shayar : <i>{shayar}</i>
    </div>
  );
}
export default SherOshayari;
