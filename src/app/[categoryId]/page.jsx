import Container from "@/utils/Container";
import AllJobs from "../pages/Jobs/AllJobs/AllJobs";

const CategoryDetailsPage = ({params}) => {
    const decodedString = decodeURIComponent(params?.categoryId);

    return (
        <Container>
            <AllJobs query={decodedString} />
        </Container>
    );
};

export default CategoryDetailsPage;
