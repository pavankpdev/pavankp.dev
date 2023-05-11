import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaPenNib } from "react-icons/fa";
import "../styles/social.scss";

const SocialIconsDeck = () => {
  const socials = [
    {
      handle: "Twitter",
      url: "https://twitter.com/pavank38/",
      Icon: AiOutlineTwitter,
    },
    {
      handle: "LinkedIn",
      url: "https://www.linkedin.com/in/pavan-kumar-20b186181/",
      Icon: AiFillLinkedin,
    },
    {
      handle: "Blogs",
      url: "https://blogs.pavankp.dev/",
      Icon: FaPenNib,
    },
  ];

  return (
    <>
      <div className={"icon__container"}>
        {socials.map(({ Icon, ...rest }) => {
          return (
            <a className="icon__item" href={rest.url} target="_blank">
              <Icon />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SocialIconsDeck;
