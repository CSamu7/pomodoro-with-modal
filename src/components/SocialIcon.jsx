export default function SocialIcon(props) {
  let { name, src } = props;

  return <img src={src} alt={name} />;
}
