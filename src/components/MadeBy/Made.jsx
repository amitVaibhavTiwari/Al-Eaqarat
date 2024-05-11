import "./MadeBy.scss";
import { VscHeartFilled } from "react-icons/vsc";
import { IoMdBeer } from "react-icons/io";
const Made = () => {
  return (
    <div className="made-by">
      <p>
        Made with <VscHeartFilled className="mera-dil" /> and{" "}
        <IoMdBeer className="meri-beer" /> by{" "}
        <span className="cursor-pointer heavy-text td-underline">
          <a
            className="link"
            target="_blank"
            href="https://amitvaibhavtiwari.vercel.app"
            rel="noreferrer"
          >
            Avt
          </a>
        </span>
      </p>
    </div>
  );
};

export default Made;
