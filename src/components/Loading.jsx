import { useState } from "react";

export function Loading() {
  const Loading = ({ message = "Loading..." }) => {
    return (
      <section>
        <div className="flex flex-col items-center justify-center py-20">
          <div className="border-light-page-secondary border-t-text-primary h-12 w-12 animate-spin rounded-full border-4">
            <p className="text-light-page-secondary mt-4 text-lg">{message}</p>
          </div>
        </div>
      </section>
    );
  };
}
