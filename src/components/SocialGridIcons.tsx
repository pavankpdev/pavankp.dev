import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai/index";
import { FaPenNib, FaGithub } from "react-icons/fa/index";
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
    {
      handle: "GitHub",
      url: "https://github.com/pavankpdev",
      Icon: FaGithub,
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
        <a 
        className="icon__item view__resume__btn"
         href={`https://pavan-public.s3.ap-south-1.amazonaws.com/Pavan's+Resume.pdf`} 
         target="_blank"
         >
            View Resume
        </a>
      </div>
    </>
  );
};

export default SocialIconsDeck;
