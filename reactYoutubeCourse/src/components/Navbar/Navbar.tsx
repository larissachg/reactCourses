interface NavbarProps {
  cartItemsCount: number;
}
export const Navbar = ({ cartItemsCount }: NavbarProps) => {
  return <div>Navbar:{cartItemsCount}</div>;
};
