const ErrorPage = () => {
    const error = 404;
    return (
        <div>
            <h1>Unfortunately our server has returned a ${error} Error. Please check your request and try again</h1>
        </div>
    )
}

export default ErrorPage;