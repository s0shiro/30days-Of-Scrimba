import clsx from "clsx";
import { IoPersonSharp } from "react-icons/io5";

type AvatarProps = {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
};

const Avatar = ({ src, alt, children }: AvatarProps) => {
  const avatarClass = clsx("avatar", {
    "avatar-letter": !src,
    "avatar-icon": !src && !children,
  });

  // Randomize background color for non-image avatars
  const colorClasses = ["navy", "pink", "red", "blue", "green"];
  const randomColorClass =
    colorClasses[Math.floor(Math.random() * colorClasses.length)];

  return (
    <>
      <div className={clsx(avatarClass, { [randomColorClass]: !src })}>
        {src ? <img src={src} alt={alt} /> : children || <IoPersonSharp />}
      </div>
    </>
  );
};

export default Avatar;
