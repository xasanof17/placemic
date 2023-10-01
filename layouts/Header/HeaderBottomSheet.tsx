import { HeaderLinks } from "./HeaderLinks";

export const HeaderBottomSheet = () => {
  return (
    <div className="s:hidden fixed bottom-0 block w-full px-4 py-4">
      <HeaderLinks />
    </div>
  );
};
