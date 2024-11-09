import React from "react";

type LayoutPropsType = {
  children: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
};
export default function DashboardLayout({
  children,
  user,
  revenue,
  notification,
  login,
}: LayoutPropsType) {
  const isLogin = false;
  return (
    <>
      {isLogin ? (
        <>
          <div>{children}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>{user}</div>
              <div>{revenue}</div>
            </div>
            <div>{notification}</div>
          </div>
        </>
      ) : (
        <div>{login}</div>
      )}
    </>
  );
}
