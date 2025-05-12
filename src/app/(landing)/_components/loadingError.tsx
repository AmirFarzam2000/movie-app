import React from "react";
import LoadingSpinner from "src/app/_components/loadingSpinner";

interface LoadingErrorProps {
  isLoading: boolean;
  isError: boolean;
}

const LoadingError: React.FC<LoadingErrorProps> = ({ isLoading, isError }) => {
//   if (isLoading) return <p className="text-center"><LoadingSpinner/></p>;
  if (isError) return <p className="text-center text-red-500">Error loading data</p>;
  return null;
};

export default LoadingError;
