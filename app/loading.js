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
        backgroundColor: "black",
        zIndex: "10000",
      }}
    >
      <div class="spinner">
        <div class="spinner1"></div>
      </div>
    </div>
  );
}
