type AvatarProps = {
  classCSS: string;
};

export default function Avatar({ classCSS }: AvatarProps) {
  return (
    <figure className={classCSS}>
      <img
        src="/Avatar.jpg"
        className="avatar-content"
        alt="avatar"
        draggable={false}
      />
    </figure>
  );
}
