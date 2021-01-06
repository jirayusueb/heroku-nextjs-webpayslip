import React, { ReactElement } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
