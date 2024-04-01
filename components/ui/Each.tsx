import { Fragment } from 'react';

/**
 * Props for the Each component.
 */
interface EachProps<T> {
  /** The array of items to render. */
  of?: T[];
  /** A function that takes an item from the array and returns its rendering. */
  render: (item: T, index: number) => React.ReactNode;
}

/**
 * A component for rendering each item in an array.
 * @param {EachProps} props - The props for the Each component.
 * @returns {JSX.Element} The rendered JSX.
 */
export const Each = <T,>({ of, render }: EachProps<T>): JSX.Element | null => {
  if (!of || of.length === 0) return null;

  return (
    <>
      {of.map((item, index) => (
        <Fragment key={index}>{render(item, index)}</Fragment>
      ))}
    </>
  );
};
