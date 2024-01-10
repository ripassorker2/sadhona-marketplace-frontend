const Container = ({children}) => {
    return (
        <div className="md:py-24 py-16">
            <div className="container">{children}</div>
        </div>
    );
};

export default Container;
