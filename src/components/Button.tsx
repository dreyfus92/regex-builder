export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-red-700 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50">
      {props.children}
    </button>
  );
};
