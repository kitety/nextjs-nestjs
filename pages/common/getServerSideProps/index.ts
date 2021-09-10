import { GetServerSideProps } from "next";
import { getCookie } from "../../../utils/getCookie";
import { getUserByJwt } from "../../api/api";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const jwt = getCookie("jwt", req);
  const data = await getUserByJwt({ jwt });
  return {
    props: {
      data,
    },
  };
};
