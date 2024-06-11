export default function Loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        left: "0",
        top: "0",
        backgroundColor: "var(--main-alt-color1)",
        zIndex: "",
      }}
    >
      <div className="spinner">
        <div className="spinner1"></div>
      </div>
    </div>
  );
}
