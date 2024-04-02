import { Avatar } from "./componentesHeader/avatar";
import { Menu } from "./componentesHeader/menu";

export function Header() {
  return (
    <div style={{ zIndex: 1000 }}>
      <div className="flex p-4 bg-white w-full fixed top-0 justify-between items-center">
        <div className="ml-4">
          <Avatar />
        </div>
        <div className="mr-4">
          <Menu />
        </div>
      </div>
    </div>
  );
}
