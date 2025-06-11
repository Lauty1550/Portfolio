type AvatarProps = {
  classCSS: string;
};

export default function Avatar({ classCSS }: AvatarProps) {
  return (
    <figure className={classCSS}>
      <img src="/avatarAsa.png" className="avatar-content" alt="avatar" />
    </figure>
  );
}
