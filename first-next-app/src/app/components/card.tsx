export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "100px",
        margin: "10px",
        border: "1px solid #ddd",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "7px",
      }}
    >
      {children}
    </div>
  );
}
