import React from "react";

interface LoadingErrorProps {
  // isLoading: boolean;
  isError: boolean;
}

const LoadingError: React.FC<LoadingErrorProps> = ({isError }) => {
  if (isError) return <p className="text-center text-red-500">Error loading data</p>;
  return null;
};

export default LoadingError;
