import { FC } from 'react';

import { WrenchIcon } from 'lucide-react';

interface ErrorComponentProps {
  error?: ErrorMessage;
}

export const ErrorComponent: FC<ErrorComponentProps> = ({ error }) => {
  return (
    <div className="mx-auto flex max-w-md flex-col  items-center space-y-4 rounded p-8 text-center">
      <WrenchIcon className="h-12 w-12 text-primary" />
      <h1 className="text-2xl font-bold">{error?.title}</h1>
      <h2 className="text-lg text-gray-700 dark:text-primary-foreground">
        {error?.message}
      </h2>
      <p className="text-sm text-gray-700 dark:text-primary-foreground">
        {error?.resolution}
      </p>
    </div>
  );
};
