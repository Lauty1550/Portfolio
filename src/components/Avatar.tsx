type AvatarProps = {
  classCSS: string;
};

export default function Avatar({ classCSS }: AvatarProps) {
  return (
    <figure className={classCSS}>
      <img src="/Avatar.png" className="avatar-content" alt="avatar" />
    </figure>
  );
}
