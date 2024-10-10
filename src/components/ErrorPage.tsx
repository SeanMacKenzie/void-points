import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError() as { statusText?: string; message?: string };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="mt-3">Oops!</h1>
                    <p>These are no the droids you are looking for.</p>
                    <p>
                        <em>{error.statusText || error.message}</em>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default ErrorPage;