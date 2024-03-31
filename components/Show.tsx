import { Children, isValidElement, type ReactNode } from 'react';

/**
 * Props for the Show component.
 */
interface ShowProps {
  children: ReactNode;
}

/**
 * Component to conditionally render its children based on a condition.
 * @param children - ReactNode to be conditionally rendered.
 * @returns ReactNode - The rendered component.
 */
export function Show({ children }: ShowProps): ReactNode {
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const { isTrue } = child.props;
      if (isTrue === undefined) {
        otherwise = child;
      } else if (!when && isTrue) {
        when = child;
      }
    }
  });

  return when || otherwise;
}

Show.displayName = 'Show';

/**
 * Props for the ShowWhen component.
 */
interface ShowWhenProps {
  isTrue: boolean;
  children: ReactNode;
}

/**
 * Component to conditionally render its children when a condition is true.
 * @param isTrue - Condition to be evaluated.
 * @param children - ReactNode to be rendered if the condition is true.
 * @returns ReactNode | null - The rendered component or null.
 */
Show.When = ({ isTrue, children }: ShowWhenProps) => isTrue && children;

/**
 * Props for the ShowElse component.
 */
interface ShowElseProps {
  children?: ReactNode;
  render?: ReactNode;
}

/**
 * Component to render its children or a specified render prop if provided.
 * @param children - ReactNode to be rendered.
 * @param render - Alternative ReactNode to be rendered if provided.
 * @returns ReactNode - The rendered component.
 */
Show.Else = ({ children, render }: ShowElseProps) => render || children;
