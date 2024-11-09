type mdelPropType = {
  children: React.ReactNode;
  isModelOpen: boolean;
  setModelOpen: any;
};

import "./modelStyle.css";

export default function Model({
  children,
  isModelOpen,
  setModelOpen,
}: mdelPropType) {
  const handleModelChange = (e: any) => {
    if (e.target.className === "model") {
      setModelOpen(false);
    }
  };
  return (
    <div
      style={{ display: isModelOpen ? "flex" : "none" }}
      onClick={handleModelChange}
      className="model"
    >
      <div>{children}</div>
    </div>
  );
}
