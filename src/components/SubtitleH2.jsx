
function SubtitleH2({text,color,fontSize}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{ backgroundColor: `${color}`, width: "10px", height: "40px" }}
        ></div>
        <h2 style={{ fontSize: `${fontSize}px`, fontFamily: "Poppins" }}>{text}</h2>
      </div>
  )
}

export default SubtitleH2
