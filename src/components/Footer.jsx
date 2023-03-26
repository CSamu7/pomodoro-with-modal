export default function Footer(props) {
  let { description } = props;

  return (
    <footer>
      <p>{description}</p>
    </footer>
  );
}
