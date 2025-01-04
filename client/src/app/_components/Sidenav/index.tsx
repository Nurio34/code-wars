import LinkComponent from "./Link";

export default function SideNav() {
  const links = [
    {
      name: "chat",
      to: "/chat",
      label: "chat",
    },
    {
      name: "discuss-image",
      to: "/discuss-image",
      label: "discuss image",
    },
    {
      name: "stream-chat",
      to: "/stream-chat",
      label: "stream chat",
    },
  ];

  return (
    <nav className="row-start-2  py-[1vh] px-[1vw] shadow-lg">
      <ul className="grid gap-y-[0.5vh]">
        {links.map((link) => (
          <li key={link.name}>
            <LinkComponent link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
