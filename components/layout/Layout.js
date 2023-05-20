import Header from "./header";
import NavBar from "./navbar";

export default function Layout(props) {
  return (
    <div className="flex flex-col h-screen">
      <Header className="sticky top-0" />
      <NavBar className="sticky top-0" />
      <div className="flex-1 overflow-auto">{props.children}</div>
    </div>
  );
}
