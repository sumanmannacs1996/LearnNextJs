import { Metadata } from "next";

export const metadata: Metadata = {
  title: "docs",
};
type paramsType = {
  params: {
    slug: string[];
  };
};
export default function Docs({ params }: paramsType) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing Docs for Feature <b>{params.slug[0]}</b> and Concept{" "}
        <b>{params.slug[1]}</b>
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return (
      <h1>
        Viewing Docs for Feature <b>{params.slug[0]}</b>
      </h1>
    );
  }
  return <h1>This is Docs home page.</h1>;
}
