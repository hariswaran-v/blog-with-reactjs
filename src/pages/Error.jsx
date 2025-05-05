import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText, data } = useRouteError();

  return (
    <div className="bg-red-500 max-w-xl mx-auto p-10 mt-20 text-white rounded">
      <h4 className="font-semibold">
        #{status} Oops! {statusText}
      </h4>
      <p>
        {data}{" "}
        <Link to={"/"} className="underline">
          Go to Homepage
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
