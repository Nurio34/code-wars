import Logo from "./Logo";

export default function Header() {
  return (
    <header
      className="py-[1vh] px-[1vw] shadow-md col-span-full
        flex items-center justify-between
      "
      style={{ fontVariant: "small-caps" }}
    >
      <Logo />
    </header>
  );
}
