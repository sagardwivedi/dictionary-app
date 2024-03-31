export const ErrorComponent = ({ error }: { error?: ErrorMessage }) => {
  return (
    <div>
      <h1>{error?.title}</h1>
      <h2>{error?.message}</h2>
      <p>{error?.resolution}</p>
    </div>
  );
};
