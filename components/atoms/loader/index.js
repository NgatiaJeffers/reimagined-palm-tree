import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loader = () => (
  <div className="loader">
    <div className="loader-background">
        <BeatLoader color="#fff" css={override} size={25} />
    </div>
  </div>
);

export default Loader;