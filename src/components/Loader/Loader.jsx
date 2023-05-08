import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <ThreeDots
        height="80"
        width="100"
        radius="9"
        color="#e85b0f"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};
