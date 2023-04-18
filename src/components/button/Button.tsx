/* eslint-disable react/no-unknown-property */
import className from "classnames";

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  return (
    <div className="px-2 py-2 mx-2 my-5 text-gray-100 opacity-60 bg-gray-600 rounded-lg border border-transparent">
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-purple-700;
          }

          .btn-primary:hover {
            @apply bg-purple-900;
          }
        `}
      </style>
    </div>
  );
};

export { Button };