export default function Header(props) {
  let { title } = props;

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
