import { Html } from "@react-three/drei";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <Html>
      <Circles
        visible={true}
        height="60"
        width="60"
        color="#00c6ff"
        radius="9"
        ariaLabel="circles-loading"
      />
    </Html>
  );
};

export default Loader;
