import { HeaderLinks } from "./HeaderLinks";

export const HeaderBottomSheet = () => {
  return (
    <div className="s:hidden fixed bottom-0 block w-full bg-white px-4 py-2">
      <HeaderLinks />
    </div>
  );
};
